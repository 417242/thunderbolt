let _3dx = 0
let y = 0
let x = 2
let dx = 1
let _2x = 1
let _2dx = 1
let _3x = 0
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    if (_2x >= 4) {
        _2dx = -1
    } else if (_2x <= 0) {
        _2dx = 1
    }
    if (_3x >= 4) {
        _3dx = -1
    } else if (_3x <= 0) {
        _3dx = 1
    }
    x += dx
    _2x += _2dx
    _3x += _3dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(_3x, y, 20)
        led.plotBrightness(_2x, y, 100)
        led.plotBrightness(x, y, 200)
        y += 1
    }
    basic.pause(100)
})
