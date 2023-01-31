input.onButtonPressed(Button.A, function () {
    PA += 1
    Rounds += 1
    basic.showString("A")
    Update_Score()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Update_Score()
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    Rounds += 1
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    Update_Score()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Reset()
})
function Update_Score () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
function Reset () {
    OLED.init(128, 64)
    Ties = 0
    Rounds = 0
    PB = 0
    PA = 0
    OLED.writeStringNewLine("Let's play a game!")
    basic.pause(2000)
    Update_Score()
}
let PB = 0
let Ties = 0
let Rounds = 0
let PA = 0
Reset()
