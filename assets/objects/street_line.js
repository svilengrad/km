let street_line = new blockLike.Sprite({
    image: "assets/textures/line.png",
    width: 60,
    height: 750
});

street_line.addTo(stage);
street_line.hide();

street_line.whenFlag(function() {
    this.show()
    this.wait(0.5)
    this.setY(-165)
});