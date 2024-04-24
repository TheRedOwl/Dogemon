import { fetchData } from "/fetchData.js";

document.querySelector(".searchButton").addEventListener("click", listData);
document.querySelector(".pages").addEventListener("click", handlePagination);

<<<<<<< HEAD
let page = 1;
let pageSize = 5;
let totalPage = 1;
let cars;
let dogNumber = 1;
let carsToShow;
let previousSearch = "";
let Breed;
let currentPage = 1;

function listData() {
    if (document.querySelector(".searchBar").value != "") {
        Breed = document.querySelector("input").value;
=======
let page = 1
let pageSize = 5
let totalPage = 1
let cars
let dogNumber = 1
let carsToShow
let previousSearch = ""
let Breed
let currentPage = 1
let clickedButton =""

function listData() {
    if (document.querySelector(".searchBar").value != "") {
        Breed = document.querySelector(".searchBar").value
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
    }
    previousSearch = Breed;
    const url = `https://api.api-ninjas.com/v1/dogs?name=${Breed}`;
    fetchData(url, renderData);
}

function renderData(data) {
    console.log(data);
    cars = data;
    showCars();
}

export function showCars() {
<<<<<<< HEAD
    document.querySelector(".cars-list").innerHTML = "";
    document.querySelector(".searchBar").placeholder = "írd ide a kutyafajtát";
    let startIndex = (page - 1) * pageSize;
    let endIndex = startIndex + pageSize;
    localStorage.setItem("prevSearch", previousSearch);
    currentPage = page;
    localStorage.setItem("currentPage", currentPage);
    carsToShow = cars.slice(startIndex, endIndex);
    carsToShow.forEach((obj) => {
=======
    document.querySelector(".cars-list").innerHTML = ""
    document.querySelector(".searchBar").placeholder = "írd ide a kutyafajtát"
    let startIndex = (page - 1) * pageSize
    let endIndex = startIndex + pageSize
    localStorage.setItem("prevSearch", previousSearch)
    currentPage = page
    localStorage.setItem("currentPage", currentPage)
    carsToShow = cars.slice(startIndex, endIndex)
    carsToShow.forEach(obj => {
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
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
        </div>`;
        for (let i = 1; i < obj.energy; i++) {
            document.querySelector(
                `.Energy${dogNumber}`
            ).innerHTML += `<div class="statLevels${i}"></div>`;
        }
        for (let i = 1; i < obj.protectiveness; i++) {
            document.querySelector(
                `.Defense${dogNumber}`
            ).innerHTML += `<div class="statLevels${i}"></div>`;
        }
        for (let i = 1; i < obj.trainability; i++) {
            document.querySelector(
                `.Intelligence${dogNumber}`
            ).innerHTML += `<div class="statLevels${i}"></div>`;
        }
        dogNumber++;
<<<<<<< HEAD
    });
    if (carsToShow.length == 0) {
        document.querySelector(".searchBar").value = "";
        document.querySelector(".searchBar").placeholder = "Nincs találat";
    } else {
        document.querySelector(".pagination").classList.add("flex");
        document.querySelector(".pagination").classList.remove("hidden");
=======
    })
    if (carsToShow.length == 0) {
        document.querySelector(".searchBar").value = ""
        document.querySelector(".searchBar").placeholder = "Nincs találat"
    } else {
        document.querySelector(".pagination").classList.add("flex")
        document.querySelector(".pagination").classList.remove("hidden")
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
    }
    renderPagination(cars.length);
}

function renderPagination(totalItems) {
    totalPage = Math.ceil(totalItems / pageSize);
    document.querySelector(".pages").innerHTML = "";
    for (let i = 1; i <= totalPage; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        button.classList.add("page-btn");
        if (i == page) {
            button.classList.add("bg-indigo-600");
        }
        document.querySelector(".pages").appendChild(button);
    }
}

function handlePagination(e) {
    if (e.target.classList.contains("page-btn")) {
        page = +e.target.textContent;
    }
    showCars();
}

document.addEventListener("keydown", keydownEvent);

function keydownEvent(key) {
    if (key.keyCode == 13) {
        if (document.querySelector(".loginBtn").classList.contains("hidden")) {
            if (document.querySelector(".searchBar").value == "") {
                document.querySelector(".searchBar").placeholder =
                    "Nem ütöttél be semmit";
            } else {
                page = 1;
                listData();
                document.querySelector(".searchBar").blur();
            }
<<<<<<< HEAD
        } else {
            authLogin();
        }
=======
            else {
                page = 1
                listData()
                document.querySelector(".searchBar").blur()
            }
        } else if(document.querySelector(".loginBtn").classList.contains("hidden")==false){
            if(clickedButton=="Register"){
                authRegist()
            }else if(clickedButton=="Login"){
                authLogin()
            }else{
                return
            }
        }else{
            return
        }

>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
    }

    if (key.keyCode == 39) {
        if (page >= totalPage) {
            page = totalPage;
            showCars();
        } else {
            page++;
            showCars();
        }
    }
    if (key.keyCode == 37) {
        if (page <= 1) {
            page = 1;
            showCars();
        } else {
            page--;
            showCars();
        }
    }
}

document.querySelector(".firstPage").addEventListener("click", firstPage);
document.querySelector(".previousPage").addEventListener("click", previousPage);
document.querySelector(".nextPage").addEventListener("click", nextPage);
document.querySelector(".lastPage").addEventListener("click", lastPage);

function firstPage() {
    page = 1;
    showCars();
}

function previousPage() {
    if (page <= 1) {
        page = 1;
        showCars();
    } else {
        page--;
        showCars();
    }
}

function nextPage() {
    if (page >= totalPage) {
        page = totalPage;
        showCars();
    } else {
        page++;
        showCars();
    }
}

function lastPage() {
    page = totalPage;
    showCars();
}

//login

import { verifyAttr } from "./verifyAttr.js";

document.querySelector(".loginBtn").addEventListener("click", Loginclick);
document.querySelector(".registerBtn").addEventListener("click", Loginclick);

<<<<<<< HEAD
function Loginclick(e) {
    if (e.target.textContent == "Register") {
        authRegist();
    } else {
        authLogin();
=======
import { verifyAttr } from "./verifyAttr.js"



document.querySelector(".loginBtn").addEventListener("click", Loginclick)
document.querySelector(".registerBtn").addEventListener("click", Loginclick)

function Loginclick(e) {
    if (e.target.textContent == "Register") {
        clickedButton = "Register"
        authRegist()
    } else {
        clickedButton = "Login"
        authLogin()
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
    }
}

function authRegist() {
    if (document.querySelector(".myInput").classList.contains("hidden")) {
<<<<<<< HEAD
        document.querySelectorAll(".myInput").forEach((obj) => {
            obj.classList.remove("hidden");
        });
        return;
    }
    let username = document.getElementById("username").value;
    let pw = document.getElementById("pw").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    //register esetén
        if (username.length == 0 || pw.length == 0) return;
        //nem lehet 2 egyforma fh név
        if (verifyAttr(users, "username", username)) {
            document.querySelector("#message-container").innerHTML =
                "Foglalt felhasználónév";
            setTimeout(msgDelete, 3000);
            return;
        }
        users.push({ username, pw });
        localStorage.setItem("users", JSON.stringify(users));
        document.querySelector("#message-container").innerHTML =
            "Sikeres regisztráció, jelentkezz be!";
        setTimeout(msgDelete, 3000);
        document.querySelectorAll(".myInput").forEach((obj) => {
            obj.classList.add("hidden");
            obj.value = "";
        });
=======
        document.querySelectorAll(".myInput").forEach(obj => {
            obj.classList.remove("hidden")
        })
        return
    }
    let username = document.getElementById("username").value
    let pw = document.getElementById("pw").value
    let users = JSON.parse(localStorage.getItem("users")) || []
    //register esetén
    if (username.length == 0 || pw.length == 0) return
    //nem lehet 2 egyforma fh név
    if (verifyAttr(users, "username", username)) {
        document.querySelector("#message-container").innerHTML = "Foglalt felhasználónév";
        setTimeout(msgDelete, 3000)
        return
    }
    users.push({ username, pw })
    localStorage.setItem("users", JSON.stringify(users))
    document.querySelector("#message-container").innerHTML = "Sikeres regisztráció, jelentkezz be!"
    setTimeout(msgDelete, 3000)
    document.querySelectorAll(".myInput").forEach(obj => {
        obj.classList.add("hidden")
        obj.value = ""
    })
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
}

function authLogin() {
    if (document.querySelector(".myInput").classList.contains("hidden")) {
<<<<<<< HEAD
        document.querySelectorAll(".myInput").forEach((obj) => {
            obj.classList.remove("hidden");
        });
        return;
    }
    let username = document.getElementById("username").value;
    let pw = document.getElementById("pw").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    //login esetén
    let invalidUser = users.find(
        (obj) => obj.username == username && obj.pw == pw
    );
    if (invalidUser) {
        document.querySelector("#message-container").innerHTML =
            "Sikeres bejelentkezés!";
        setTimeout(msgDelete, 3000);
        document.querySelectorAll(".myInput").forEach((obj) => {
            obj.value = "";
        });
        document.querySelector(".logoutBtn").title = username;
        document.querySelector(".searchBar").classList.remove("hidden");
        document.querySelector(".searchButton").classList.remove("hidden");
        localStorage.setItem("authUser", username);
        verifyAuth();
        hideInputs();
    } else {
        document.querySelector("#message-container").innerHTML =
            "Hibás jelszó vagy felhasználónév!";
        setTimeout(msgDelete, 3000);
=======
        document.querySelectorAll(".myInput").forEach(obj => {
            obj.classList.remove("hidden")
        })
        return
    }
    let username = document.getElementById("username").value
    let pw = document.getElementById("pw").value
    let users = JSON.parse(localStorage.getItem("users")) || []
    //login esetén
    let invalidUser = users.find(obj => obj.username == username && obj.pw == pw)
    if (invalidUser) {
        document.querySelector("#message-container").innerHTML = "Sikeres bejelentkezés!"
        setTimeout(msgDelete, 3000)
        document.querySelectorAll(".myInput").forEach(obj => {
            obj.value = ""
        })
        document.querySelector(".logoutBtn").title = username
        Breed = ""
        document.querySelector(".searchBar").value=""
        document.querySelector(".cars-list").innerHTML = ""
        document.querySelector(".pagination").classList.add("hidden")
        document.querySelector(".searchBar").classList.remove("hidden")
        document.querySelector(".searchButton").classList.remove("hidden")
        localStorage.setItem("authUser", username)
        verifyAuth()
        hideInputs()
    } else {
        document.querySelector("#message-container").innerHTML = "Hibás jelszó vagy felhasználónév!"
        setTimeout(msgDelete, 3000)
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
    }
}

function verifyAuth() {
    if (localStorage.getItem("authUser")) {
        console.log("be van jelentkezve", localStorage.getItem("authUser"));
<<<<<<< HEAD
        document.querySelector(".loginBtn").classList.add("hidden");
        document.querySelector(".registerBtn").classList.add("hidden");
        document.querySelector(".logoutBtn").classList.remove("hidden");
        let staySearch = localStorage.getItem("prevSearch");
        let stayPage = localStorage.getItem("currentPage");
        document
            .querySelector(".logoutBtn")
            .addEventListener("click", logoutUser);
        hideInputs();
        document.querySelector(".searchBar").classList.remove("hidden");
        document.querySelector(".searchButton").classList.remove("hidden");
        Breed = staySearch;
        page = stayPage;
        listData();
=======
        document.querySelector(".loginBtn").classList.add("hidden")
        document.querySelector(".registerBtn").classList.add("hidden")
        document.querySelector(".logoutBtn").classList.remove("hidden")
        let staySearch = localStorage.getItem("prevSearch")
        let stayPage = localStorage.getItem("currentPage")
        document.querySelector(".logoutBtn").addEventListener("click", logoutUser)
        hideInputs()
        document.querySelector(".searchBar").classList.remove("hidden")
        document.querySelector(".searchButton").classList.remove("hidden")
        Breed = staySearch
        page = stayPage
        listData()
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
    } else {
        console.log("Nincs felhasználó bejelentkezve");
    }
}
verifyAuth();

function logoutUser() {
<<<<<<< HEAD
    localStorage.removeItem("authUser");
    localStorage.removeItem("prevSearch");
    localStorage.setItem("currentPage", 1);
    document.querySelector(".loginBtn").classList.remove("hidden");
    document.querySelector(".registerBtn").classList.remove("hidden");
    document.querySelector(".logoutBtn").classList.add("hidden");
    document.querySelector(".searchBar").classList.add("hidden");
    document.querySelector(".searchButton").classList.add("hidden");
    document.querySelector(".cars-list").innerHTML = "";
    document.querySelector(".pagination").classList.add("hidden");
    document.querySelector("#message-container").innerHTML =
        "Sikeresen kijelentkeztetve!";
    setTimeout(msgDelete, 3000);
    hideInputs();
}

function msgDelete() {
    document.querySelector("#message-container").innerHTML = "";
}

function hideInputs() {
    document.querySelectorAll(".myInput").forEach((obj) => {
        obj.classList.add("hidden");
    });
}
=======
    localStorage.removeItem("authUser")
    localStorage.removeItem("prevSearch")
    localStorage.setItem("currentPage", 1)
    document.querySelector(".cars-list").innerHTML = ""
    document.querySelector(".loginBtn").classList.remove("hidden")
    document.querySelector(".registerBtn").classList.remove("hidden")
    document.querySelector(".logoutBtn").classList.add("hidden")
    document.querySelector(".searchBar").classList.add("hidden")
    document.querySelector(".searchButton").classList.add("hidden")
    document.querySelector(".pagination").classList.add("hidden")
    document.querySelector("#message-container").innerHTML = "Sikeresen kijelentkeztetve!"
    setTimeout(msgDelete, 3000)
    hideInputs()
}

function msgDelete() {
    document.querySelector("#message-container").innerHTML = ""
}

function hideInputs() {
    document.querySelectorAll(".myInput").forEach(obj => {
        obj.classList.add("hidden")
    })
}
>>>>>>> a824fc27b45f0e697d2dee7fc67ded7148029d72
