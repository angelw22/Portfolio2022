const workIcon = document.getElementById("work-icon");
const gameIcon = document.getElementById("game-icon");
const resumeIcon = document.getElementById("resume-icon")
const screen = document.getElementById("screen");

document.getElementById("main-contents").style.height = (screen.offsetHeight - 20) + "px";

//Desktop icons
dragElement(gameIcon);
dragElement(workIcon);
dragElement(resumeIcon)
dragElement(document.getElementById("popup-work-icon"))
dragElement(document.getElementById("popup-resume-icon"))

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (elmnt.classList.contains('popup')) {
    elmnt.firstElementChild.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    let elemTopPos = elmnt.offsetTop - pos2
    let elemLeftPos = elmnt.offsetLeft - pos1;
    console.log('screen offset, elmt offset', screen.offsetHeight, elmnt.offsetHeight)

    if (elemTopPos > 0 && elemTopPos < (screen.offsetHeight - elmnt.offsetHeight) - 45) {
      elmnt.style.top = elemTopPos + "px";
    } else {
      console.log('close drag top, because elemtop', elemTopPos)
      closeDragElement();
    }

    if (elemLeftPos > 0 && elemLeftPos < (screen.offsetWidth - elmnt.offsetWidth)) {
      elmnt.style.left = elemLeftPos + "px";
    } else {
      console.log('close drag lefts')

      closeDragElement();
    } 
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function iconClick (ev, el) {
  if (ev.detail === 1) {
    console.log(el)
    if (el.classList.contains("highlight")){
      el.classList.remove("highlight");
    } else {
      el.classList.add("highlight");
    }
  } else if (ev.detail > 1) {
    console.log('double clicked')
    openPopUp(el.id);
  }
};


function openPopUp (id) {
  console.log('opening,', 'popup-' + id)
  document.getElementById('popup-' + id).style.display = "block";
}


function closePopUp (e, id) {
  e.stopPropagation();  
  console.log('hi')
  console.log('closing', id);
  document.getElementById(id).style.display = "none";
}