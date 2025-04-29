import { BrowserRouter } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Link to="/"><Home/> </Link>
    <Link to="/about"><About/> </Link>
    <Link to="/contact"><Contact /></Link>

   <div>
    <routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </routes>
    </div> 
    </BrowserRouter>
  );
}