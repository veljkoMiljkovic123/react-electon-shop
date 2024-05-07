import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productsService";

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
    <>
      {isLoading ? (
        <div className="container mx-auto mt-10">
          {/* Left side */}
          <div className="w-full md:w-[50%]">
            <img src={singleProduct.images[currentImage]} className="w-full h-[400px] object-contain" alt="" />
            <div className="flex items-center mt-3 gap-3">
              {singleProduct.images.map((img,i)=>{
                return <img className="w-[100px] h-[100px] border-2  border-red-500" src={img} key={i} alt="" onClick={()=>handleCurrentImg(i)}/>
              })}
            </div>
          </div>

          {/* rightSide */}
          <div>
            <h2>Clas</h2>
          </div>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
}

export default SingleProductPage;
