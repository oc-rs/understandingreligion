function searchFrontpage() {
  var x = document.getElementById("frontpage-results");

  var item = document.getElementsByClassName("frontpageResultItem");
  var title = document.getElementsByClassName("frontpageResultTitle");
  
  var input = document.getElementById('searchbox');
  var filter = input.value.toUpperCase();

  for (i = 0; i < item.length; i++) {
    r = title[i].innerHTML;


    if (r.toUpperCase().indexOf(filter) > -1){
      item[i].style.display = "block";
      } 
    else {
        item[i].style.display = "none";
      }
  };

  x.style.maxHeight = "200px";
  x.style.height = "";
  x.style.padding = "5px";
  x.style.overflow = "auto";
}

function hideFrontpageResults() {
  var x = document.getElementById("frontpage-results");

  x.style.maxHeight = 0;
  x.style.padding = 0;
}

function search() {
    var titleList = document.getElementsByClassName('item-title');
    var authorList = document.getElementsByClassName('item-author');
    var yearList = document.getElementsByClassName('item-year');
    var tagsList = document.getElementsByClassName('item-taglist');

    var item = document.getElementsByClassName('item');

    var titleInput = document.getElementById('searchbox');
    var authorInput = document.getElementById('searchboxAuthor');
    var yearInput = document.getElementById('searchboxYear');
    var tagsInput = document.getElementById("searchboxTags");
    
    var titleFilter = titleInput.value.toUpperCase();
    var authorFilter = authorInput.value.toUpperCase();
    var yearFilter = yearInput.value.toUpperCase();
    var tagsFilter = tagsInput.value.toUpperCase();
    
    var title;
    var author;
    var year;
    var tags;

  for (i = 0; i < item.length; i++) {

      title = titleList[i].innerHTML;
      author = authorList[i].innerHTML;
      year = yearList[i].innerHTML;
      tags = tagsList[i].innerHTML;

      if  (
          title.toUpperCase().indexOf(titleFilter) > -1
          && 
          author.toUpperCase().indexOf(authorFilter) > -1
          &&
          year.toUpperCase().indexOf(yearFilter) > -1
          &&
          tags.toUpperCase().indexOf(tagsFilter) > -1
          )
      {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  };


  window.onload=function(){
    document.getElementById("button").addEventListener("click",function(){
      var i = document.getElementById("filters");
      var less = document.getElementById("less");
      var more = document.getElementById("more");

      if (more.style.display != "none") {
        more.style.display = "none";
        less.style.display = "block";
        i.style.height = "auto";
        i.style.padding = "";
      }

      else {
        more.style.display = "block";
        less.style.display = "none";
        i.style.height = "0";
        i.style.padding = "0";
      };
      

    }
    )
  }

  document.getElementById("searchbox").addEventListener("focus",function(){
    w = window.innerWidth;
    m = document.getElementById("search-modal")

    if( w < 500 ){
      m.classList.add("is-active");
      document.getElementById("title-mobile-input").focus();
    }
    else {
      null;
    }
  }
  )

  document.getElementById("searchboxAuthor").addEventListener("focus",function(){
    w = window.innerWidth;
    m = document.getElementById("search-author-modal")

    if( w < 500 ){
      m.classList.add("is-active");
      document.getElementById("author-mobile-input").focus();
    }
    else {
      null;
    }
  }
  )

  document.getElementById("searchboxYear").addEventListener("focus",function(){
    w = window.innerWidth;
    m = document.getElementById("search-year-modal")

    if( w < 500 ){
      m.classList.add("is-active");
      document.getElementById("year-mobile-input").focus();
    }
    else {
      null;
    }
  }
  )

  document.getElementById("searchboxTags").addEventListener("focus",function(){
    w = window.innerWidth;
    m = document.getElementById("search-tag-modal")

    if( w < 500 ){
      m.classList.add("is-active");
      document.getElementById("tag-mobile-input").focus();
    }
    else {
      null;
    }
  }
  )


function closeModal(){
    m1 = document.getElementById("search-modal");
    m2 = document.getElementById("search-author-modal");
    m3 = document.getElementById("search-year-modal");
    m4 = document.getElementById("search-tag-modal");


    m1.classList.remove("is-active");
    m2.classList.remove("is-active");
    m3.classList.remove("is-active");
    m4.classList.remove("is-active");

  }

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