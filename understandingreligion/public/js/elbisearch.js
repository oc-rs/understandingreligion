
var search_input = document.getElementById('searchbox2'); // input box for search
var search_results = document.getElementById('results2'); // targets the <ul>
var fuse; // holds our search engine
var results_available = false; // did we get any search results?
var first_run = true; // allow us to delay loading json data unless search activated

/*--------------------------------------------------------------
Load our json data and builds fuse.js search index
--------------------------------------------------------------*/
search_input.addEventListener('focus', function() {
	console.log("search_input has focus");
	search_init(); // try to load the search index
});

/*--------------------------------------------------------------
Scrolling through results
--------------------------------------------------------------*/
search_input.addEventListener('keydown', function(e){
	var list = document.getElementById('results2'); // targets the <ul>
	var first = list.firstChild; // targets the first <li>
	var last = list.lastChild;

	console.log(document.activeElement.innerHTML);

	// Allow ESC (27) to close search box
	if (e.code == "Escape") {
		list.style.display = "block";
	}

	// DOWN (40) arrow
	if (e.code == "DownArrow") {
		if (results_available) {
			e.preventDefault(); // stop window from scrolling
			if ( document.activeElement == search_input) { first.focus(); } // if the currently focused element is the main input --> focus the first <li>
			else if ( document.activeElement == last ) { first.focus(); } // if we're at the bottom, loop to the start
			// else if ( document.activeElement == last ) { last.focus(); } // if we're at the bottom, stay there
			else { document.activeElement.parentElement.nextSibling.firstElementChild.focus(); } // otherwise select the next search result
		}
	}

	// UP (38) arrow
	if (e.keyCode == 38) {
		if (results_available) {
			e.preventDefault(); // stop window from scrolling
			if ( document.activeElement == search_input) { search_input.focus(); } // If we're in the input box, do nothing
			else if ( document.activeElement == first) { search_input.focus(); } // If we're at the first item, go to input box
			else { document.activeElement.parentElement.previousSibling.firstElementChild.focus(); } // Otherwise, select the search result above the current active one
		}
	}

	// Use Enter (13) to move to the first result
	if (e.keyCode == 13) {			
		if (results_available && document.activeElement == search_input) {
			e.preventDefault(); // stop form from being submitted
			first.focus();
		}
	}
})

/*--------------------------------------------------------------
Fetch some json without jquery
--------------------------------------------------------------*/
function fetch_JSON(path, callback) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				var data = JSON.parse(httpRequest.responseText);
					if (callback) callback(data);
			}
		}
	};
	httpRequest.open('GET', path);
	httpRequest.send();
}

/*--------------------------------------------------------------
Load script
based on https://stackoverflow.com/a/55451823
--------------------------------------------------------------*/
function load_script(url) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement("script");
		script.onerror = reject;
		script.onload = resolve;
		if (document.currentScript) {
			document.currentScript.parentNode.insertBefore(script, document.currentScript);
		}
		else {
			document.head.appendChild(script)
		}
		script.src = url;
	});
}

/*--------------------------------------------------------------
Load our search index, only executed once
on first call of search box (Ctrl + /)
--------------------------------------------------------------*/
function search_init() {
	if (first_run) {
		load_script(window.location.origin + '/js/fuse.js').then(() => {
			search_input.value = ""; // reset default value
			first_run = false; // let's never do this again
			fetch_JSON('/index.json', function(data){
				var options = { // fuse.js options; check fuse.js website for details
					shouldSort: true,
					location: 0,
					distance: 100,
					threshold: 0.2,
					minMatchCharLength: 2,
					keys: [
						'permalink',
						'title',
						'categories',
						'tags'
						]
				};

				fuse = new Fuse(data, options); // build the index from the json file

				search_input.addEventListener('keyup', function(e) { // execute search as each character is typed
					search_exec(this.value);
				});
				console.log("index.json loaded"); // DEBUG
			});
		}).catch((error) => { console.log('fixedsearch failed to load: ' + error); });
	}
}

/*--------------------------------------------------------------
Using the index we loaded on Ctrl + /, run
a search query (for "term") every time a letter is typed
in the search box
--------------------------------------------------------------*/
function search_exec(term) {
	let results = fuse.search(term); // the actual query being run using fuse.js
	let search_items = ''; // our results bucket

	if (results.length === 0) { // no results based on what was typed into the input box
		results_available = false;
		search_items = '';
	} else { // build our html
		results2.style.display = "block";
		for (let item in results.slice(0,15)) { // only show first 15 results
			let cat = ''
			if (results[item].item.categories === null) {
				cat = 'Other';
			} else {
				cat = results[item].item.categories.join(', ');
			}
			search_items = search_items +
`<li><a href="${results[item].item.permalink}" tabindex="0">
<span class="s-title title">${results[item].item.title}</span>

<span class="" style="background-color: #032539; color: #FFF; padding: 5px; margin: 0px 0px 10px 0px; display: inline-block">${cat}</span>

<br><span class="s-summary">${results[item].item.summary}</span>
<span class="tag">${results[item].item.tags.join('</span>&nbsp;<span class="tag">')}</span>
</a></li>`;
		}
		results_available = true;
	}

	search_results.innerHTML = search_items;
	if (results.length > 0) {
		first = search_results.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
		last = search_results.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
	}
}