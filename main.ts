let militaryTime = 0
let Meridiem = ""
let standardTime = 0
forever(function () {
    militaryTime = game.askForNumber("What is the Military Time", 2)
    if (militaryTime >= 0 && militaryTime <= 23) {
        if (militaryTime >= 12) {
            Meridiem = "PM"
            if (militaryTime - 12 == 0) {
                standardTime = 12
            } else {
                standardTime = militaryTime - 12
            }
        } else {
            Meridiem = "AM"
            if (militaryTime % 12 == 0) {
                standardTime = 12
            } else {
                standardTime = militaryTime
            }
        }
        game.splash("" + standardTime + Meridiem)
    }
})
