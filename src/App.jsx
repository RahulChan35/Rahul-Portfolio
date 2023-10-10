// COMPONENTS
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
