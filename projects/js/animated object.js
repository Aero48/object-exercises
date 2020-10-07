let orb = {
    //Initial values for the circle object
    xPos: 190,
    yPos: 300,
    diameter: 50,
    velocity: 10,
    color: "#bfc4ff",

    //This function causes the velocity to become positive or negative depending on which side of the canvas it's on
    update: function(){
        if(this.xPos>400){
            this.velocity -= 1;
        }else{
            this.velocity += 1;
        }
        this.xPos += this.velocity;
    }
}

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(237, 191, 255);
    //Sets the fill to the color specified in the orb object
    fill(orb.color);

    //Border line representing the middle of the canvas
    line(400,0,400,600);

    //Calls the update function inside the orb object
    orb.update();
    
    //Creates a circle based on the data in the orb object
    circle(orb.xPos, orb.yPos, orb.diameter);

}