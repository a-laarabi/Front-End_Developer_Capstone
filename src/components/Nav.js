import { Link } from "react-router-dom"
import Logo from "../assets/img/Logo.svg"
import "../assets/style/Nav.css"

const Nav = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav className="nav">
        <Link to="/">HOME</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/">MENU</Link>
        <Link to="/">RESERVATIONS</Link>
        <Link to="/">ORDER ONLINE</Link>
        <Link to="/">LOGIN</Link>
      </nav>
    </header>
  )
}

export default Nav;