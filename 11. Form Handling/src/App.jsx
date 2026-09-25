import { useState } from "react"

"lets handle form"
// const App=()=>{
//   "when inside a form"
//   "you fill something in input"
//   "then hit button then page reloads automatically"
//   "you know that frontend is only till page reloads"
//   return(
//     <div>
//       <form>
//         <input type="text" placeholder="enter your name"/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }
"now lets use some handler in form"

const App=()=>{

  // const submitHandler=()=>{
  //   console.log("form submitted")
  // }
  // return(
  //   <div>
  //     <form onSubmit={submitHandler}>
  //       <input type="text" placeholder="enter your name"/>
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // )
  "so we can see we this message in logs for microseconds"
  "because there is a defalut behavior of forms"
  "which is to reload the page whenever submit happens"

  "lets try to prevent this default behavior"
  // const submitHandler=(e)=>{
  //   e.preventDefault() // now we have stopped the default behavior
  //   console.log("form submitted")
  // }

  // return(
  //   <div>
  //     <form onSubmit={(e)=>{
  //       submitHandler(e)
  //     }}>
  //       <input type="text" placeholder="enter your name"/>
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // )

  "but now again when we typing something in form, we are tryong to communicate direct with website"
  "but as we know we shouldnt do that, we should do everything through react"

  "we cant write in input by ourself"
  "here we use something called Two Way Binding to handle inputs"

  




}


export default App