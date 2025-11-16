import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@tailwindplus/elements";

// Importe o CSS
import "./index.css";

// Importe o Layout (App) e as Páginas
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

import ProdutoIndex from "./pages/produtos/ProdutoIndex.jsx";

// Crie o roteador
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, // Rota filha: /
      },
      {
        path: "about",
        element: <About />, // Rota filha: /about
      },
      {
        path: "produtos",
        element: <ProdutoIndex />,
      },
    ],
  },
]);

// Renderize o aplicativo usando o RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
