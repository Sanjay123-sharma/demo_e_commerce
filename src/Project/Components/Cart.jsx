import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { removeProduct } from "../Store/Slice";
import Summary from "./Summary";

export default function Cart() {
  const Cart = useSelector((state) => state.product.Cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cart Page</h1>
          <div className="space-x-4">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/orders" className="hover:underline">
              My Orders
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto mt-24 px-4 flex gap-6">
        {Cart.length === 0 ? (
          <h1 className="text-center text-red-600 text-xl w-full">
            Cart is Empty
          </h1>
        ) : (
          <>
            {/* Cart Items Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {Cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow rounded p-3 text-sm h-[300px] flex flex-col justify-between"
                >
                  <h2 className="font-medium truncate">{item.title}</h2>
                  <p className="text-yellow-600 text-xs">
                    Rating: {item.rating}
                  </p>
                  <p className="text-green-600 font-bold text-sm">
                    ${item.price}
                  </p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 object-contain rounded my-1"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 w-full mt-1"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Summary - Sticky to bottom on right */}
            <div className="w-full md:max-w-sm sticky bottom-0 self-start">
              <Summary />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>
          &copy; {new Date().getFullYear()} Made by Sanjay - All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
