let homeCounter = document.getElementById("home")
let guestCounter = document.getElementById("guest")

let homeCount = 0;
let guestCount = 0;

function home1Points() {
    homeCount += 1 
    homeCounter.textContent = homeCount;
}

function home2Points() {
    homeCount += 2 
    homeCounter.textContent = homeCount;
}

function home3Points() {
    homeCount += 3 
    homeCounter.textContent = homeCount;
}


function guest1Points() {
    guestCount += 1 
    guestCounter.textContent = guestCount;
}

function guest2Points() {
    guestCount += 2 
    guestCounter.textContent = guestCount;
}

function guest3Points() {
    guestCount += 3 
    guestCounter.textContent = guestCount;
}