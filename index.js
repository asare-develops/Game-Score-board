let scorehome = 0;
let scoreguest = 0;
let homescore = document.getElementById("home-score")
let guestscore = document.getElementById("guest-score")

//HOME BUTTONS
function homeplusOne (){
    scorehome += 1
    homescore.textContent = scorehome
}

function homeplusTwo (){
    scorehome += 2
    homescore.textContent = scorehome
}

function homeplusThree (){
    scorehome += 3
    homescore.textContent = scorehome
}

//GUEST BUTTONS
function guestplusOne (){
    scoreguest += 1
    guestscore.textContent = scoreguest
}

function guestplusTwo (){
    scoreguest += 2
    guestscore.textContent = scoreguest
}

function guestplusThree (){
    scoreguest += 3
    guestscore.textContent = scoreguest
}