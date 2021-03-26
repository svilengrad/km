let start = new blockLike.Sprite({});

start.addTo(stage);
start.say("Press the flag to start!")

start.whenFlag(function() {
    this.hide()
});