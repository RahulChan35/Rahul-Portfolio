import AnchorLink from "react-anchor-link-smooth-scroll";

import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

import { useSidebarContext } from "../App";

const Navbar = () => {
  const { showSidebar, setShowSidebar, toggle } = useSidebarContext();
  return (
    <div className="navbar">
      <div className="name-container">
        <h3>Rahul.dev</h3>
      </div>
      {!showSidebar && <MenuIcon className="menu-icon" onClick={toggle} />}
      {showSidebar && <SideBar />}
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
