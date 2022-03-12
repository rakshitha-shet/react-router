import {Routes, Route, Link} from "react-router-dom";
import About from "./Components/About";
import Featured from "./Components/Featured";
import Home from "./Components/Home";
import New from "./Components/New";
import NotFound from "./Components/NotFound";
import OrderSummary from "./Components/OrderSummary";
import Product from "./Components/Product";
import UserDeatils from "./Components/UserDeatils";

function App() {
  return (
    <>
      <Link to="/"> Home</Link>
      <Link to="/about"> About</Link>
      <Link to="/product"> Product</Link>
      <Link to="/user/1"> User1</Link>
      <Link to="/user/2"> User2</Link>
      <Link to="/user/3?debug=true"> User3</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="order-summary" element={<OrderSummary/>}/>
        <Route path="user/:userId" element={<UserDeatils/>}/>
        <Route path="product" element={<Product/>}>
          <Route index element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
          <Route path="featured" element={<Featured/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
   </>
  );
}

export default App;
