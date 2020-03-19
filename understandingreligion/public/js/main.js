function search() {
    var titleList = document.getElementsByClassName('item-header');
    var item = document.getElementsByClassName('item');
    var input = document.getElementById('searchbox');
    var filter = input.value.toUpperCase();
    var title;

  for (i = 0; i < titleList.length; i++) {
      title = titleList[i].innerHTML;
      if (title.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  };

  function searchAuthor() {
    var list = document.getElementsByClassName('item-subtitle');
    var item = document.getElementsByClassName('item');
    var input = document.getElementById('searchboxAuthor');
    var filter = input.value.toUpperCase();
    var q;

  for (i = 0; i < titleList.length; i++) {
      q = list[i].innerHTML;
      if (q.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "block";
      } else {
        item[i].style.display = "none";
      }
      }
  };

  window.onload=function(){
    document.getElementById("try").addEventListener("click",function(){
      var i = document.getElementById("filters");
      
      i.style.height = "auto";
      i.style.padding = "";
    }
    )
  }
