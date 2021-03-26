let sun = new blockLike.Sprite({
    image: "assets/textures/sun.png"
});

sun.addTo(stage);
sun.hide();

sun.whenFlag(function() {
    this.wait(0.5)
    this.changeX(500)
    this.changeY(480)
});