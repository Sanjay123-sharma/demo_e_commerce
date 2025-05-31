import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Components/Home";
import PDP from "../Components/PDP";
import Cart from "../Components/Cart";
import Shipping from "../Components/Shipping";
import Orders from "../Components/Orders";

export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <div>
          <h4>Oops ! </h4>
          <h5>404 not found.</h5>
        </div>
      ),
    },
    {
      path: "/product/:id",
      element: <PDP />,
      errorElement: (
        <div>
          <h4>Oops ! </h4>
          <h5>404 not found.</h5>
        </div>
      ),
    },
    {
      path: "/cart",
      element: <Cart />,
      errorElement: (
        <div>
          <h4>Oops ! </h4>
          <h5>404 not found.</h5>
        </div>
      ),
    },
    {
      path: "/shipping",
      element: <Shipping />,
      errorElement: (
        <div>
          <h4>Oops ! </h4>
          <h5>404 not found.</h5>
        </div>
      ),
    },
    {
      path: "/orders",
      element: <Orders />,
      errorElement: (
        <div>
          <h4>Oops ! </h4>
          <h5>404 not found.</h5>
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
