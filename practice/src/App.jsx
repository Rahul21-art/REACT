// import Productcard from "./Productcard.jsx"
// function App() {
//   const productName="MOTOROLA EDGE 50"
//   const price=25000
//   const isAvailable=true

//   const Products=[{
//     productName:"MOTOROLA EDGE 50",
//     price:25000,
//     isAvailable:true
//   },{
//     productName:"MOTOROLA G22",
//     price:15000,
//     isAvailable:true},
//     {
//     productName:"MOTOROLA G31",
//     price:18000,
//     isAvailable:true
//     }
//   ]

//   const post = [
//     {
//       Author: "rahul",
//       Title: "right",
//       Description: "hgfj"
//     },{
//       Author: "rahuleh",
//       Title: "righerht",
//       Description: "hgfhej"
//     }
//   ]

//   return (
//     <>
//     <div >
     
      
//       <Productcard a={productName} b={price} c={isAvailable}/>
//       <Productcard a={productName} b={price} c={!isAvailable}/>
       
//        {/* {
//         post.map((post)=> (
//             <Blogpost
//             Author={post.Author}
//             Titile={post.Title}
//             Description={post.Description}
//             />
//         ))
//        } */}
//       </div> 
//     </>
//   )
// }
// export default App
import './App.css' 
import { useState } from 'react'
function App() { 
      const [count,setCount]=useState(0)
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")

      const handleIncrement=()=>{
        setCount(count+1)
      }
      const handleDecrement=()=>{
        setCount(count-1)
      }
      const handleClick=()=>{
        console.log("button clicked")
        {count <=18 ? alert(" you are under age (unable to login)") :  alert ("login succesful")}
      }
  return (
    <div>
      <p> enter your email</p>
      <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <p> enter your password</p>
      <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <p>AGE : </p>
      <p>{count}</p>
      {count <18 ? <p> you are under age required age is 18+</p> : <p>valid age</p>}
      <button onClick={handleIncrement}>Increament</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>LOGIN</button>
      </div>
    </div>
  )
}
export default App
  // const handleClick=()=>{
  //   console.log("button clicked")
  //   alert("you are logged in successfully")
  // }
  // const handleChange=(event)=>{
  //   console.log(event.target.name)
  //   comsole.logh(event.target.value)
  // }
  // return (

  //   <div>
  //    <form>
  //    <p> Enter your name</p>
  //    <input type="text" name="my name" placeholder="type your name" onChange={handleChange}/>
  //    <p> Enter your email</p>
  //    <input type="text" name="email" placeholder="enter your email" onChange={handleChange}/>
  //    <p> Enter the password</p>
  //     <input type="password" name="password" placeholder="enter your password" onChange={handleChange}/>
  //   <button onClick={handleClick}> LOGIN</button>
  //     </form>
    // </div>
  // )
