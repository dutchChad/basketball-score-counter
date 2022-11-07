
// homescore section
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
homeScoreEl.innerText = homeScore

function onePointHome(){
    homeScore += 1
    homeScoreEl.innerText = homeScore
}
function twoPointHome(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
}
function threePointHome(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

// Guest score section

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
guestScoreEl.innerText = guestScore

function onePointGuest(){
    // guestScore = guestScore + 1
    guestScoreEl.innerText = guestScore
}
function twoPointGuest(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
}
function threePointGuest(){
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

// reset btn section

function reset(){
    guestScore = 0
    homeScore = 0
    guestScoreEl.innerText = guestScore
    homeScoreEl.innerText = homeScore
}



