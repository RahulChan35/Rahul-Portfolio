import AnchorLink from "react-anchor-link-smooth-scroll";

import CloseIcon from "@mui/icons-material/Close";
import { useSidebarContext } from "../App";
import { red } from "@mui/material/node/colors";

const SideBar = () => {
  const { showSidebar, toggle } = useSidebarContext();
  return (
    <>
      <div className="sidebar">
        <CloseIcon
          style={{
            color: red,
            top: "10px",
            right: "10px",
            position: "absolute",
          }}
          onClick={toggle}
        />
        <div className="sidebar-navigation-container">
          <AnchorLink
            href="#home"
            className="sidebar-navigation-text"
            onClick={toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="sidebar-navigation-text"
            onClick={toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#projects"
            className="sidebar-navigation-text"
            onClick={toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            Projects
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="sidebar-navigation-text"
            onClick={toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            Contact
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
