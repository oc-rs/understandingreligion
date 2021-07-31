// Hides the control panel when you scroll to the bottom
// of the page, so that you can view all of the footer content
document.onscroll = function() {
  var c = document.getElementById("controlpanel");
  if(c){
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
      document.getElementById('controlpanel').style.display='none';
    }
    else {
      document.getElementById('controlpanel').style.display='';
    }
  }
}

// Launch mobile-friendly search modal
var s = document.getElementById("searchbox");
if(s){
document.getElementById("searchbox").addEventListener("focus",function(){
  w = window.innerWidth;
  m = document.getElementById("search-modal")

  if( w < 500 ){
    m.classList.add("is-active");
    document.getElementById("mobile-input").focus();
  }
  else {
    null;
  }
}
)
}

// DEFINED FUNCTIONS

// SITE SEARCH
function site_search() {
  var results = document.getElementById("site-search-results");
  var searchstring = document.getElementsByClassName('site-searchstring');
  var item = document.getElementsByClassName("site-search-result-item");
  var title = document.getElementsByClassName("site-search-result-title");
  
  var input = document.getElementById('site-search-input');
  var filter = input.value.toUpperCase();

  if (input.value.length > 0) {
    results.style.display = "block";
  }
  else {
    results.style.display = "none";
  }

  for (i = 0; i < item.length; i++) {
    r = searchstring[i].innerHTML;


    if (r.toUpperCase().indexOf(filter) > -1){
      item[i].style.display = "block";
      } 
    else {
        item[i].style.display = "none";
      }
  };
}

// FRONT PAGE SEARCH
function searchFrontpage() {
  var results = document.getElementById("frontpage-results");

  var item = document.getElementsByClassName("frontpageResultItem");
  var title = document.getElementsByClassName("frontpageResultTitle");
  
  var input = document.getElementById('searchbox');
  var filter = input.value.toUpperCase();

  if (input.value.length > 0) {
    results.style.display = "block";
  }
  else {
    results.style.display = "none";
  }

  for (i = 0; i < item.length; i++) {
    r = title[i].innerHTML;


    if (r.toUpperCase().indexOf(filter) > -1){
      item[i].style.display = "block";
      } 
    else {
        item[i].style.display = "none";
      }
  };
}

// Normal search function for desktop interface
function search() {
    var list = document.getElementsByClassName('searchstring');
    var item = document.getElementsByClassName('item');
    var input = document.getElementById('searchbox');
    var filter = input.value.toUpperCase();    
    var string;

  for (i = 0; i < item.length; i++) {

      string = list[i].innerHTML;

      if  (
          string.toUpperCase().indexOf(filter) > -1
          )
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  };
// End of normal search function for desktop interface

// Launch mobile-friendly search modal
function launch_search_modal() {
  m = document.getElementById("site-search-modal");

  m.classList.add("is-active");
  document.getElementById("site-search-input").focus();
};

// Close mobile-friendly search modal
function closeModal(){
    m1 = document.getElementById("search-modal");

    m1.classList.remove("is-active");
  }
// End of close mobile-friendly search modal


function close_site_search_modal(){
  m1 = document.getElementById("site-search-modal");

  m1.classList.remove("is-active");
}

// Search function within mobile-friendly search modal
function m_search(){    
  var list = document.getElementsByClassName('m_searchstring'); // Get search string for each record
  var item = document.getElementsByClassName('m_result-item'); // Get record container
  var input = document.getElementById('mobile-input'); // Get search text from user
  var filter = input.value.toUpperCase(); // Standardise input
  
  var title; // Empty variable to populate with search criteria during loop

for (i = 0; i < item.length; i++) {

    title = list[i].innerHTML;

    if  (title.toUpperCase().indexOf(filter) > -1)
    {
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
    }
}
// End of 



  function titleSearch(){    
    var list = document.getElementsByClassName('title-result-link');
    var item = document.getElementsByClassName('title-result-item');
    var input = document.getElementById('title-mobile-input');
    var filter = input.value.toUpperCase();
    
    var title;

  for (i = 0; i < item.length; i++) {

      title = list[i].innerHTML;

      if  (title.toUpperCase().indexOf(filter) > -1)
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  }

  function authorSearch(){    
    var list = document.getElementsByClassName('author-result-link');
    var item = document.getElementsByClassName('author-result-item');
    var input = document.getElementById('author-mobile-input');
    var filter = input.value.toUpperCase();
    
    var title;

  for (i = 0; i < item.length; i++) {

      title = list[i].innerHTML;

      if  (title.toUpperCase().indexOf(filter) > -1)
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  }

  function yearSearch(){    
    var list = document.getElementsByClassName('year-result-link');
    var item = document.getElementsByClassName('year-result-item');
    var input = document.getElementById('year-mobile-input');
    var filter = input.value.toUpperCase();
    
    var title;

  for (i = 0; i < item.length; i++) {

      title = list[i].innerHTML;

      if  (title.toUpperCase().indexOf(filter) > -1)
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  }

  function tagSearch(){    
    var list = document.getElementsByClassName('tag-result-link');
    var item = document.getElementsByClassName('tag-result-item');
    var input = document.getElementById('tag-mobile-input');
    var filter = input.value.toUpperCase();
    
    var title;

  for (i = 0; i < item.length; i++) {

      title = list[i].innerHTML;

      if  (title.toUpperCase().indexOf(filter) > -1)
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  }