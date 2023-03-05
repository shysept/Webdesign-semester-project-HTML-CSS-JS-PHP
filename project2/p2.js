const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
        tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
   })
})



const slides = document.querySelector('.slides')
const imagecount = document.querySelectorAll('.slides img').length;
const slidesimg = document.querySelectorAll('.slides');
const prevbutton = document.querySelector('#prevbutton');
const nextbutton = document.querySelector('#nextbutton');


console.log(slides);
console.log(slidesimg);
console.log(imagecount);

let x = 1


prevbutton.addEventListener('click',()=>{
    if(x>1){ x--};
    slidemover();    
document.getElementById('slidecount').innerHTML=(x);
document.getElementById('slidecount').classList=(x);
})

nextbutton.addEventListener('click',()=>{
    if(x<imagecount){ x++}; 
    slidemover();   
document.getElementById('slidecount').innerHTML=(x);
document.getElementById('slidecount').classList=(x);
})
console.log(x)

//changes slides classes to match .css active depending on x value
function slidemover(){
    {
    if (x == 1) {
        document.getElementById("one").classList = ('activeimg');
        document.getElementById("two").classList = ('');
        document.getElementById("three").classList = ('');
    } else if (x == 2) {
        document.getElementById("one").classList = ('');
        document.getElementById("two").classList = ('activeimg');
        document.getElementById("three").classList = ('');
    } else {
        document.getElementById("one").classList = ('');
        document.getElementById("two").classList = ('');
        document.getElementById("three").classList = ('activeimg');

    }}}



    const verifybutton = document.querySelector('#verifybutton');   

    verifybutton.addEventListener('click',()=>{

        document.getElementById("contactid").classList = ('contactvisible')
        document.getElementById("contactstext").classList = ('contactvisible')})
    
        const play = document.querySelector('#play');      
        const restart = document.querySelector('#restart');       
        var video= document.getElementById("video");

        function playandpause() { 
            if (video.paused){ 
              video.play();
              document.getElementById("play").innerHTML="||";
              }
            else{
              video.pause();
              document.getElementById("play").innerHTML=">";
          }  }       
        function reset() { 
            video.currentTime = 0; 
        } 

        function forward() { 
            video.currentTime = video.currentTime + 10;
        } 
        function backward() { 
            video.currentTime = video.currentTime - 10;
        } 

     

 //draggable box
        // Make the DIV element draggable:
//directly from https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("dragtext"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var email=document.getElementById("email");

    function verifysubmission(){ 
        document.getElementById("verification").classList = ('contactvisible')
        document.getElementById("verify0").innerHTML="Key name of the first name: "+fname.name;
        document.getElementById("verify1").innerHTML="Key value of the first name: "+ fname.value;
        document.getElementById("verify2").innerHTML="Key name of the last name:"+ lname.name;
        document.getElementById("verify3").innerHTML="Key value of the last name: "+ lname.value;
        document.getElementById("verify4").innerHTML="Key name of the email: " +email.name;
        document.getElementById("verify5").innerHTML="Key value of the first name:"+ email.value;
        document.getElementById("verify6").innerHTML="Value of action attribute of the Form element, which is URL : "+ window.location.href+"serverscript.html";
    } 