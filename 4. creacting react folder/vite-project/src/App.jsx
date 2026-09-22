// to first understand how it works
// lets create a fn

// function App(){
//   return "hello"
// }

//export default App // now we can see the hello on the browser screen

// basic boilerplate code
// const App= ()=>{
//   return( // you cant return 2 things so everthing has to be inside a div when want to return
//     <div>App
//     <h3>Hello</h3>
//     </div>
  
//   )
// }

//using fragments
const App= ()=>{
  return (
    <>
    <div id="some">hello</div>
    <div id="some2">hello 2</div>
    </>
  )
}

export default App