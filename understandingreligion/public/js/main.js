function search() {
    var list = document.getElementsByClassName('item-header');
    var item = document.getElementsByClassName('item');
    var input = document.getElementById('searchbox');
    var filter = input.value.toUpperCase();
    var title;

  for (i = 0; i < list.length; i++) {
      title = list[i].innerHTML;
      if (title) {
        if (title.toUpperCase().indexOf(filter) > -1) {
          item[i].style.display = "block";
        } else {
          item[i].style.display = "none";
        }
        }
      }
  }