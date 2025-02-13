import React from "react"
import { Link } from "react-router-dom"



const Header=()=>{
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand text-info" >Shopping</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to ='/products' class="nav-link " >Products</Link>
        </li>
        <li class="nav-item">
          <Link  to='/cart'class="nav-link">Cart</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Header