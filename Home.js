import { Route, Routes } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./projects";
import Contact from "./Contact";
import New from "./New";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-color">
      <Header />
      <Routes>
        <Route path="/" Component={New} />
        <Route path="/about" Component={About} />
        <Route path="/skills" Component={Skills} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
};

export default Home;
