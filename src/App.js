import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Tools from "./components/Tools";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Tools/>
      <Contact/>
      {/* <Footer/> */}
      <SocialLinks/>
    </div>
  );
}

export default App;
