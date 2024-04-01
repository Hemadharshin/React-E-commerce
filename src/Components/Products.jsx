import React, { useEffect, useState } from "react"
import './style.css'
import { Link } from "react-router-dom"

const Products =()=>{
  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProducts()

  },[])

  const getProducts=async()=>{
    const response =await fetch('https://fakestoreapi.com/products ')
    const data = await response.json()
    setProducts(data)

  }
  return(
    <div className="container">
      <h2 class='topic'>Products</h2>
      <div  className="row">
        {
          products&& products.length > 0 ? (
            products.map((item,index)=>(
              <div className="col-md-3 mt-4">
                <div className="card p-2" style={{height:'380px',width:'260px'}} >
                  <Link to ={`/Product/${item.id}`}>
                  <img src={item.image}alt={item.title} class='img'/>
                  <h4>{item.title}</h4>
                  <h5>{item.price}</h5>
                  </Link>
                  </div>
                </div>
            ))
          ) : <p>Loading</p>
        }

      </div>
    </div>
  )
}
export default Products