//IMPORTANT: the sketch needs to be saved after every edit for the code to run properly (thanks sylvain for the heads up)
//there are edits to the index.html as well as a new file 'style.css' that are essential for this to work

function setup () {
  createCanvas(windowWidth, windowHeight);
  background(255);
  editablevariablename = createP('CA'); // createP creates a paragraph element that prints the text in the quotes under the name editablevariablename, using createP() instead of text() enables us to add CSS styles to the text, which is what is needed to read the font file's kerning information. 
  editablevariablename.style('font-size' ,'100px'); // using .style after the paragraph element is what gives it CSS styles, look them up for more options
  editablevariablename.style('font-family', 'testfont');
  editablevariablename.style('font-kerning', 'normal'); // this is what enables font kerning in your text. technically you don't need this because using a paragraph element automatically adds kerning to your text, but this line is here for visibility. 
  editablevariablename.position(0, 0);
}
