

import { useState } from "react"


"now we will see another method for arrays or objects to set using useState"
// const App2=()=>{

//     const [num, setNum]= useState({user: "pokkos", age:"10"})

    
//     const btnClicked=()=>{
//         setNum(prev=>({...prev, age:50}))
//     }
//     return(
//         <div>
//             <h1>{num.user}, {num.age}</h1>
//             <button onClick={btnClicked}>Click</button>
//         </div>
//     )
// }

"now see the batch updates and a problem we face"
const App2=()=>{

    const [num, setNum]= useState(10)

    "we use setNum multiple times"
    const btnClicked=()=>{  
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)
        "but now when you click the button it olny does one update +1 and not +3"
        "because it happens quickly it couldnt identify the new setted *num* value"
        "this is what called batch update"

        // this is how we do it to fix this
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
        "now it works"


    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={btnClicked}>Click</button>
        </div>
    )
}


export default App2