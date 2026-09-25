import { useState } from "react"


const App=()=>{

  //const 

  // return(
  //   <div>
  //     <form>
  //       <input onChange={(e)=>{
  //         console.log(e) // now whenever i type full event is shown in logs
  //         console.log(e.target) // with this we can see the targetted element
  //         console.log(e.target.value) // it shows the value everytime it changes
  //       }}type="text" placeholder="Enter your name" />
  //       <button>Click</button>
  //     </form>
  //   </div>
  // )

  "now lets give the value property to input"
  // return(// if we give the value prop as empty or something inside it then we wont be able to change it in browser
  //   // right now if we try to write anything in input box it will not show because value is empty string predefined
  //   <div>
  //     <form>
  //       <input onChange={(e)=>{}}type="text" placeholder="Enter your name" value=''/>
  //       <button>Click</button>
  //     </form>
  //   </div>
  // )

  "now see how we handle the input"

  const[title, setTitle]= useState('');


  // return(// now initially the title is '' so our input will look empty if right now we 
  //   // create onchange fn and logs the e.target.value then it will print only single letters but the input will look empty
  //   //now we will create a onchange fn which will use setState to change the value of input
  //   <div>
  //     <form>
  //       <input value={title} type="text" placeholder="Enter your name"/>
  //       <button>Click</button>
  //     </form>
  //   </div>
  // )
  "see this"
  // return(
  //   <div>
  //     <form>
  //       <input value={title} type="text" placeholder="Enter your name" onChange={(e)=>{
  //         setTitle(e.target.value)
  //       }}/>
  //       <button>Click</button>
  //     </form>
  //   </div>
  // )
  "now as you know we are not refreshing the page after submitting but we should empty the title value like this"
  const submitted=(e)=>{
    e.preventDefault()
    console.log("form submitted by", title)
    setTitle('')
  }
  return(
    <div>
      <form onSubmit={(e)=>{
        submitted(e)
      }}>
        <input value={title} type="text" placeholder="Enter your name" onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>Click</button>
      </form>
    </div>
  )

  "so above we just performed two way binding"
  "instead of doing something directly we tell react to do it"
  "for input changes, form submission or using form data we use 2 way binding"



}

export default App