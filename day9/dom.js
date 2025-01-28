// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title = "amazon";
// /* console.log(document.title);*/
// console.log(document.body);

let img = document.images
console.log(img)

for(let i=0;i<img.length;i++){
    console.log(i);
    img[i].style.length = '200px'
    img[i].style.width = '200px'
    img[i].style.borderRadius = '100%'
    img[i].alt = "image"
    
}
let a = document.getElementById("demo")
console.log(a.textContent);
a.style.backgroundColor = "red"
a.style.textAlign = "center"
// in-direct access in dom (methods in dom)
// 1) document.getElementById("value")
// 2) document.getElementsByClassName("value")
// 3) document.getElementsByTagName("value")
// 4) document.getElementsByName("value")
// 5) document.querySelector("value")
// 6) document.querySelectorAll("value")

