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
  // document.getElementsByTagName("body")[0].style.color = "white";
}

function switchRed() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "red";
  // document.getElementsByTagName("body")[0].style.color = "white";
}

function switchGray() {
  document.getElementsByTagName("header")[0].style.backgroundColor = "gray";
  // document.getElementsByTagName("body")[0].style.color = "white";
}

// const gallery = document.querySelector('.gallery');
let html2 = "";

const gallery = document.querySelector(".test");
const Title = document.querySelector(".clip");
//     const overlay = document.querySelector('.overlay');
//     const overlayImage = overlay.querySelector('img');
//     const overlayClose = overlay.querySelector('.close');
//          // <img src="images/${randomNumber(12)}.jpg">
function generateHTML(data) {
  console.log("inside generate " + data.gameName);
  return `

      <div class="fl w-50 w-25-m w-20-l pa2">
      <a href="" class="db link dim tc">
        <img src=${data.photolink} alt="Santigold 99 cents - Album cover" class="w-100 db outline black-10"/>
        <dl class="mt2 f6 lh-copy">
          <dt class="clip">${data.gameName}</dt>
          <dd class="ml0 black truncate w-100">${data.gameName}</dd>
          <dt class="clip">Artist</dt>
          <dd class="ml0 gray truncate w-100">${data.year}</dd>
        </dl>
      </a>
    </div>
       
      `;
}

const data = [
  { photolink:"http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png", gameName: "Mario Maker 2", year: "2019", alt: "gameAlt" },
  { photolink:"http://is3.mzstatic.com/image/thumb/Music62/v4/fa/ae/a6/faaea65f-0819-bb5d-afaa-4f5e84015204/source/400x40000bb.png", gameName: "Mario Brothers", year: "1997" },
  { photolink:"http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png", gameName: "Mario Brothers 2", year: "1997" },
  { photolink:"http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png", gameName: "Mario Brothers 2", year: "1997" },
  { photolink:"http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png", gameName: "Mario Brothers 2", year: "1997" }
 
];
//var arr = ["cmm", "com", "cng"];

// for (let i = 0; i < data.Roles.length; i++) {
//   const el = data.Roles[i];
//  //html2 +=
//   //console.log(el)
//   ///if (arr.indexOf(el.code) > -1) out.push(el.fullname);
// }

//  <div class="item h${1} v${4}">

//         <img src="images/${1}.jpg">
//         <div class="item__overlay">
//           <button>View →</button>
//         </div>
//       </div>

//   function randomNumber(limit) {
//     return Math.floor(Math.random() * limit) + 1;
//   }
//data.map(generateHTML)
// const digits = Array.from({ length: 50 }, () => [4, 4]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])
//   const digits = Array.from(data)
//   console.log(data)
//  console.log(digits);
const html = data.map(generateHTML).join("");
//console.log(html);
gallery.innerHTML = html;
