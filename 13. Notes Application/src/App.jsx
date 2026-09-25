import { useState } from "react"


const App=()=>{


const[title, setTitle]= useState('')
const[details, setDetails]=useState('')

// we want to store these notes also, we want to map
// so we will store them as object in a array

const [task, setTask]= useState([])

// const submitted=(e)=>{
//   console.log("form submitter note is", title);
//   console.log("form submitter detail is", details); 
//   e.preventDefault()
//   setTitle('')
//   setDetails('')
// }
"we want to store the objects in arr"
const submitted=(e)=>{

  const copyTask=[...task]

  copyTask.push({title, details})

  setTask(copyTask)

  e.preventDefault()
  setTitle('')
  setDetails('')
}


  // return(
  //   <div>
  //     <form onSubmit={(e)=>{
  //       submitted(e)
  //     }}>
  //       <input type="text" placeholder="Enter Heading" value={title} onChange={(e)=>{
  //         setTitle(e.target.value)
  //       }}/>
  //       <textarea placeholder="Write detailed note" value={details} onChange={(e)=>{
  //         setDetails(e.target.value)
  //       }}></textarea>
  //       <button>Add Note</button>
  //     </form>

  //     <div>
  //       <h1>Recent Notes</h1>
  //       <div>
  //         {task.map(function(elem, idx){
  //           return(
  //             <div key={idx}>
  //               <h3>{elem.title}</h3>
  //               <p>{elem.details}</p>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // )

  "now lets also add delete taks functionality"

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    console.log(copyTask[idx]) // this will help us us which task's delete button we clicked
    // we use a method called splice

    copyTask.splice(idx,1) // from which index you want to delete and how many you want to delete

    setTask(copyTask)
  }

    return(
    <div>
      <form onSubmit={(e)=>{
        submitted(e)
      }}>
        <input type="text" placeholder="Enter Heading" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <textarea placeholder="Write detailed note" value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>
        <button>Add Note</button>
      </form>

      <div>
        <h1>Recent Notes</h1>
        <div>
          {task.map(function(elem, idx){
            return(
              <div key={idx}>
                <h3>{elem.title}</h3>
                <p>{elem.details}</p>
                <button onClick={()=>{
                  deleteNote(idx)
                }}>delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App