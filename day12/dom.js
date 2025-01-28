let a = document.createElement("h1")

console.log(a)
a.textContent = "hello"

document.body.appendChild(a)
a.style.backgroundColor = "grey"

let div = document.getElementById('demo')
div.style.border = "5px solid"
let oli = document.createElement("ol")
console.log(oli)

div.appendChild(oli)

let li1 = document.createElement("li")
li1.textContent = "react"

oli.appendChild(li1)

let li2 = document.createElement("li")
li2.textContent = "node"

oli.appendChild(li2)


let table = document.createElement("table")

console.log(table)
table.setAttribute("border","2px solid black")

document.body.appendChild(table)

let tr1 = document.createElement("tr")
console.log(tr1)
table.appendChild(tr1)

let td1 = document.createElement("td")
console.log(td1)
td1.textContent= "React"
tr1.appendChild(td1)

let td2 = document.createElement("td")
console.log(td2)
td2.textContent= "mongodb"
tr1.appendChild(td2)

let td3 = document.createElement("td")
console.log(td3)
td3.textContent= "node"
tr1.appendChild(td3)

let td4 = document.createElement("td")
console.log(td4)
td4.textContent= "Express"
td4.setAttribute("rowspan","2")
tr1.appendChild(td4)

let tr2 = document.createElement("tr")
console.log(tr2)
table.appendChild(tr2)

let td5 = document.createElement("td")
tr2.appendChild(td5)
td5.textContent = "1+years"

let td6 = document.createElement("td")
tr2.appendChild(td6)
td6.textContent = "2+years"

let td7 = document.createElement("td")
tr2.appendChild(td7)
td7.textContent = "3+years"


