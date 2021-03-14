let trees1 = []

let tree_1 = new blockLike.Sprite({
    width: 238,
    height: 540,
    image: "assets/textures/tree.png"
});

tree_1.addTo(stage)

tree_1.whenFlag(function() {
    this.wait(0.5)
    this.setX(-650)
    this.setY(300)
    this.setSize(65)

    let t1clone1 = this.clone()
    t1clone1.setX(-750)
    t1clone1.setY(260)
    t1clone1.setSize(105)
    t1clone1.addTo(stage)

    let t1clone2 = this.clone()
    t1clone2.setX(-850)
    t1clone2.setY(220)
    t1clone2.setSize(145)
    t1clone2.addTo(stage)

    let t1clone3 = this.clone()
    t1clone3.setX(-950)
    t1clone3.setY(180)
    t1clone3.setSize(185)
    t1clone3.addTo(stage)

    trees1.push(this)
    trees1.push(t1clone1)
    trees1.push(t1clone2)
    trees1.push(t1clone3)
});

tree_1.whenKeyPressed("w", function() {
    trees1.forEach(t1 => {
        t1.changeX(-5)
        t1.changeY(-2)
        t1.changeSize(2)
    })
})

tree_1.whenKeyPressed("s", function() {
    trees1.forEach(t1 => {
        t1.changeX(5)
        t1.changeY(2)
        t1.changeSize(-2)
    })
})

tree_1.whenKeyPressed(" ", function() {
    trees1.forEach(t1 => {
        t1.changeY(-40)
        t1.wait(0.5)
        t1.changeY(40)
        t1.wait(1)
    })
})