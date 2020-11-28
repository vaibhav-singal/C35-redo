var dog, happyDog, database, foodStock, dogImage;
var foodS;

function preload()
{
  dogImage = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
  
}

function setup() {
  database = firebase.database();
console.log(database);
  createCanvas(500, 500);
  
  dog = createSprite(250,200);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  
  foodStock.on("value",readStock);
  
}


function draw() { 



  
  
  background(46, 139, 87);

   

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
 


  drawSprites();



  fill("red");
  textSize(20);
  text("Food Remaining: "+foodS,100,100);
}

function readStock(data){
  foodS = data.val();
  console.log(foodS);
}

function writeStock(x){

  if(x<=0) {
    x=0;
  } else{
    x=x-1;
  }



  database.ref('/').update({
    Food:x
  })
}

