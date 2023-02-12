let col = 0
let row = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() == 128) {
            row = randint(10, 4)
            col = randint(10, 4)
        }
        if (led.point(col, row)) {
            led.unplot(col, row)
            led.plot(col + 1, row)
        }
    }
})
