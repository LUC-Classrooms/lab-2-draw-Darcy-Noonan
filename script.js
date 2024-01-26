function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(0, 170, 200);
  // add your drawing code here ...
  fill (200, 160, 70) // Sun Color
  ellipse (75, 70, 70) // Sun
  fill (0, 200, 20) // Cactus Green
  ellipse (399, 200, 100, 200) // Cactus
  ellipse (450, 150, 60, 30)
  ellipse (465, 130, 35, 80)
  ellipse (325, 190, 80, 40)
  ellipse (300, 160, 40, 100)
  fill (200, 150, 50) // tan color
  rect(0,270,600) // Tan ground
  fill (30, 100, 50) // Lizard Color
  rect (150,290,170,80)
  triangle(75, 335, 150, 290, 150, 370) // Lizard Head
  arc(185, 360, 30, 50, TWO_PI, PI) // legs
  arc(200, 360, 30, 50, TWO_PI, PI)
  arc(265, 360, 30, 50, TWO_PI, PI)
  arc(280, 360, 30, 50, TWO_PI, PI)
triangle(499, 335, 320, 370, 320, 290) // Lizard Tail
fill (0, 0, 0)
strokeWeight (2);
ellipse (110, 325, 10) // eye
}