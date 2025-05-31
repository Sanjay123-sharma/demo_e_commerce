import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router'
import { addProduct } from '../Store/Slice';

export default function PDP() {
    const {id}=useParams()
    const ProductList=useSelector((state)=>state.product.ProductList);
    let Product=ProductList.find((item)=>item.id.toString()===id);
    const dispatch=useDispatch()

        const Cart=useSelector((state)=>state.product.Cart)

        const handleAdd=(id)=>{
            let res=Cart.find((item)=>item.id===id)
                  if(res){
                      alert("Item already Added")
                  }else{
                      dispatch(addProduct(id));
                  }
        }

  return (
   <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Product Detail</h1>
          <div className="space-x-4">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/cart" className="hover:underline">
              My Cart
            </NavLink>
            <NavLink to="/orders" className="hover:underline">
              My Orders
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto mt-24 px-4">
        {!Product ? (
          <h1 className="text-red-600 text-xl text-center">Product Not Found</h1>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image */}
              <div>
                <img
                  src={Product.image}
                  alt={Product.title}
                  className="w-full h-auto object-contain rounded"
                />
              </div>

              {/* Details */}
              <div>
                <h2 className="text-2xl font-bold mb-2">{Product.title}</h2>
                <p className="text-gray-700 mb-2">{Product.description}</p>
                <p className="text-green-600 font-semibold text-xl mb-2">
                  ${Product.price}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Category: {Product.category}
                </p>
                <p className="text-sm text-yellow-600 mb-2">
                  Rating: {Product.rating.rate} ({Product.rating.count} reviews)
                </p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded 
             hover:bg-blue-700 active:bg-green-600 
             active:scale-95 transition duration-150" onClick={()=>handleAdd(Product.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Made by Sanjay - All rights reserved.</p>
      </footer>
    </div>
  )
}
