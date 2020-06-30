function toggle_contact_box() {
  var cb = document.getElementById("contact_box");
  var cbc = document.getElementById("cb_ctrl");
  if (cb.style.display == "none") {
    cb.style.display = "block";
    cbc.innerHTML = "Hide Contact Info";
  } else {
    cb.style.display = "none";
    cbc.innerHTML = "Show Contact Info";
  }
}


var col_state = 0;

function change_colsch() {
  var ibs = document.getElementsByClassName("infobox");
  for (i = 0; i < ibs.length; i++) {
    if (col_state % 3 == 0) {
      ibs[i].style.backgroundImage = "linear-gradient(to right, #FFFF00, #FF0000)";
      ibs[i].style.border = "5px solid #7F3F00";
    } else if (col_state % 3 == 1) {
      ibs[i].style.backgroundImage = "linear-gradient(to right, #007F00, #007F7F)";
      ibs[i].style.border = "5px solid #003F1F";
    } else {
      ibs[i].style.backgroundImage = "linear-gradient(to right, #0000FF, #FF00FF)";
      ibs[i].style.border = "5px solid #3F007F";
    }
  }
  var btns = document.getElementsByClassName("stylized_button");
  for (i = 0; i < btns.length; i++) {
    if (col_state % 3 == 0) {
      btns[i].style.backgroundColor = "#7F3F00";
    } else if (col_state % 3 == 1) {
      btns[i].style.backgroundColor = "#003F1F";
    } else {
      btns[i].style.backgroundColor = "#3F007F";
    }
  }
  col_state += 1;
}
