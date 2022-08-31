let meno = document.getElementById("meno")
const odoslat = document.getElementById("odoslat")
const next = document.getElementById("next")

next.addEventListener("click", function(){
    window.location.href = "local2.html"
})

let storage = []

odoslat.addEventListener("click", function(){
    storage.push(meno.value)
    prestorage = JSON.stringify(storage)
    localStorage.setItem("mena", prestorage)
    meno.value = ""
})


