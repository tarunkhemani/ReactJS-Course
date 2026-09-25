
// if we want something to happen on button click
// const App=()=>{

//   const btnclicked=()=>{
//     console.log("button is clicked")
//   }
//   const doubleclick=()=>{
//     console.log("double baae")
//   }

//   return(
//     <div>
//       <h1>Hello, User</h1>
//       <button onClick={btnclicked} onDoubleClick={doubleclick}>Change user</button>
//     </div>
//   )
// }

// or we could directly write the fn there

// const App=()=>{


//   const doubleclick=()=>{
//     console.log("double baae")
//   }

//   return(
//     <div>
//       <h1>Hello, User</h1>
//       <button onClick={function(){
//         console.log("herrrhe")
//       }} onDoubleClick={doubleclick}>Change user</button>
//     </div>
//   )
// }


// now if we want to run fn on every time someone click on input, or whenever someone types in it
// const App=()=>{

//   function inputChanging(){
//     console.log('User is typing')
//   }



//   return(
//     <div>
//       <input onClick={()=>{
//         console.log("input pr click hua")
//       }}type="text" placeholder="Enter Name" />

//       <input onChange={inputChanging}type="text" placeholder="On change prac" />
//     </div>
//   )
// }

"Very important now, lets say you want to pass some parameter in the funtion"
"but as you know when onChange={clicked(elem)} as soon as we use () fn is called"
"one thing we should know that these these event listeners also pass the full event in the funtion"
"one way to do this"

// const App=()=>{

//   function inputChanging(){
//     console.log('User is typing')
//   }



//   return(
//     <div>

//       <input onChange={function(elem){
//         console.log(elem) // now we will see the full event detail in logs
//         console.log(elem.target) // it will print what element we are taregetting
//         // we can also get the value of what we are typing
//         console.log(elem.target.value)
//       }}type="text" placeholder="On change prac" />
//     </div>
//   )
// }

// we can also do like this 
// const App=()=>{

//   function inputChanging(value){
//     console.log('User is typing')
//     console.log(value)
//   }
//   return(
//     <div>

//       <input onChange={function(elem){ // since we cant directly write that fn name and pass something into it
//         inputChanging(elem.target.value) // now we can do something with this in that func
//       }}type="text" placeholder="On change prac" />
//     </div>
//   )
// }

"we could also do this with any div"

// const App=()=>{
//   return(
//     <div className="box" onMouseMove={(elem)=>{
//       console.log('nachoo')
//       console.log(elem)
//       // see this
//       console.log(elem.clientX)// it will the value of x axis according to the mouse postion in div
//     }}>

//     </div>
//   )
// }

// lets do on Wheel

const App=()=>{

  const pagescroll=()=>{
    console.log("page scrolling")
  }
  return(
    <div className="box" onWheel={pagescroll}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}



export default App