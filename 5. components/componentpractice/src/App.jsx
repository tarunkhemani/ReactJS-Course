
// const App= ()=>{
//   return(
//     <>
//     <div>App</div>
//     </>
//   )
// }
import Card from "./components/Card"
import Navbar from "./components/Navbar"
const App= ()=>{
  return(
    <>
    <div className="card"><h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatum ad sed, aspernatur similique accusamus tenetur eius. Nam vitae consectetur quod molestias aliquid tempora voluptatibus ipsum suscipit eveniet impedit! Voluptate!</h1></div>
    <Card />
    <Card /> 
    <Navbar/>
    </>
//we can use this Card as many times as we want
  )
}


export default App