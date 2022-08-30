let meno = document.getElementById("meno")
const odoslat = document.getElementById("odoslat")

let storage = []

odoslat.addEventListener("click", function(){
    storage.push(meno.value)
    prestorage = JSON.stringify(storage)
    localStorage.setItem("mena", prestorage)
    meno.value = ""

    let fromprestorage = JSON.parse(localStorage.getItem("mena"))
    
    let paragraph = document.createElement("p")
    paragraph.textContent = storage[fromprestorage.length - 1]
    document.body.appendChild(paragraph)

})

