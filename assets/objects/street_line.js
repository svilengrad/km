let streetLine = []

let street_line = new blockLike.Sprite({
    image: "assets/textures/line.png",
    width: 30,
    height: 100
});

street_line.addTo(stage)

street_line.whenFlag(function() {
    this.wait(0.5)
    this.setY(-500)

    let sclone1 = this.clone()
    sclone1.setY(-300)
    sclone1.setSize(90)
    sclone1.addTo(stage)

    let sclone2 = this.clone()
    sclone2.setY(-100)
    sclone2.setSize(80)
    sclone2.addTo(stage)

    let sclone3 = this.clone()
    sclone3.setY(100)
    sclone3.setSize(70)
    sclone3.addTo(stage)

    streetLine.push(this)
    streetLine.push(sclone1)
    streetLine.push(sclone2)
    streetLine.push(sclone3)
})

this.whenKeyPressed("w", function() {
    streetLine.forEach(s => {
        s.changeY(-5)
        s.changeSize(5)
    })
})

this.whenKeyPressed("s", function() {
    streetLine.forEach(s => {
        s.changeY(5)
        s.changeSize(-5)
    })
})

this.whenKeyPressed(" ", function() {
    streetLine.forEach(s => {
        s.changeY(-40)
        s.wait(0.5)
        s.changeY(40)
        s.wait(1)
    })
})