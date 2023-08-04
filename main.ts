radio.onReceivedString(function (receivedString) {
    if (receivedString == "Danger") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        makerbit.playMp3TrackFromFolder(1, 1, Mp3Repeat.No)
        basic.showIcon(IconNames.No)
        basic.pause(3100)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        makerbit.runMp3Command(Mp3Command.STOP)
        basic.showIcon(IconNames.SmallSquare)
    }
})
let strip: neopixel.Strip = null
radio.setGroup(138)
makerbit.connectSerialMp3(DigitalPin.P2, DigitalPin.P1)
makerbit.setMp3Volume(50)
strip = neopixel.create(DigitalPin.P16, 12, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
