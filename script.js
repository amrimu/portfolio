const menu = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.mobile-navigation');

menu.addEventListener('click', function(){
    console.log('click hamburger');

    if(menu.classList.contains('open')){ //if html class shows 'hamburger open' and you click it, run these:
        menu.classList.remove('open');
        menuLinks.classList.add('close');
        menuLinks.classList.add('fade-out');
        menuLinks.classList.remove('fade-in');

    }
    else { //if html class shows 'hamburger' and you click it, run these:
        menu.classList.add('open');
        menuLinks.classList.remove('close');
        menuLinks.classList.add('fade-in');
        menuLinks.classList.remove('fade-out');
    }

    /* 
    menu.addEventListener('click', function(){
    menu.classList.toggle('open');  if it has open, remove. if it doesn't have open, add.
    menuLinks.classList.remove('active'); */
});

var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;
function divVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

myID = document.getElementById("myID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 100) {
    myID.className = "bottomMenu show"
  } else {
    myID.className = "bottomMenu hide"
  }
};

window.addEventListener("scroll", myScrollFunc);