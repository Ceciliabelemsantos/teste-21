var oito, oitoImg;
var obst1, obst1Img,obst2, obst2Img, obst3,obst3Img, obst4, obst4Img;
var gameover, gameoverImg;
var recomeçar, recomeçarImg
var fundo,fundoImg;
var play
var end
var gameState=play

function preload()
{
  oitoImg=loadAnimation("anos-80.png","anos-90.png");
  obst1Img=loadImage("controle-de-video-game.png");
  obst2Img=loadImage("dinossauro.png");
  obst3Img=loadImage("lampada-de-lava.png");
  obst4Img=loadImage("maquina-de-arcade.png");
  gameoverImg=loadImage("game-over.png");
  recomeçarImg=loadImage("recarregar.png");
  fundoImg=loadImage("2370773-estilo-anos-90-com-fundo-com-formas-geometricas-em-tons-pasteis-grátis-vetor.jpg");
}

function setup() 
{
  createCanvas(600,400);

  fundo=createSprite(300,200,600,400);
  fundo.addImage("fundo",fundoImg);
  fundo.velocityY=3;

  oito=createSprite(300,200,50,50);
  oito.addAnimation("oito",oitoImg);
  oito.scale=0.8;

  gameover=createSprite(300,150,50,50);
  gameover.addImage("gameover",gameoverImg);

  recomeçar=createSprite(300,200,50,50);
  recomeçar.addImage("recomeçar",recomeçarImg);

  obst1Group = new Group();
  obst2Group = new Group();
  obst3Group = new Group();
  obst4Group = new Group();
}

function draw() 
{
  background("white");

  if (gameState==="play")
    {
       gameover.visible=false;
       recomeçar.visible=false;

      if (keyDown("up_arrow"))
      {
        oito.velocityY=-10;
      }

      if(keyDown("right_arrow"))
      {
         oito.x = oito.x + 3;
      }

      if(keyDown("left_arrow"))
      {
         oito.x = oito.x - 3; 
      }

       oito.velocityY = oito.velocityY + 0.8;

      if (fundo.y>400)
      {
         fundo.y=300;
      }

      if (oito.isTouching(obstGroup))
      {
         gameState="end";
      }
    }

  if (gameState==="end")
  {
     gameover.visible=true;
     recomeçar.visible=true;
     fundo.velocityY = 0;
     oito.velocityY = 0;
     obstGroup.setVelocityXEach(0);
     obstGroup.setLifetimeEach(-1);
     if (mousePressedOver(recomeçar)){
        gameState="play"
     }
  }

 spawnobst1();
 spawnobst2();
 spawnobst3();
 spawnobst4();

 drawSprites();
}

function spawnobst1()
{
  if (frameCount % 240 === 0)
   {
     var obst1 = createSprite(200,50);
     obst1.y= Math.round(random(600,400))
     obst1.addImage(obst1Img);
     obst1.velocityY = 1;
     obst1.lifetime = 800;
     obst1Group.add(obst1);
   }
}

function spawnobst2()
{
  if (frameCount % 240 === 0)
   {
     var obst2 = createSprite(200,50);
     obst2.y= Math.round(random(600,400))
     obst2.addImage(obst2Img);
     obst2.velocityY = 1;
     obst2.lifetime = 800;
     obst2Group.add(obst2);
   }
}

function spawnobst3()
{
  if (frameCount % 240 === 0)
   {
     var obst3 = createSprite(200,50);
     obst3.y= Math.round(random(600,400))
     obst3.addImage(obst3Img);
     obst3.velocityY = 1;
     obst3.lifetime = 800;
     obst3Group.add(obst3);
   }
}

function spawnobst4()
{
  if (frameCount % 240 === 0)
   {
     var obst4 = createSprite(200,50);
     obst4.y= Math.round(random(600,400))
     obst4.addImage(obst4Img);
     obst4.velocityY = 1;
     obst4.lifetime = 800;
     obst4Group.add(obst4);
   }
}