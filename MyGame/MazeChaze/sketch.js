
var b1,b2,b3,b4;
var b5,b6,b7,b8,b9,b10,b11;
var b12,b13,b14,b15;
var b16,b17,b18,b19,b20,b21,b22,b23,b24;

var b25,b26,b27,b28;
var b29,b30,b31,b32,b33,b34,b35;
var b36,b37,b38,b39;
var b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
var b51,b52,b53,b54,b55,b56,b57,b58,b59,b60;
var b61,b62,b63,b64,b65,b66,b67,b68,b69,b70,b71,b72,b73,b74;

var p1,p2;
var t;
var tI;

var form, player, game;
var database;
var gameState=0;
var playerCount=0;
function preload(){
   tI=loadImage("paint3D.png")
}

function setup() {
  createCanvas(600,550);

  database = firebase.database();

  game=new Game();
  game.getState();
  game.start();
 
  t=createSprite(300,275,500,500);
  t.addImage("i",tI)
  t.scale=0.45;

  //borders
  b1=createSprite(57, 270, 3,500);
  b2=createSprite(288,518,462,3);
  b3=createSprite(543,275, 3,490);
  b4=createSprite(313,32,460,3);


for(var i=329;i<500;i=i+30){
  b5=createSprite(528,i,30,3);
}


b6=createSprite(490,505,3,30);
b7=createSprite(475,491,30,3);
b8=createSprite(85,490,60,3);
b9=createSprite(85,60,60,3);
b10=createSprite(85,90,3,55);
b11=createSprite(98,115,30,3);
b12=createSprite(110,100,3,30);
b13=createSprite(125,86,30,3);
b14=createSprite(70,140,30,3);
b15=createSprite(85,155,3,30);

b16=createSprite(85,221,60,3);
b17=createSprite(84,206,3,28);
b18=createSprite(99,194,28,3);
b19=createSprite(85,248,60,3);

b20=createSprite(70,302,30,3);
b21=createSprite(84,288,3,30);
b22=createSprite(100,275,30,3);
b23=createSprite(70,329,30,3);
b24=createSprite(84,343,3,30);

b25=createSprite(98,410,80,3);
b26=createSprite(125,383,83,3);
b27=createSprite(111,397,3,30);
b28=createSprite(165,397,3,30);

b29=createSprite(70,464,30,3);
b30=createSprite(98,437,30,3);
b31=createSprite(84,450,3,30);
b32=createSprite(111,450,3,30);

b33=createSprite(138,503,3,30);
b34=createSprite(165,503,3,30);
b35=createSprite(219,503,3,30);
b36=createSprite(180,491,30,3);

b37=createSprite(515,167,60,3);
b38=createSprite(516,154,3,30);
b39=createSprite(485,180,3,30);
b40=createSprite(500,140,30,3);

b41=createSprite(516,278,3,60);
b42=createSprite(530,248,30,3);
b43=createSprite(530,221,30,3);
b44=createSprite(530,194,30,3);
b45=createSprite(516,278,3,60);
b46=createSprite(530,248,30,3);
b47=createSprite(530,221,30,3);
b48=createSprite(530,194,30,3);
b49=createSprite(516,278,3,60);
b50=createSprite(530,248,30,3);

b51=createSprite(516,46,3,30);
b52=createSprite(516,100,3,30);
b53=createSprite(502,59,30,3);
b54=createSprite(448,86,30,3);
b55=createSprite(489,86,3,60);
b56=createSprite(462,114,3,60);
b57=createSprite(490,113,60,3)

b58=createSprite(448,59,30,3);
b59=createSprite(462,46,3,30);
b60=createSprite(327,60,3,60);

b61=createSprite(140,464,60,3);
b62=createSprite(138,450,3,30);
b63=createSprite(165,437,60,3);
b64=createSprite(192,425,3,85);
b65=createSprite(243,410,100,3);
b66=createSprite(219,440,3,60);
b67=createSprite(233,437,30,3);
b68=createSprite(246,465,3,60);
b69=createSprite(273,450,3,80);
b70=createSprite(300,437,60,3);
b71=createSprite(328,491,60,3);
b72=createSprite(357,478,3,30);
b73=createSprite(327,440,3,60);
b74=createSprite(300,467,3,60);






  p1 = createSprite(520,530,20,20);
  p2 = createSprite(365,100,20,20);
  
}

function draw() {
  background("red");  
  p2.collide(p1);
  if(keyDown(UP_ARROW)){
   p1.y=p1.y-2;

  }
  if(keyDown(DOWN_ARROW)){
    p1.y=p1.y+2;
 
   }
   if(keyDown(LEFT_ARROW)){
    p1.x=p1.x-2;
 
   }
   if(keyDown(RIGHT_ARROW)){
    p1.x=p1.x+2;
 
   }
 // drawSprites();
}