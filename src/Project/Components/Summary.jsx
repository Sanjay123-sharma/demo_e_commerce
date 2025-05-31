import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Store/Slice';
import image from '../Image/myimage.jpg'
import { NavLink } from 'react-router';

export default function Summary() {
    const [value,setValue]=useState('')
    const Cart=useSelector((state)=>state.product.Cart);
    let total=Cart.reduce((x,item)=>{
        return x+item.price*item.count

    },0)
    const dispatch=useDispatch()
    const Increment=(id)=>{
        dispatch(increment(id));
    }
    const Decrement=(id)=>{
        dispatch(decrement(id))

    }
   

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-md mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Summary</h1>

      <div className="mb-4 text-gray-700">
        Selected Items: <span className="font-semibold">{Cart.length}</span>
      </div>

      <div className="space-y-4 mb-4">
        {Cart.map((item) => (
          <div key={item.id} className="border p-3 rounded shadow-sm">
            <div className="font-medium mb-2">{item.title}</div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => Increment(item.id)}
                className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                +
              </button>
              <span className="px-3">{item.count}</span>
              <button
                onClick={() => Decrement(item.id)}
                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-lg font-semibold mb-4">
        Total: <span className="text-green-600">${total.toFixed(2)}</span>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Payment Method</label>
        <select className="w-full p-2 border rounded" value={value} onChange={(e)=>setValue(e.target.value)}>
          <option value="">--select--</option>
          <option value="cash on delivery">Cash on Delivery</option>
        </select>
      </div>

      <div className="mb-6 text-center">
        <p className="mb-2">Pay Now - Scan the QR Code</p>
        <img src={image} alt="QR Code" className="w-32 h-32 mx-auto object-contain" />
      </div>

     {
        value.length===0?console.log("Enter Payment Method"):
         <NavLink to="/shipping">
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          CheckOut
        </button>
      </NavLink>
     }

      
    </div>
  )
}
