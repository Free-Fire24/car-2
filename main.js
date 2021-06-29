var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d") ;
var background_img = "race back img.jpg" 
var car_img = "images1.jpg"; 
var car_height = 100 ; 
var car_width = 100 ;
var car_x = 20 ;
var car_y = 20 ;

var car1_x = 150 ;
var car1_y = 20 ;
var car1_img = "images.jpg"; 
var car1_height = 100 ; 
var car1_width = 100 ;

 
function add()   {
background_imgTag = new Image() ;
background_imgTag.onload = uploadBackground ;
background_imgTag.src = background_img; 

car_imgTag = new Image() ; 
car_imgTag.onload = uploadcar;
car_imgTag.src = car_img;

car1_imgTag = new Image() ; 
car1_imgTag.onload = uploadcar1;
car1_imgTag.src = car1_img;
}


                                                               
function uploadBackground()  {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar()  {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    

}

function uploadcar1() {

  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);  

}
                                                                                              
window.addEventListener("keydown", mykeydown) ;

function mykeydown(e)  {
 keyPressed = e.keyCode;
 console.log(keyPressed) ; 
   if(keyPressed == '38'){
     up() ;
     console.log("up");  
   }

   if(keyPressed == '40'){
    down() ;
    console.log("down");  
  }

  if(keyPressed == '37'){
    left() ;
    console.log("left");  
  }

  if(keyPressed == '39'){
    right() ;
    console.log("right");  
  }
}


function up() 
{
  if(car_y >= 0) 
  {
    car_y -= 10;
    console.log("when up arrow is pressed = " + car_x + " - " + car_y) ;
    uploadBackground();
    uploadcar();    
  }

}

function down() 
{
  if(car_y <= 500) 
  {
    car_y += 10;
    console.log("when down arrow is pressed, x = " + car_x + " | y = " + car_y) ;
    uploadBackground();
    uploadcar();    
  }

}

function left() 
{
  if(car_x >= 0) 
  {
    car_x -= 10;
    console.log("when left arrow is pressed, x = " + car_x + " | y = " + car_y) ;
    uploadBackground();
    uploadcar();    
  }

}

function right() 
{
  if(car_x <= 700) 
  {
    car_x += 10;
    console.log("when right arrow is pressed, x = " + car_x + " | y = " + car_y) ;
    uploadBackground();
    uploadcar();    
  }

}

window.addEventListener("keydown", mykeydown1) ;

function mykeydown1(o)  {
  keyPressed = o.keyCode;
  console.log(keyPressed) ; 
    if(keyPressed == '87'){
      w() ;
      console.log("up");  
    }
 
    if(keyPressed == '83'){
     s() ;
     console.log("down");  
   }
 
   if(keyPressed == '65'){
     a() ;
     console.log("left");  
   }
 
   if(keyPressed == '68'){
     d() ;
     console.log("right");  
   }
 }
 
 
 function w() 
 {
   if(car1_y >= 0) 
   {
     car1_y -= 10;
     console.log("when up arrow is pressed = " + car1_x + " - " + car1_y) ;
     uploadBackground();
     uploadcar1();    
   }
 
 }
 
 function s() 
 {
   if(car1_y <= 500) 
   {
     car1_y += 10;
     console.log("when down arrow is pressed, x = " + car1_x + " | y = " + car1_y) ;
     uploadBackground();
     uploadcar1();    
   }
 
 }
 
 function a() 
 {
   if(car1_x >= 0) 
   {
     car1_x -= 10;
     console.log("when left arrow is pressed, x = " + car1_x + " | y = " + car1_y) ;
     uploadBackground();
     uploadcar1();    
   }
 
 }
 
 function d() 
 {
   if(car1_x <= 700) 
   {
     car1_x += 10;
     console.log("when right arrow is pressed, x = " + car1_x + " | y = " + car1_y) ;
     uploadBackground();
     uploadcar1();    
   }
 
 }