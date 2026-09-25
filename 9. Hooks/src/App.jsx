

// in react when you create a variable or change it, you shouldnt interact directly with dom
// you should use react
'lets say we have a variable that we want to cheange from 20 to 30'

// const App=()=>{
//   let a=20; // we will change it on buttong click
//   // we didnt used const because we are going to change the value

//   function changeA(){
//     console.log(a)
//     a=30;
//     console.log(a)
    
//   }
//   return(
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
//   // so technically value changes internally if u see the logs, but on the screen the value remains same

// }
"so here we are directly trying to change something in website"
"we should tell react to do this then react will do it"
"here we use useState hook"

import { useState } from "react"

// const App=()=>{

//   // we will create variable like this
//   const[num, setNum]= useState(20) // we can put anything in place of 20, even string like the way we normally declare variable

//   "setNum helps in setting value"
//   "num is like read only and setNum is write only"

//   // also see this

//   const [users, setUsers] = useState([10,20,30])

//   function changeNum(){
//     setNum(30);
//     // now it works

//     setUsers([40,50])
//   }
//   return(
//     <div>
//       <h1>Value of a is {num} <br /> value of users {users}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )

// }

const App=()=>{
  const[count, setCount]= useState(0)


  function increase(){
    setCount(count+1)
  }
  function decrease(){
    setCount(count-1)
  }


  return(  
    <div>
      <h1>{count}</h1>
      <button onClick={increase}> increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

"now lets create a counter with it"


export default App