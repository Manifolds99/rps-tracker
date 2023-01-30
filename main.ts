input.onGesture(Gesture.Shake, function () {
    OLED.init(128, 64)
    Ties = 0
    Rounds = 0
    PB = 0
    PA = 0
    OLED.writeStringNewLine("Want to play a game?")
    basic.pause(2000)
})
function Update_Score () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
}
let PA = 0
let PB = 0
let Rounds = 0
let Ties = 0
OLED.init(128, 64)
Ties = 0
Rounds = 0
PB = 0
PA = 0
OLED.writeStringNewLine("Want to play a game?")
basic.pause(2000)
