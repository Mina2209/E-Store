"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import FormatPrice from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  data: any;
}

export type CartProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  SelectedImg: any;
  quantity: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const HorizontalLine = () => <hr className="w-[30%] my-2" />;

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [CartProduct, setCartProduct] = useState<CartProductType>({
    id: data.id,
    name: data.name,
    price: data.price,
    description: data.description,
    category: data.category,
    brand: data.brand,
    SelectedImg: { ...data.images[0] },
    quantity: 1,
  });

  const router = useRouter();

  // console.log(CartProduct);

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === CartProduct.id
      );

      if (existingIndex !== -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const handleQtyIncrease = useCallback(() => {
    if (CartProduct.quantity === 99) return;

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [CartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (CartProduct.quantity === 1) return;

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [CartProduct]);

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, SelectedImg: value };
      });
    },
    [CartProduct.SelectedImg]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={CartProduct}
        product={data}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{data.name}</h2>
        <HorizontalLine />
        <div className="font-bold text-2xl text-black">
          {FormatPrice(data.price)}
        </div>
        <HorizontalLine />
        <div className="text-justify">{data.description}</div>
        <HorizontalLine />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {data.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {data.brand}
        </div>
        <div className={data.inStock ? "text-teal-400" : "text-rose-400"}>
          {data.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <HorizontalLine />
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={20} />
              <span>Product added to cart</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View Cart"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <SetColor
              cartProduct={CartProduct}
              images={data.images}
              handleColorSelect={handleColorSelect}
            />
            <HorizontalLine />
            <SetQuantity
              cartProduct={CartProduct}
              handleQtyDecrease={handleQtyDecrease}
              handleQtyIncrease={handleQtyIncrease}
            />
            <HorizontalLine />
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => handleAddProductToCart(CartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
