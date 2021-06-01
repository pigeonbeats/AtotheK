var snek, lastKey, fontSize, x1, y1, letterFill, align, startingX, startingY, xposition, yposition;
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
  colorMode(HSB);
  background("white");
  textFont(snek);
  textAlign(CENTER, CENTER);
  textSize(width/30);
  fill(0);
  fontSize = width/20;
  startingX = (0.1*width);
  xposition = startingX;
  startingY = (0.1*height);
  yposition = startingY;
  align = "left";
  noLoop();
  
}
function draw() {
  
  text("welcome to snakes n ladders\ntype your sentences\nand try left right enter keys", width/2, height/2); // welcome text

if (isLooping() == true) {  
  background('white');
 } // activate white bg when typing starts
 
  x1 = map(mouseX, 0, width, 0, 360);
  y1 = map(mouseY, 0, height, 0, 360);
  letterfill = int((x1+y1)/2);

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
   
  if (isLooping() == false) {
    loop(); } 
  
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
     yposition+=(0.01*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0.3*fontSize);
   }
   
   if (D.includes(key)) {
     yposition-=(0.1*fontSize);
   }
 }
 
   // G, Y
  if (GY.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0.22*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.21*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.16*fontSize);
   }
   
   if (I.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0.12*fontSize);
   }
   
   if (L.includes(key)) {
     yposition+=(0.25*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.34*fontSize);
   }
 }
 
    // H, N
  if (HN.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition-=(0.08*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.06*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.16*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.12*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.09*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition-=(0.13*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0.02*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.2*fontSize);
   }
 }
 
     // J
  if (J.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0.22*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.36*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.45*fontSize);
   }
   
   if (I.includes(key)) {
     yposition+=(0.16*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.38*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0.16*fontSize);
   }
   
   if (L.includes(key)) {
     yposition+=(0.21*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.3*fontSize);
   }
 }
 
      // L
  if (L.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.24*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0.2*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0*fontSize);
   }
 }
 
       // P
  if (P.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0.12*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.4*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.35*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.1*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.43*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0.05*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.07*fontSize);
   }
 }
 
      // Q
  if (Q.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0.12*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.07*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.35*fontSize);
   }
   
   if (I.includes(key)) {
     yposition+=(0.1*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.09*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0.07*fontSize);
   }
   
   if (L.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.4*fontSize);
   }
 }
 
       // R
  if (R.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition-=(0.08*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.2*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.15*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.3*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.23*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition+=(0*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0.3*fontSize);
   }
   
   if (D.includes(key)) {
     yposition-=(0.12*fontSize);
   }
 }

        // I
  if (I.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.15*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.24*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.25*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.1*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition-=(0.04*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0.3*fontSize);
   }
   
   if (D.includes(key)) {
     yposition-=(0.04*fontSize);
   }
 }
 
     // K
  if (K.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.13*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.22*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.05*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.15*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition-=(0.05*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.18*fontSize);
   }
 }
 
     // now it's everything with a flat bottom
 if (flatBottoms.includes(lastKey)) {
   if (flatTops.includes(key)) {
     yposition+=(0*fontSize);
   }
   
   if (BHK.includes(key)) {
     yposition+=(0.11*fontSize);
   }
   
   if (F.includes(key)) {
     yposition+=(0.22*fontSize);
   }
   
   if (I.includes(key)) {
     yposition-=(0.05*fontSize);
   }
   
   if (T.includes(key)) {
     yposition+=(0.14*fontSize);
   }
   
   if (UY.includes(key)) {
     yposition-=(0.09*fontSize);
   }
   
   if (L.includes(key)) {
     yposition-=(0*fontSize);
   }
   
   if (D.includes(key)) {
     yposition+=(0.11*fontSize);
   }
 }
   
    
    // generate new class properties
    wigglyLetters.push(new Wiggle (xposition, yposition, fontSize, key, int(random(0, 100))));
 
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
 constructor(x, y, size, letter, colourseed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.fill=colourseed;
 }

 display() {
   textSize(this.textSize);
   fill(((this.fill+letterfill)%360), 13, 86);
   text(this.letter, this.x, this.y);
 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
