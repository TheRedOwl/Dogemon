import { fetchData } from "/fetchData.js";

document.querySelector(".searchButton").addEventListener("click", listData)
document.querySelector(".pages").addEventListener("click", handlePagination)

let page = 1
let pageSize = 5
let totalPage = 1
let cars
let dogNumber = 1
let carsToShow

function listData() {
    let Breed = document.querySelector("input").value
    const url = `https://api.api-ninjas.com/v1/dogs?name=${Breed}`
    fetchData(url, renderData)
}

function renderData(data) {
    console.log(data);
    cars = data
    showCars()
}

function showCars() {
    document.querySelector(".cars-list").innerHTML = ""
    document.querySelector(".searchBar").placeholder = "írd ide a kutyafajtát"
    let startIndex = (page - 1) * pageSize
    let endIndex = startIndex + pageSize
    carsToShow = cars.slice(startIndex, endIndex)
    carsToShow.forEach(obj => {
        document.querySelector(".cars-list").innerHTML += `
        <div class="dogCard">
            <div class="dogImg">
                <img src="${obj.image_link}" class="" alt="">
            </div>
            <div class="dogName">${obj.name}</div>
            <div class="stats">
                <div>
                    <div class="statName">Energy</div>
                    <div class="statBar Energy${dogNumber}">
                        
                    </div>
                </div>
                <div>
                    <div class="statName">Defense</div>
                    <div class="statBar Defense${dogNumber}">
                        
                    </div>
                </div>
                <div>
                    <div class="statName">Intelligence</div>
                    <div class="statBar Intelligence${dogNumber}">
                        
                    </div>
                </div>
            </div>
        </div>`
        for (let i = 1; i < obj.energy; i++) {
            document.querySelector(`.Energy${dogNumber}`).innerHTML += `<div class="statLevels${i}"></div>`
        }
        for (let i = 1; i < obj.protectiveness; i++) {
            document.querySelector(`.Defense${dogNumber}`).innerHTML += `<div class="statLevels${i}"></div>`
        }
        for (let i = 1; i < obj.trainability; i++) {
            document.querySelector(`.Intelligence${dogNumber}`).innerHTML += `<div class="statLevels${i}"></div>`
        }
        dogNumber++;
    })
    if(carsToShow.length==0){
        document.querySelector(".searchBar").value = ""
        document.querySelector(".searchBar").placeholder = "Nincs találat"
    }
    document.querySelector(".pagination").classList.remove("hidden")
    renderPagination(cars.length)
}

function renderPagination(totalItems) {
    totalPage = Math.ceil(totalItems / pageSize)
    document.querySelector(".pages").innerHTML = ""
    for (let i = 1; i <= totalPage; i++) {
        let button = document.createElement("button")
        button.textContent = i
        button.classList.add("page-btn")
        if (i == page) {
            button.classList.add("bg-indigo-600")
        }
        document.querySelector(".pages").appendChild(button)
    }
}

function handlePagination(e) {
    if (e.target.classList.contains("page-btn")) {
        page = +e.target.textContent
    }
    showCars()
}

document.addEventListener("keydown", keydownEvent)

function keydownEvent(key) {
    if (key.keyCode == 13) {
        if (document.querySelector(".searchBar").value == "") {
            document.querySelector(".searchBar").placeholder = "Nem ütöttél be semmit"
        }
        else {
            listData()
            document.querySelector(".searchBar").blur()

        }
    }

    if (key.keyCode == 39) {
        if (page >= totalPage) {
            page = totalPage
            showCars()
        }
        else {
            page++
            showCars()
        }
    }
    if (key.keyCode == 37) {
        if (page <= 1) {
            page = 1
            showCars()
        }
        else {
            page--
            showCars()
        }
    }
}

document.querySelector(".firstPage").addEventListener("click", firstPage)
document.querySelector(".previousPage").addEventListener("click", previousPage)
document.querySelector(".nextPage").addEventListener("click", nextPage)
document.querySelector(".lastPage").addEventListener("click", lastPage)

function firstPage() {
    page = 1
    showCars()
}

function previousPage() {
    if (page <= 1) {
        page = 1
        showCars()
    }
    else {
        page--
        showCars()
    }
}

function nextPage() {
    if (page >= totalPage) {
        page = totalPage
        showCars()
    }
    else {
        page++
        showCars()
    }
}

function lastPage() {
    page = totalPage
    showCars()
}