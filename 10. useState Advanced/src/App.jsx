import {useState} from 'react'
"useState works asynchronously"
const App=()=>{

  const [num, setNum]= useState(10)

  // lets try to rpint the value before setting num
  // const btnClicked=()=>{

  //   console.log(num)
  //   setNum(20)
  //   // now when you click button in the logs you will see 10 for the obvious reasons 
  // }

  // lets print after setting now
  // const btnClicked=()=>{

  //   setNum(20)
  //   console.log(num)
  // }
  "now when we clicked the button still it printed 10 because the useState fn works asynchrously"
  "this will happen on first click only, because afterwards it will log 20 only" 
  "so UI updates immediately on click because its a bit slow process, but console.log is fast so it prints befaore the value is even set as new"

  // so see this too
  //   const btnClicked=()=>{
  //   setNum(num)
    
  // }
  "now we are trying to set the same value"
  "react doesnt re render it"
  "react identifies that it is same"


  // return(
  //   <div>
  //     <h1>{num}</h1>
  //     <button onClick={btnClicked}>Click</button>
  //   </div>
  // )

  // now lets see how we work with object

  const[obj, setObj]=useState({user:'Osborn', age:'20'})

  const changeObj=()=>{
    "to set the values of object we have few ways"
    "first we can use destructuring"
    "as you also know arrays and object store the references"
    "so if two var are pointing to the same ref , then changes in one will affect others too"
    "so see how we create a copy"

    const newObj={...obj} // so we kinda copied it , but the ref are different
    newObj.user="Boksy"

    setObj(newObj)

    // we can do same for arrays list
    // const newNum=[...num]
    // newNum.push(99)
    // setNum(newNum)
    


  }
  return(
    <div>
      <h1>{obj.user}, {obj.age}</h1>
      <button onClick={changeObj}>Click</button>
    </div>
  )


}

export default App