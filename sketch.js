var ball;
var database;
var position_data;

function setup(){
    createCanvas(500,500);
    database = firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

var pos_location = database.ref('ball/position')//for accessing database,need to store it//ref=refer to the location to the database value
pos_location.on('value',readPos) //o.=creates a listener.. or to read the position from database //readPos=eveytime a change in the database values of the position happen, reposition in is called.
}

function draw(){
    background("white");
    if(position_data != undefined){//position_data != undefined... it takes tiem to collect the databse

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
       writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

}

function writePosition(x,y){
    database.ref('ball/position').set({  //set the values to whatever changes we have made
                                        //or position_location.set({..})-both are same
        x : x + ball.x,
        y : y + ball.y
    })

    
}
function readPos(data)//read the position
{
position_data = data.val()//val= value of the data
console.log(position_data)

ball.x = position_data.x;
ball.y = position_data.y;//assigning to the ball's x and y position

}
