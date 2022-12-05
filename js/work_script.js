const urlParams = new URLSearchParams(window.location.search);
//e.g.  https://url.com/?shortcut=workshops
console.log(urlParams.has('shortcut'))


var activePage = "home"
var activeCategory = "ux"
var activeWorkshopCat = ""

var categInfo = {
  ux: ["UX Projects", "Case studies of the projects I have worked on as a UX Designer"],
  workshop: ["Workshops", "Workshops I have run for knowledge sharing"],
  sideproj: ["Side Projects", "Things I built for fun in my own time"]
}

function switchCateg (cat) {
  //left nav highlights
  document.getElementById("list-" + activeCategory).classList.remove("highlighted");
  document.getElementById("list-" + cat).classList.add("highlighted");

  //change title and desc
  document.getElementById('categ-title').innerText = categInfo[cat][0]
  document.getElementById('categ-desc').innerText = categInfo[cat][1]

  //remove/hide old items
  document.getElementById(activeCategory + "-items").style.display = "none"
  //show new items
  document.getElementById(cat+"-items").style.display = "flex"

  activeCategory = cat;
}


function openItem (item, categ) {
  if (categ === "workshop") {
    if (item === "workshop") {
      hideItem(activeWorkshopCat);
    } else {
      activeWorkshopCat = item; 
      hideItem("workshop");
    }
    document.getElementById(item + "-content").style.display = "block";
    

  } else if (item !== activePage) {
    hideItem(activePage);

    switch(item) {
      case "home":
        document.getElementById('popup-home-contents').style.display = "table-row";
        document.getElementById('popup-nav').style.display = "table-row";
        activePage = "home";
        break;
      default:
        document.getElementById(item + "-content").style.display = "block"
        activePage = item;
    }
  }
}

function hideItem (item) {
  console.log('hiding,', item);

  if (item === "home") {
    document.getElementById('popup-home-contents').style.display = "none";
    document.getElementById('popup-nav').style.display = "none";
  } else {
    document.getElementById(item + "-content").style.display = "none"

  }
}

