import { createContext, useState } from "react";

// COMPONENTS
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useContext } from "react";

const sidebarContext = createContext();

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="body">
      <sidebarContext.Provider value={{ showSidebar, setShowSidebar, toggle }}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </sidebarContext.Provider>
    </div>
  );
};

export const useSidebarContext = () => {
  return useContext(sidebarContext);
};

export default App;
