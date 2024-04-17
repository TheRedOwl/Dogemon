import { verifyAttr } from "./verifyAttr.js"

document.querySelector(".loginBtn").addEventListener("click",auth)
document.querySelector(".registerBtn").addEventListener("click",auth)

function auth(e){
    if(document.querySelector(".myInput").classList.contains("hidden")){
        document.querySelectorAll(".myInput").forEach(obj=>{
            obj.classList.remove("hidden")
        })
        return
    }
    console.log(e.target.textContent);
    let username=document.getElementById("username").value
    let pw=document.getElementById("pw").value
    let users= JSON.parse(localStorage.getItem("users")) || []
    //register esetén
    if(e.target.textContent=="Register"){
        if(username.length==0 ||pw.length==0) return
        //nem lehet 2 egyforma fh név
        if(verifyAttr(users,"username",username)){
            document.querySelector("#message-container").innerHTML="Foglalt felhasználónév";
            setTimeout(msgDelete, 3000)
            return
        }
        users.push({username,pw})
        localStorage.setItem("users",JSON.stringify(users))
        document.querySelector("#message-container").innerHTML="Sikeres regisztráció, jelentkezz be!"
        setTimeout(msgDelete, 3000)
        document.querySelectorAll(".myInput").forEach(obj=>{
            obj.classList.add("hidden")
            obj.value=""
        })
    }
    else{//login esetén
        let invalidUser=users.find(obj=>obj.username==username && obj.pw==pw)
        if(invalidUser){
            document.querySelector("#message-container").innerHTML="Sikeres bejelentkezés!"
            setTimeout(msgDelete, 3000)
            document.querySelectorAll(".myInput").forEach(obj=>{
                obj.value=""
            })
            document.querySelector(".logoutBtn").title=username
            document.querySelector(".searchBar").classList.remove("hidden")
            document.querySelector(".searchButton").classList.remove("hidden")
            localStorage.setItem("authUser",username)
            verifyAuth()
            hideInputs()
        }else{
            document.querySelector("#message-container").innerHTML="Hibás jelszó vagy felhasználónév!"
            setTimeout(msgDelete, 3000)
        }
        
    }
}

function verifyAuth(){
    if(localStorage.getItem("authUser")){
        console.log("be van jelentkezve", localStorage.getItem("authUser"));
        document.querySelector(".loginBtn").classList.add("hidden")
        document.querySelector(".registerBtn").classList.add("hidden")
        document.querySelector(".logoutBtn").classList.remove("hidden")
        document.querySelector(".logoutBtn").addEventListener("click",logoutUser)
    } else{
        console.log("Nincs felhasználó bejelentkezve");
    }
}
verifyAuth()

function logoutUser(){
    localStorage.removeItem("authUser")
    document.querySelector(".loginBtn").classList.remove("hidden")
    document.querySelector(".registerBtn").classList.remove("hidden")
    document.querySelector(".logoutBtn").classList.add("hidden")
    document.querySelector(".searchBar").classList.add("hidden")
    document.querySelector(".searchButton").classList.add("hidden")
    document.querySelector(".cars-list").innerHTML=""
    document.querySelector(".pagination").classList.add("hidden")
    document.querySelector("#message-container").innerHTML="Sikeresen kijelentkeztetve!"
    setTimeout(msgDelete, 3000)
    hideInputs()
}

function msgDelete(){
    document.querySelector("#message-container").innerHTML=""
}

function hideInputs(){
    document.querySelectorAll(".myInput").forEach(obj=>{
        obj.classList.add("hidden")
    })
}