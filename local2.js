let fromprestorage1 = JSON.parse(localStorage.getItem("mena"))

fromprestorage1.forEach(function(meno){
    let paragraph = document.createElement("p")
    paragraph.textContent = meno
    document.body.appendChild(paragraph)
})