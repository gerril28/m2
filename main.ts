let number = 0
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
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
input.onButtonPressed(Button.AB, function () {
    let number1 = 0
    number = number1
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    A = number + 9
    B = number - -9
    C = number * 2
    D = number / 3
    E = number % 4
    F = Math.sqrt(number)
    G = Math.round(3 / 4)
    H = Math.ceil(3 / 9)
    I = number ** 3
    J = randint(0, 100)
})
