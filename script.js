

  const body = document.body;
const frogPosition = {x: 1, y: 1}

 
  
let frog = document.createElement('div');
  frog.className ='frog';
  body.appendChild(frog);
     frog.style.left = (frogPosition.x * 100) + "px";
     frog.style.top = (frogPosition.y * 100) + "px";
    

let div2 = document.createElement('div');
div2.className = 'car';
body.appendChild(div2);
div2.style.left = (0.6  * window.innerWidth) + "px";
div2.style.top = (0.5 * window.innerHeight) + "px";


let div3 = document.createElement('div');
div3.className = 'car';
body.appendChild(div3);
div3.style.left = (0.6 * window.innerWidth) + "px";
div3.style.top = (0.2 * window.innerHeight) + "px";

let div4 = document.createElement('div');
div4.className = 'car';
body.appendChild(div4);
div4.style.left = (0.6 * window.innerWidth) + "px";
div4.style.top = (0.7 * window.innerHeight) + "px";


let xAxis = 800;
let x1Axis = 800;
let x2Axis = 1000;

function moveCar(){
  div2.style.transform = `translateX(${xAxis}px)`;
  div3.style.transform = `translateX(${x1Axis}px)`;
  div4.style.transform = `translateX(${x2Axis}px)`;
}

//blerf code for keyboard movement, went over in class//

const isCoordinateInGrid = (x, y) => {
  console.log(x*100)
  console.log(window.innerWidth)
  return !(x < 0 || y < 0 || x*100 > window.innerWidth  || y*100 > window.innerHeight );

}

const canMoveTo = (x, y) => {
    if (!isCoordinateInGrid(x, y)) {

         return false;
     }
     return true;
 }
 
 const moveRight = () => {
     if (canMoveTo(frogPosition.x + 1, frogPosition.y)) {
         frogPosition.x += 1;
         moveCharacterTo();
     }
 }
 
 const moveLeft = () => {
     if (canMoveTo(frogPosition.x - 1, frogPosition.y)) {
         frogPosition.x -= 1;
         moveCharacterTo();
     }
 }
 
 const moveDown = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y + 1)) {
         frogPosition.y += 1;
         moveCharacterTo();
     }
 }
 
 const moveUp = () => {
     if (canMoveTo(frogPosition.x , frogPosition.y - 1)) {
         frogPosition.y -= 1;
         moveCharacterTo();
     }
 }
 
 document.body.addEventListener('keydown', evt => {
     const keyCode = evt.keyCode;
  
     if ([37, 38, 39, 40].includes(keyCode)) {
         evt.preventDefault();
     }
     switch (keyCode) {
         case 37:
         moveLeft();
         break;
       case 38:
         moveUp();
         break;
       case 39:
         moveRight();
         break;
       case 40:
         moveDown();
         break;
     }
 })

 //with help from Rachel//
 const moveCharacterTo = (x, y) => {
  const charElement = document.querySelector('.frog');
  charElement.style.left = `${(frogPosition.x * 100)}px`;
  charElement.style.top = `${(frogPosition.y * 100)}px`;
 }

 
///Mohammed helped with getting the cars to loop//

setInterval(()=>{
  x2Axis-= 8;
  x1Axis-=10;
  xAxis-=5;
  moveCar();
},10)

setInterval(()=>{
  x2Axis = 900;
  x1Axis = 1000;
  xAxis = 800;
  moveCar();
},5000)




