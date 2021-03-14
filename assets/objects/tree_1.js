let tree_1 = new blockLike.Sprite({
    width: 238,
    height: 540,
    image: "assets/textures/tree.png"
});

tree_1.addTo(stage)

tree_1.whenFlag(function() {
    this.setSize(65);
    this.setX(-700);
    this.setY(250)
});

tree_1.whenKeyPressed("w", function() {
    this.changeX(-5);
    this.changeY(-2)
    this.changeSize(2)
})

tree_1.whenKeyPressed("s", function() {
    this.changeX(5);
    this.changeY(2)
    this.changeSize(-2)
})

tree_1.whenKeyPressed(" ", function() {
    this.changeY(-40)
    this.wait(0.5)
    this.changeY(40)
    this.wait(0.5)
})