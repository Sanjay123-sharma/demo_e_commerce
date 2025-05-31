import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addOrder, removeAllProducts } from '../Store/Slice';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh'
];

export default function Shipping() {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [landmark, setLandmark] = useState('');
  const [address, setAddress] = useState('');
  const dispatch=useDispatch()

  const Navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({
      name,
      address,
      landmark,
      pincode,
      state
    });
    
     setName('')
    setState('')
    setPincode('')
    setAddress('')
    setLandmark('')
    dispatch(addOrder())
    dispatch(removeAllProducts());
    Navigate('/orders')


  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shipping Address</h1>
          <NavLink to="/" className="hover:underline">Home</NavLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto mt-24 px-4 max-w-xl">
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Landmark</label>
            <input
              type="text"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">-- Select State --</option>
              {indianStates.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          >
            Place Order
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Made by Sanjay - All rights reserved.</p>
      </footer>
    </div>
  );
}
