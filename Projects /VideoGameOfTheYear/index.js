//DOM

function openCity(evt, cityName, color) {
  console.log(evt);
  console.log(cityName);

  console.log(document.getElementsByTagName("header")[0]);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  console.log(color);
  if (color === "blue") {
    switchBlue();
  } else if (color === "red") {
    switchRed();
  } else if (color === "gray") {
    switchGray();
  }

  //   switch (color) {

  //     case "blue":
  //        // console.log(color);
  //     switchBlue();
  //     //switchYellow()
  //       break;
  //     case "yell":
  //       switchYellow();
  //     case "gray":
  //       switchGray();
  //     default:
  //        // switchBlue();
  //       break;
  //   }
}

function switchBlue() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "blue";
  document.getElementsByTagName("body")[0].style.color = "white";
}

function switchRed() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "red";
  document.getElementsByTagName("body")[0].style.color = "white";
}

function switchGray() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "gray";
  document.getElementsByTagName("body")[0].style.color = "white";
}
