var player,plrImg
var score = 0
var crs,crsImg
var restart,rstImg


function preload(){
plrImg = loadImage("Button.png")
crsImg = loadImage("Cursor.png")
rstImg = loadImage("restart.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  player = createSprite(windowWidth/2,windowHeight/2,25,25)
  player.shapeColor = "white"
  player.addImage(plrImg)
  player.scale = 1

  crs = createSprite(0,0,25,25)

  crs.addImage(crsImg)
  crs.x = mouseX
  crs.y = mouseY
  
  restart = createSprite(75,25,400,50)
  restart.addImage(rstImg)
  restart.scale = 3
}

function draw() {
  background(0);  
  fill("white")
  textSize(50)
  text("Score: "+score, 25,350)
  if(mousePressedOver(player)){
    player.x = Math.round(random(350,windowWidth - 50))
    player.y = Math.round(random(50,windowHeight - 50))
    score = score + 1
    
  }
 if(mousePressedOver(restart)){
   score = 0
   
}
    
  
    drawSprites();
}