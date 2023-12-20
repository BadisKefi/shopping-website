import Image from "next/image";
import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const generateRating = (rating: number) => {
    if (rating < 0 || rating > 5)
      throw new Error("Rating must be between 0 and 5.");

    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <AiFillStar key={`filled-${i}`} />
        ) : (
          <AiOutlineStar key={`empty-${i}`} />
        )
      );
    }
    return <div className="flex gap-1 text-[20px] text-[#ff9529]">{stars}</div>;
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="flex gap-4 font-bold">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
