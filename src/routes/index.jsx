import { Routes, Route } from "react-router-dom";
import Default from "../layouts/default.layout";
import Home from "../pages/Home/Home.pages";
import Products from "../pages/Products/Products.pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Default/>}>
        <Route index element={<Home/>} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Router;
