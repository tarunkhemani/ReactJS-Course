
// we can create any element with js too

var h1=document.createElement('h1')
console.log(h1) // you can check log in browser console

h1.innerHTML="Hello from js";
console.log(h1)

// to put this element in out screen
// select the element
document.body.appendChild(h1)


// import and export
// first make the script as type module in index.html
// learn about it too, learn the benefits
console.log(a)
//import anything from "./app.js // if we are using default export then
// we can give any name it will work fine

"but if we are using something like named export too in that file then we have to import like this"
import { b } from "./app.js"; // we have to give the exact name now for named export
// if we didnt used {} then the b would have printed what a was printing because of default export

console.log(b)
