import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function Product() {
  return (
      <div>
      <input type="search" placeholder='Enetr for search'/>
      <div>
      <Link to="new">New</Link>
        <Link to="featured">Featured</Link>
      </div>
       
        <Outlet/>
      </div>

    
  )
}
