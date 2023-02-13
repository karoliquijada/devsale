import { Link } from "react-router-dom";
import "./navbar.style.scss"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link>My orders</Link></li>
        <li><Link>My account</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar