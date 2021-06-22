var canvas;
var form;
var database;

function setup(){
  database=firebase.database();
  canvas = createCanvas(1200,800);
}


function draw(){
  background("pink");
  form=new Form();
  form.display();  
}
