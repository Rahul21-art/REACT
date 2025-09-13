import Productcard from "./Productcard.jsx"
function App() {
  const productName="MOTOROLA EDGE 50"
  const price=25000
  const isAvailable=true

  const Products=[{
    productName:"MOTOROLA EDGE 50",
    price:25000,
    isAvailable:true
  },{
    productName:"MOTOROLA G22",
    price:15000,
    isAvailable:true},
    {
    productName:"MOTOROLA G31",
    price:18000,
    isAvailable:true
    }
  ]

  const posts = [
    {
      Author: "rahul",
      Title: "right",
      Description: "hgfj"
    },{
       Author: "rahuleh",
      Title: "righerht",
      Description: "hgfhej"
    }
  ]

  return (
    <>
    <div >
     
      
      <Productcard a={productName} b={price} c={isAvailable}/>
      <Productcard a={productName} b={price} c={!isAvailable}/>

      </div> 
    </>
  )
}

export default App
