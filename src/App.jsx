import { Route,Routes,Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import NewAbout from "./page/AboutNew";
import Book from "./page/Book";

export default function App(){
  return(
    <>
      <nav>
        <ul>

          <li><Link to={"/"} element>Home</Link></li>
          <br />
          <li><Link to={"/about"}>About</Link></li>
          <br />
          <li><Link to={"/contact"}>Contact</Link></li>

        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about">
          <Route index element={<About/>}/>
          <Route path="new" element={<NewAbout />}/>
          <Route path=":id" element={<Book />}/>
        </Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route></Route>
      </Routes>
    </>
  )
}