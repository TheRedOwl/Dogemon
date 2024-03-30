import { fetchData } from "/fetchData.js";

document.querySelector(".myBtn").addEventListener("click",listData)
document.querySelector(".pagination").addEventListener("click",handlePagination)

let page=1
let pageSize=6
let totalPage=1
let cars

function listData(){
    let marka=document.querySelector("input").value
    const url=`https://api.api-ninjas.com/v1/cars?limit=50&make=${marka}`
    fetchData(url,renderData)
}

function renderData(data){
    console.log(data);
    cars=data
    showCars()
}

function showCars(){
    document.querySelector(".cars-list").innerHTML=""
    let startIndex=(page-1)*pageSize
    let endIndex=startIndex+pageSize
    let carsToShow=cars.slice(startIndex,endIndex)
    carsToShow.forEach(obj=>{
        document.querySelector(".cars-list").innerHTML+=`<div class="myCard">${obj.model}</div>`
    })
    renderPagination(cars.length)
}

function renderPagination(totalItems){
    totalPage=Math.ceil(totalItems/pageSize)
    document.querySelector(".pagination").innerHTML=""
    for(let i=1;i<=totalPage;i++){
        let button=document.createElement("button")
        button.textContent=i
        button.classList.add("page-btn")
        if(i==page){
            button.classList.add("bg-indigo-600")
        }
        document.querySelector(".pagination").appendChild(button)
    }
}

function handlePagination(e){
    if(e.target.classList.contains("page-btn")){
        page=+e.target.textContent
    }
    showCars()
}