import { Link } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate();
  // navigate("/welcome");
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><Link to="p1">Book</Link></li>
        <li><Link to="p2">Power Point Presentation</Link></li>
        <li><Link to="p3">Online Course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
