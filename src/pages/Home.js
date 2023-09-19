import { Link, useNavigate, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler () {
    navigate('/products');
  }
  
  return (
    <>
      <h1>Homepage</h1>
      <Link to={'/products'}></Link>
    </>
  );
}

export default HomePage;
