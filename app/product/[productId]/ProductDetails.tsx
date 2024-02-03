"use client";

import Button from "@/app/components/Button";
import FormatPrice from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import { useState } from "react";

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

  const productRating =
    data.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    data.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{data.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{data.reviews.length} reviews</div>
        </div>
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
        <div>color</div>
        <HorizontalLine />
        <div>quantity</div>
        <HorizontalLine />
        <div className="max-w-[300px]">
          <Button label="Add To Cart" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
