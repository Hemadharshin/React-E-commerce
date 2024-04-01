import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './product.css'
import { useDispatch } from "react-redux"
import { add } from "../Redux/CardSlice"



const Product=()=>{
  const [product,setProduct]=useState({})
  const [addToCart,setAddToCart] = useState(false)
  const {id} = useParams()
  const dispatch = useDispatch()
  console.log(id)

  useEffect(()=>{
    getProduct()
  },[])

  const getProduct=async()=>{
    const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(data)
    setProduct(data)
  }

  const handleAdd=(product)=>{
    dispatch(add(product))
    setAddToCart(true)

  }
    return(
    <div className="container mt-4">{
      Object.keys(product).length>0?(
        <>
        <div className="row">
          <div className="col-md-6">
          <img src={product.image} className='img-fluid' alt={product.title} class='image1'></img>
            </div>
            <div className="col-md-6" >
              <h4 class='title'>{product.title}</h4>
              <h5>$ {product.price}</h5>
              <h3 class='category'>{product.category}</h3>
              <p>{product.description}</p>
              <button class='botton'
              onClick={()=>{handleAdd(product)}}>{addToCart ? "added" : 'Add To Cart'}</button>
              </div>
          </div>
          </>
      ) :<p>Loading</p>
    }
      
    
    </div>
  
  )
}
export default Product