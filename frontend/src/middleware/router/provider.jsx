import React from "react";
// Le provider est le fournisseur de route du côté front-end
import { createBrowserRouter } from "react-router-dom";


// PAGES COMPONENTS
import { Home } from "../../pages/home";
import { Client } from "../../pages/client";
import { Product } from "../../pages/product";

// CRUD OPERATIONS PRODUCTS
import { CreateProduct } from "../../pages/product/functions/createProduct";
import { EditProduct } from "../../pages/product/functions/editProduct";
import ShowProduct from "../../pages/product/functions/showProduct";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/clients",
    element: <Client />
  },
  {
    path: "/products",
    element: <Product />
  },
  {
    path: "/products/create",
    element: <CreateProduct />
  },
  {
    path: "/products/show/:id",
    element: <ShowProduct />
  },
  {
    path: "/products/edit/:id",
    element: <EditProduct />
  },
]);