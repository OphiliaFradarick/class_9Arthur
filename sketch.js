var tree, treeAnimation;

function preload(){
 treeAnimation = loadAnimation("tree.gif");
}

function setup(){
 createCanvas(600,600);

 //create the sprite for a tree
 tree = createSprite(300,300);
 tree.addAnimation("tree",treeAnimation);
 tree.scale = 0.3;
}

function draw(){
 background("black");

 drawSprites();

}