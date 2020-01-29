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

const gallery = document.querySelector(".game-gallery");

//     const overlay = document.querySelector('.overlay');
//     const overlayImage = overlay.querySelector('img');
//     const overlayClose = overlay.querySelector('.close');
//          // <img src="images/${randomNumber(12)}.jpg">
function generateHTML(data) {
  console.log("inside generate " + data.background_image);
  return `
  <a href="https://geo.itunes.apple.com/us/movie/primer/id536457427?at=1l3vqFJ&ct=1l3vqFJ&mt=6" class="fl w-50 w-25-l link overflow-hidden">
  <div role="img" aria-label="Primer movie" class="grow aspect-ratio--4x6 " style="background: url(${data.background_image}) no-repeat center center; background-size: cover;"></div>
</a>
`;
}

{/* <article>
<img src="${data.background_image}" alt="Sample photo">
<div class="text">
  <h3>${data.name}</h3>
  <p>Release Date: ${data.released}</p>
  <a href="${data.website}" class="btn btn-primary btn-block">Here's why</a>
</div>
</article> */}

{/* <div class="fl w-50 w-25-m w-20-l pa2">
<a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" class="db link dim tc">
  <img src="${data.background_image}" alt="Frank Ocean Blonde Album Cover" class="w-100 db outline black-10"/>
  <dl class="mt2 f6 lh-copy">
    <dt class="clip">${data.name}</dt>
    <dd class="ml0 black truncate w-100">Blonde</dd>
    <dt class="clip">Artist</dt>
    <dd class="ml0 gray truncate w-100">Frank Ocean</dd>
  </dl>
</a>
</div> */}
  /* <article class="fl w-100 w-75-m w-25-ns pa2-ns">
              <div class="aspect-ratio aspect-ratio--1x1">
                <img style="background-image:url(${data.background_image});" 
                class="db bg-center cover aspect-ratio--object" />
              </div>
              <a href="#0" class="ph2 ph0-ns pb3 link db">
                <h3 class="f5 f4-ns mb0 black-90">${data.name}</h3>
                <h3 class="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
              </a>
  </article> */

//  <div class="fl w-50 w-30-m w-25-l pa2">
//     <a href="" class="db link dim tc">
//       <img src=${data.background_image} alt="Santigold 99 cents - Album cover" class="w-100 db outline black-10"/>
//       <dl class="mt2 f6 lh-copy">
//         <dt class="clip">${data.name}</dt>
//         <dd class="ml0 black truncate w-100">${data.name}</dd>
//         <dt class="clip">Artist</dt>
//         <dd class="ml0 gray truncate w-100">${data.released}</dd>
//       </dl>
//     </a>
//   </div>

// const data = [
//   {
//     photolink:
//       "http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png",
//     gameName: "Mario Maker 2",
//     year: "2019",
//     alt: "gameAlt"
//   },
//   {
//     photolink:
//       "http://is3.mzstatic.com/image/thumb/Music62/v4/fa/ae/a6/faaea65f-0819-bb5d-afaa-4f5e84015204/source/400x40000bb.png",
//     gameName: "Mario Brothers",
//     year: "1997"
//   },
//   {
//     photolink:
//       "http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png",
//     gameName: "Mario Brothers 2",
//     year: "1997"
//   },
//   {
//     photolink:
//       "http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png",
//     gameName: "Mario Brothers 2",
//     year: "1997"
//   },
//   {
//     photolink:
//       "http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png",
//     gameName: "Mario Brothers 2",
//     year: "1997"
//   }
// ];

// const html = data.map(generateHTML).join("");

// gallery.innerHTML = html;

let urls = [
  "PISTOL-WHIP",
  "HYPNOSPACE-OUTLAW",
  "ISLANDERS",
  "DIVISION-2",
  "NEW-SUPER-MARIO-BROS-U-DELUXE",
  "BLOODSTAINED-RITUAL-OF-THE-NIGHT",
  "jedi-the-fallen-order",
  "kind-words-lo-fi-chill-beats-to-write-to",
  "STEAMWORLD-QUEST",
  "UNTITLED-GOOSE-GAME",
  "DRAGON-QUEST-BUILDERS-2",
  "THE-LEGEND-OF-ZELDA-LINKS-AWAKENING",
  "EASTSHADE",
  "ASTRAL-CHAIN",
  "GRINDSTONE",
  "SLAY-THE-SPIRE",
  "sky-light-awaits",
  "pokemon-2019",
  "GEARS-5",
  "SUPER-MARIO-MAKER-2",
  "LONELY-MOUNTAINS-DOWNHILL",
  "REMNANT-FROM-THE-ASHES",
  "VOID-BASTARDS",
  "TELLING-LIES",
  "TETRIS-99",
  "WHAT-THE-GOLF",
  "DISCO-ELYSIUM",
  "cadence-of-hyrule",
  "final-fantasy-xiv-shadowbringers",
  "CARD-OF-DARKNESS",
  "man-of-medan",
  "WILMOTS-WAREHOUSE",
  "DEVIL-MAY-CRY-5",
  "MORDHAU",
  "MANIFOLD-GARDEN",
  "TOTAL-WAR-THREE-KINGDOMS",
  "TEAMFIGHT-TACTICS",
  "FIRE-EMBLEM-THREE-HOUSES",
  "APEX-LEGENDS",
  "SAYONARA-WILD-HEARTS",
  "A-SHORT-HIKE",
  "RESIDENT-EVIL-2",
  "DEATH-STRANDING",
  "THE-OUTER-WORLDS",
  "LUIGIS-MANSION-3",
  "SHADOWS-DIE-TWICE",
  "BABA-IS-YOU",
  "DEVOTION",
  "CONTROL",
  "OUTER-WILDS"
].map((game, i) => {
  return `https://api.rawg.io/api/games/${game}`;
});

// [
//   ("https://api.rawg.io/api/games/PISTOL-WHIP",
//   "https://api.rawg.io/api/games/HYPNOSPACE-OUTLAW",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/division-2",
//   "https://api.rawg.io/api/games/NEW-SUPER-MARIO-BROS-U-DELUXE",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/ISLANDERS",
//   "https://api.rawg.io/api/games/9767",
//   "https://api.rawg.io/api/games/27984",
//   "https://api.rawg.io/api/games/3498",
//   "https://api.rawg.io/api/games/3498",
//   "https://api.rawg.io/api/games/27984",
//   "https://api.rawg.io/api/games/27984",
//   "https://api.rawg.io/api/games/27984")
// ];

// const options = {
//   headers: new Headers({
//     Accept: "application/json",
//     Authorization: "Basic",
//     "Content-Type": "application/x-www-form-urlencoded",
//     Host: "api.rawg.io",
//     "User-Agent": "Video Game Of the Year/hulkbaby2@gmail.com"
//   }),
//   method: "GET"
// };

// Promise.all(urls.map(url => fetch(url, options)))
//   .then(resp => Promise.all(resp.map(r => r.json())))
//   .then(data => {
//     console.log(data);

//     const html = data.map(generateHTML).join("");
//     console.log(html);
//     gallery.innerHTML = html;
//   });

// fetch("https://api.rawg.io/api/games")
//   //fetch("https://api.rawg.io/api/games?page_size=1&game=9767,27984")
//   .then(response => {
//     return response.json();
//   })
//   .then(myJson => {
//     console.log(myJson);
//   });
