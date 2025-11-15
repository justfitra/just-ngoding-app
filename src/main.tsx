import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/index.tsx";
import Navbar from "./components/Navbar/index.tsx";
import Products from "./pages/Products/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
