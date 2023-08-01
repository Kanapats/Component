radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        makerbit.playMp3TrackFromFolder(1, 1, Mp3Repeat.No)
        basic.showIcon(IconNames.No)
    } else {
        makerbit.runMp3Command(Mp3Command.STOP)
        basic.showIcon(IconNames.SmallSquare)
        strip.showRainbow(1, 360)
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(2000)
    }
})
let strip: neopixel.Strip = null
radio.setGroup(38)
makerbit.connectSerialMp3(DigitalPin.P2, DigitalPin.P1)
makerbit.setMp3Volume(50)
strip = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
