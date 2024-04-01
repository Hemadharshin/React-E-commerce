import React from "react"
import { useDispatch, useSelector } from "react-redux"
import './Cart.css'
import { remove} from "../Redux/CardSlice"

const Cart =()=>{
  const cartData = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  console.log(cartData)

  const calculateTotalAmount = () => {
    let total = 0;
    cartData.forEach(item => {
      total += item.price;
    });
    return total;
  }


  const handleRemove=(id)=>{
    dispatch(remove(id))
  }

  // const handleDecreaseQuantity=(id)=>{
  //   dispatch(decreaseQuantity(id))
  // }

  return(
    <div className="container">
       <h2 className="text-success">Cart</h2>
       <h4 class='total'>Total Amount: $ {calculateTotalAmount()}</h4>
       {
        cartData && cartData.length > 0 ? (
          cartData.map((item)=>(
            <div className="row mt-4 border">
              <div className="col-md-4 mt-4">
                <img src={item.image} alt={item.title} className="img-fluid" class='imag'></img>
                </div>
                 <div className="col-md-4 mt-4">
                  <h3 class='tit'>{item.title}</h3>
                  <h4>{item.category}</h4>
                  <p>{item.description}</p>
                  </div> 
                 <div className="col-md-4">
                    <h5 class='price'> Price: $ {item.price}</h5>
                    <p>Quantity: {item.quantity}</p>
                    <button class='button'
                    onClick={()=>{handleRemove(item.id)}}>Remove</button>
                     {/* <button className='button' onClick={()=>{handleDecreaseQuantity(item.id)}}>Decrease Quantity</button> */}
                    </div>     
              </div>
              
          ))
        ): <p>Loading</p>
       }
    </div>
  )
}
export default Cart