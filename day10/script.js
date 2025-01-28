// Get ELEMENT BY CLASS NAME 
let a1 = document.getElementsByClassName('demo1')

console.log(a1)
console.log(a1[0])
console.log(a1[0].textContent)
a1[0].textContent = "hello - world"
a1[0].style.color = "red"

console.log(a1[1])

// GET ELEMENT BY TAG NAME
let b1 = document.getElementsByTagName("ol")
console.log(b1)
console.log(b1[1])
b1[1].style.backgroundColor = 'crimson'


// GET ELEMENT BY NAME
let c = document.getElementsByName("demo2")
console.log(c)
console.log(c[1])

c[1].style.backgroundColor = " blue"


// document.querySelector()
// -->value should be passes using css symbol
let d = document.querySelector('#demo')
console.log(d);

let f = document.querySelectorAll('.demo1')
console.log(f);



// document.querySelectorAll()
// --> value should be passes using css symbol
// will return reference of node-list

let e = document.querySelectorAll("#demo")
console.log(e)
console.log(e[0])

let g = document.querySelectorAll(".demo1")
console.log(g)



// event in dom
// --> it is an action performed by end user on a web-page


// Events In DOM:
// -->it is an action performed by end user on a web page.
// types of events

// 1.keyboard event
// 	key-up,keydown,key-press
// 2.mouse event
// 	onmouseover,onmouseleave,doubleclick
// 3.form event
// 	input-event,focus-event
// 4.pointer event
// 	click-event,pointer-event

function event1(){
    console.log("hello-world")
}