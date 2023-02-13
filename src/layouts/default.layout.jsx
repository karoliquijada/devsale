import Navbar from "../components/Navbar/navbar.component";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  );
};

export default Default;
