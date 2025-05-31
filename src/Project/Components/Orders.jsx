import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeOrder } from '../Store/Slice';
import { NavLink } from 'react-router';

export default function Orders() {
    const Order=useSelector((state)=>state.product.Order);
    const dispatch=useDispatch()
    const handleCancel=(id)=>{
        dispatch(removeOrder(id))
        alert("Order Cancel Successfully")

    }

  return (
     <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Orders</h1>
         
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
        </div>
      </header>
     

      {/* Main Content */}
      <main className="flex-1 container mx-auto mt-24 px-4">
        {Order.length === 0 ? (
          <h1 className="text-center text-red-600 text-xl">No Order Yet</h1>
        ) : (
          <div className="space-y-4">
             <h1 className="text-2xl font-bold">Confirmed Orders</h1>
            {Order.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain rounded border"
                  />
                  <div>
                    <h2 className="text-md font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">Rating: {item.rating}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.count}</p>
                    <p className="text-green-600 font-bold">
                     Total: ₹ {(item.count * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCancel(item.id)}
                  className="mt-2 sm:mt-0 sm:ml-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
              </div>
            ))}
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
