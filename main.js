
var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
        }
        );
	
	
}

function playSound(){
	x.play();
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        console.log("up");
        up();
    }
    if(keypressed=='40'){
        console.log("down");
        down();
    }
    if(keypressed=='37'){
        console.log("left");
        left();
    }
    if(keypressed=='39'){
        console.log("right");
        right();
    }
}
function up(){
    document.getElementById("d1").innerHTML="Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!";
		console.log("up arrow key");
}
function down(){
    document.getElementById("d1").innerHTML="Happy birthday! I hope all your birthday wishes and dreams come true."
    console.log("down arrow key");
}
function left(){
    document.getElementById("d1").innerHTML="A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!"
    console.log("left arrow key") ;   
}
function right(){
    document.getElementById("d1").innerHTML="May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!"
    console.log("right arrow key");
}