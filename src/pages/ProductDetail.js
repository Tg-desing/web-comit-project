import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return <p>{params.productId}</p>
}

export default ProductDetailPage;