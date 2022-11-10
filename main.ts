let x = 0
let y = 0
basic.forever(function () {
    x = 0
    y = 0
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    basic.pause(100)
    led.plot(x + 1, 0)
    led.plot(x + 1, 1)
    led.plot(x + 1, 2)
    led.plot(x + 1, 3)
    led.plot(x + 1, 4)
})
