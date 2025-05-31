import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { addProduct, ApiData } from "../Store/Slice";

export default function Home() {
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const ProductList = useSelector((state) => state.product.ProductList);
  const Cart = useSelector((state) => state.product.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(ApiData());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);
  return (
    <div>
      <div>
        <ShowProducts
          loading={loading}
          ProductList={ProductList}
          error={error}
          Cart={Cart}
        />
      </div>

      <footer>
        <div></div>
      </footer>
    </div>
  );
}

export const ShowProducts = ({ loading, ProductList, error, Cart }) => {
  const dispatch = useDispatch();

  const handleAdd = (id) => {
    let res = Cart.find((item) => item.id === id);
    if (res) {
      alert("Item already Added");
    } else {
      dispatch(addProduct(id));
      alert("Go to Cart Page");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home Page</h1>
          <div className="space-x-4">
            <NavLink to="/cart" className="hover:underline">
              My Cart
            </NavLink>
            <NavLink to="/orders" className="hover:underline">
              My Orders
            </NavLink>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="flex-1 container mx-auto mt-24 px-4">
        {error ? (
          <h1 className="text-red-600 text-xl">Error</h1>
        ) : loading ? (
          <h1 className="text-blue-600 text-xl">Loading...</h1>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {ProductList.map((item) => (
              <div key={item.id} className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-green-600 font-bold">${item.price}</p>
                <p className="text-sm text-gray-500">{item.category.name}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded my-2"
                />
                <div className="flex justify-between items-center mt-2">
                  <NavLink
                    to={`/product/${item.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View More
                  </NavLink>
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded 
             hover:bg-blue-700 active:bg-green-600 
             active:scale-95 transition duration-150"
                    onClick={() => handleAdd(item.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
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
};
