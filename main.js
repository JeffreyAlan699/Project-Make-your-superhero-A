var canvas = new fabric.Canvas("myCanvas")
var block_image_width = 30;
var block_image_height = 30;
var player_y = 10;
var player_x = 10;
var player_object = "";
var block_image_object ="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ 
        top:player_y, // Y
        left:player_x // X
         });
        canvas.add(player_object);
    });
}
function new_image(get_image){
        fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y, // Y
        left:player_x // X
         });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keypressed = e.keyCode;
    if(keypressed == "89"){
        new_image("player.png");
        console.log("y");
    }
    if(keypressed == "70"){
        new_image("ironman_face.png");
        console.log("f");
    }
    if(keypressed == "66"){
        new_image("spiderman_body.png");
        console.log("b");
    }
    if(keypressed == "76"){
        new_image("hulk_legs.png");
        console.log("l");
    }
    if(keypressed == "82"){
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if(keypressed == "72"){
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
    if(keypressed == "38"){
        up();
        console.log("up arrow key");
    }
    if(keypressed == "40"){
        down();
        console.log("down arrow key");
    }
    if(keypressed == "37"){
        left();
        console.log("left arrow key");
    }
    if(keypressed == "39"){
        right();
        console.log("right arrow key");
    }
    if(e.shiftKey == true && keypressed == "80"){
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("span_height").innerHTML = block_image_height;
        document.getElementById("span_width").innerHTML = block_image_width;
    }
    if(e.shiftKey == true && keypressed == "77"){
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("span_height").innerHTML = block_image_height;
        document.getElementById("span_width").innerHTML = block_image_width;
    }
}