import AnchorLink from "react-anchor-link-smooth-scroll";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name-container">
        <h3>Rahul.dev</h3>
      </div>
      <MenuIcon className="menu-icon" />
      <div className="navigation-container">
        <AnchorLink href="#home" className="navigation-text">
          Home
        </AnchorLink>
        <AnchorLink href="#about" className="navigation-text">
          About
        </AnchorLink>
        <AnchorLink href="#projects" className="navigation-text">
          Projects
        </AnchorLink>
        <AnchorLink href="#contact" className="navigation-text">
          Contact
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
