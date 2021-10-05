let list = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    list = input.lightLevel()
    if (list < 25) {
        music.ringTone(262)
    } else if (list < 50) {
        music.ringTone(392)
    } else if (list < 100) {
        music.ringTone(415)
    } else if (list < 150) {
        music.ringTone(415)
    } else if (list < 180) {
        music.ringTone(988)
    } else {
        music.ringTone(494)
    }
})
