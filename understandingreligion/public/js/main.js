
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
