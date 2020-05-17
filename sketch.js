var x,y;
var drawing=[];
var button ;
function setup (){
    createCanvas(displayWidth,displayHeight);
clear=createButton("clearCanvas");
button = createButton("save");
}
function draw(){
    background("white");
    for(var i= 0;i<drawing.length;i++){

database.ref("/").set({ "d":(drawing[i]) });
        console.log(drawing[i]);
        stroke('purple'); 
strokeWeight(10); 
point(drawing[i].x,drawing[i].y);
    }

    button.mousePressed(() => {
         
    });



    drawSprites();
}


function mouseDragged(){
    var point ={
        x:mouseX,
        y:mouseY
    }
    drawing.push(point);
}