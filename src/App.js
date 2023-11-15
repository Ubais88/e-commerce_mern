import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetail from './features/product-list/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './features/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },  
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  { 
    path: "/cart",
    element: <CartPage/>,
  },
  { 
    path: "/checkout",
    element: <CheckoutPage/>,
  },
  { 
    path: "/productdetail",
    element: <ProductDetailPage/>,
  },
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
