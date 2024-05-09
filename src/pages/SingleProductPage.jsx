import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productsService";
import { Rating } from "@mui/material";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
function SingleProductPage() {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImg(i){
    setCurrentImage(i)
  }

  return (
    <div className="px-3 my-5">
      {isLoading ? (
        <div className="container mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left side */}
          <div className="w-full md:w-[50%] flex flex-col items-center">
            <img src={singleProduct.images[currentImage]} className="w-full h-[400px] object-contain" alt="" />
            <div className="flex flex-wrap items-center mt-3 gap-3">
              {singleProduct.images.map((img,i)=>{
                return <img className="w-[100px] h-[100px] border-2  border-red-500" src={img} key={i} alt="" onClick={()=>handleCurrentImg(i)}/>
              })}
            </div>
          </div>

          {/* rightSide */}
          <div className="flex flex-col gap-2 ">
            <h2 className="font-bold text-2xl text-mainBlue">{singleProduct.title}</h2>
            <span className="text-blueTextColor text-[20px]">${singleProduct.price}</span>
            <p className="flex items-center gap-2">
              <span className="text-blackTextColor">Reviews:</span>
              <Rating name="half-rating-read" defaultValue={singleProduct.rating} precision={0.5} readOnly />
            </p>
            <p className="flex items-center gap-3">
              Avalibility:
              {singleProduct.stock?<span className="flex-center gap-3"><FaCheck color="green"/> In Stock</span>:<span className="flex-center gap-3"><ImCross color="red"/> Out of Stock</span>}
            </p>
            <p>Hurry up! only <span className="font-bold">{singleProduct.stock}</span> product left in stock!</p>
            <p>Total price: <span className="font-bold">${singleProduct.price}</span></p>
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
}

export default SingleProductPage;
