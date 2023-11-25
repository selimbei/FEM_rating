let ratingState = document.querySelector(".rating")
let thankState = document.querySelector(".thank")
let givenRate = 0
let placeGivenRate = document.querySelector("#givenRate")
let maxRate = document.querySelector("#maxRate")

function submit() {
    for (i = 0; i < rates.length; i++) {
        if (rates[i].className.indexOf("selected") > -1) {
            givenRate = Number(rates[i].innerHTML)
        }
    }

    if (givenRate == 0) {
        window.alert("Please choose a rating first")
    } else {
        ratingState.classList.add("hide")
        thankState.classList.remove("hide")
        placeGivenRate.innerHTML = givenRate
        maxRate.innerHTML = rates.length
    }    
}


let rates = document.querySelectorAll(".rate")

rates.forEach(
    function(currentValue) {
        currentValue.addEventListener("click",
        (event) => {
            rates.forEach(
                function(currentValue) {
                    currentValue.classList.remove("selectedRate")
                }
            )
            currentValue.classList.add("selectedRate")
        })
    }
)