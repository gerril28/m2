let number1 = 0
let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let F = 0
let G = 0
let H = 0
let I = 0
let J = 0
input.onButtonPressed(Button.A, function () {
    number1 += 1
    basic.showNumber(number1)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(0)
    basic.showNumber(0)
    basic.showNumber(0)
    basic.showNumber(0)
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    number1 += -1
    basic.showNumber(number1)
})
input.onGesture(Gesture.Shake, function () {
    A = number1 + 9
    B = number1 - -9
    C = number1 * 2
    D = number1 / 3
    E = number1 % 4
    F = Math.sqrt(number1)
    G = Math.round(3 / 4)
    H = Math.ceil(3 / 9)
    I = number1 ** 3
    J = randint(0, 100)
})
