import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.style.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <h1>
        Dev<span>Sale</span>
      </h1>
      <button onClick={handleMenu}>
        <MenuIcon />
      </button>
      {menu ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link>My orders</Link>
          </li>
          <li>
            <Link>My account</Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
