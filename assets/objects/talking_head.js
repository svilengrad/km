let talking_head = new blockLike.Sprite({
    width: 123,
    height: 152,
    image: "assets/textures/talking_head.png"
});

talking_head.addTo(stage);

talking_head.whenFlag(function() {
    this.changeX(-900);
    this.changeY(300);
    this.sayWait("Hello!, Welcome to Tree-Run", 1);
    this.sayWait("Press W to walk foward", 2);
    this.sayWait("Press S to walk backward", 2);
    this.sayWait("Press Space to jump", 2)
});