import "./Header.css";

function Header() {
   return (
      <header className="header">
          <nav className="nav-menu-container">
            <ul className ="nav-menu">
              <li><a href="/">Home</a> </li>
              <li><a href="/about">About</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
      </header>
   );
}

export default Header;