import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface ProductParams {
  productId?: string;
}

const Product = ({ params }: { params: ProductParams }) => {
  //console.log(params.productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails data={product} />
      </Container>
    </div>
  );
};
export default Product;
