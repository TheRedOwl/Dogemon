import { verifyAttr } from "./verifyAttr.js"

document.querySelector(".loginBtn").addEventListener("click",auth)
document.querySelector(".registerBtn").addEventListener("click",auth)

function auth(e){
    if(document.querySelector(".myInput").classList.contains("hidden")){
        document.querySelectorAll("myInput").forEach(obj=>{
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
            return
        }
        users.push({username,pw})
        localStorage.setItem("users",JSON.stringify(users))
        document.querySelector("#message-container").innerHTML="Sikeres regisztráció, jelentkezz be!"
    }
    else{//login esetén
        let invalidUser=users.find(obj=>obj.username==username && obj.pw==pw)
        if(invalidUser){
            document.querySelector("#message-container").innerHTML="Sikeres bejelentkezés!"
            document.querySelector(".logoutBtn").title=username
            localStorage.setItem("authUser",username)
            verifyAuth()
            hideInputs()
        }else{
            document.querySelector("#message-container").innerHTML="Hibás jelszó vagy felhasználónév!"
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
    hideInputs()
}

function hideInputs(){
    document.querySelectorAll(".myInput").forEach(obj=>{
        obj.classList.add("hidden")
    })
}