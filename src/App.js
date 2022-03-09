import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products/*" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
