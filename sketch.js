// "Cuadrado rojo y Cuadrado negro de Malevich"

function setup() {
  createCanvas(400, 650);
}

function draw() {
  background(220);
  fill(0);
  rect(55, 110, 170, 170);
  strokeWeight(0);
  fill(150, 5, 5);
  quad(185, 440, 160, 330, 270, 300, 295, 410);
}
