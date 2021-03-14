let trees2 = []

let tree_2 = new blockLike.Sprite({
    width: 238,
    height: 540,
    image: "assets/textures/tree.png"
});

tree_2.addTo(stage)

tree_2.whenFlag(function() {
    this.wait(0.5)
    this.setX(650)
    this.setY(300)
    this.setSize(65)

    let t2clone1 = this.clone()
    t2clone1.setX(750)
    t2clone1.setY(260)
    t2clone1.setSize(105)
    t2clone1.addTo(stage)

    let t2clone2 = this.clone()
    t2clone2.setX(850)
    t2clone2.setY(220)
    t2clone2.setSize(145)
    t2clone2.addTo(stage)

    let t2clone3 = this.clone()
    t2clone3.setX(950)
    t2clone3.setY(180)
    t2clone3.setSize(185)
    t2clone3.addTo(stage)

    trees2.push(this)
    trees2.push(t2clone1)
    trees2.push(t2clone2)
    trees2.push(t2clone3)
});

tree_2.whenKeyPressed("w", function() {
    trees2.forEach(t2 => {
        t2.changeX(5)
        t2.changeY(-2)
        t2.changeSize(2)
    })
})

tree_2.whenKeyPressed("s", function() {
    trees2.forEach(t2 => {
        t2.changeX(-5)
        t2.changeY(2)
        t2.changeSize(-2)
    })
})

tree_2.whenKeyPressed(" ", function() {
    trees2.forEach(t2 => {
        t2.changeY(-40)
        t2.wait(0.5)
        t2.changeY(40)
        t2.wait(1)
    })
})