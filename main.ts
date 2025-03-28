input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 60, NeoPixelMode.RGB)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    . # . . .
    . . # # .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . . #
    . . . # .
    . # # . .
    `)
basic.showIcon(IconNames.Heart)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P9, 180)
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(1, "cam")
        huskylens.writeOSD("cam", 150, 30)
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(2, "kagit")
        huskylens.writeOSD("kagit", 150, 30)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P9, 0)
        basic.pause(5000)
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeName(3, "pet")
        huskylens.writeOSD("atık yok", 150, 30)
    }
})
