var snek, lastKey, fontSize, align, startingX, startingY, xposition, yposition;
var wigglyLetters = [];

let alphabet = [" ","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//letters with the bottom perfectly flat
let flatBottoms = ["A", "B", "C", "D", "E", "M", "O", "S", "T", "U", "V", "W", "X", "Z", "a", "b", "c", "d", "e", "m", "o", "s", "t", "u", "v", "w", "x", "z"];
//letters with the top perfectly flat
let flatTops = ["A", "C", "E", "G", "J", "M", "N", "O", "P", "Q", "R", "S", "V", "W", "X", "Z", "a", "c", "e", "g", "j", "m", "n", "o", "p", "q", "r", "s", "v", "w", "x", "z"];
//other individual letters with pointy tops and bottoms
let F = ["F", "f"];
let GY = ["G", "Y", "g", "y"];
let HN = ["H", "N", "h", "n"];
let J = ["J", "j"];
let L = ["L", "l"];
let P = ["P", "p"];
let Q = ["Q", "q"];
let R = ["R", "r"];
let I = ["I", "i"]; 
let K = ["K", "k"];
let BHK = ["B", "H", "K", "b", "h", "k"];
let T = ["T", "t"];
let UY = ["U", "Y", "u", "y"];
let B = ["B", "b"];
let D = ["D", "d"];

function preload() {
snek = loadFont('data/snek.otf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(snek);
  fontSize = 100;
  startingX = (0.1*width);
  xposition = startingX;
  startingY = (0.1*height);
  yposition = startingY;
  align = "left";
  
}
function draw() {
  fill(255);
  background(0);
  //each of the wiggly letters that we have
  for (var i=0; i<wigglyLetters.length ; i++){
    wigglyLetters[i].display();
  }

}



function keyPressed(){
  if (keyCode === LEFT_ARROW){
   wigglyLetters=[];
   startingX = (0.1*width);
  xposition = startingX;
  startingY = (0.1*height);
  yposition = startingY;
  align = "left";
  lastKey = null; // doesn't kern with regard to lastKey if it's the first char on a new line
  }
  
  if (keyCode === RIGHT_ARROW) {
    wigglyLetters=[];
    startingX = (0.9*width);
  xposition = startingX;
  startingY = (0.1*height);
  yposition = startingY;
  align = "right";
  lastKey = null;
  }
  
  if (keyCode === ENTER) {
   if (align == "left") {
     startingX+=(1.1*fontSize);
        
   }
   if (align == "right") {
     startingX-=(1.1*fontSize);
   }
        xposition = startingX;
        startingY = (0.1*height);
        yposition = startingY;
        lastKey = null;
  
  }
  
}

function keyTyped(){
   
  // check if what's typed is a letter of the alphabet
    if (alphabet.includes(key)) { 
      
// HORIZONTAL kern adjust for letters which don't left align with the others
       if (key == "a" || key == "A" || key == "s" || key == "S" || key == "z" || key == "Z") { 
      xposition+=(0.09*fontSize);
      }
      
       if (key == "i" || key == "I") {
         xposition+=(0.18*fontSize);
       }
       
// THIS IS WHERE IT STARTS TO GET HECTIC
// VERTICAL KERN STARTS HERE

 // first are letters without flat bottoms
 if (F.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition-=(0.1*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.16*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.43*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0.02*fontSize);
   }
 }
    
    // generate new class properties
    wigglyLetters.push(new Wiggle (xposition, yposition, fontSize, key));
 
    // stores the newest key as the lastKey for the next letter
     lastKey=key;
 
    // starting position for the next letter
      yposition+=(0.57*fontSize); 
      xposition = startingX;   
    
      //automatic line break from the left
    if (yposition>(0.9*height)) {
      
      if (align == "left") {
        startingX+=(1.1*fontSize);
      }
      
      else if (align == "right") {
        startingX-=(1.1*fontSize);
        
      }
        
        xposition = startingX;
        startingY = (0.1*height);
        yposition = startingY;
        lastKey = null; 
  
      }
      
    // empties text if page gets full
       if (align == "left" && xposition>(0.9*width)) {
         wigglyLetters=[];
         startingX=(0.1*width);
         xposition = startingX;
         lastKey = null;
       }
       
       if (align == "right" && xposition<(0.1*width)) {
         startingX=(0.9*width);
         wigglyLetters=[];
         xposition = startingX;
         lastKey = null;
       }

} // bracket for alphabet.includes(key)
} //bracket for keyTyped()

class Wiggle {
 constructor(x, y, size, letter){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
 }

 display() {
   textSize(this.textSize);
   text(this.letter, this.x, this.y);
 }
}
