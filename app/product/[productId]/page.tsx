import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

interface ProductParams {
  productId?: string;
}

const Product = ({ params }: { params: ProductParams }) => {
  //console.log(params.productId);

  const product = products.find((item) => item.id === params.productId);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails data={product} />
      </Container>
    </div>
  );
};
export default Product;
