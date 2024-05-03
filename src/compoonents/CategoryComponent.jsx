import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";

function CategoryComponent() {
  const [category, setCategory] = useState([]);
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    ProductsService.getAllCategory()
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  function showCategory(){
    setIsActive(!isActive)
  }

  return (
    <div className="bg-[#f4f4f4] py-5">
      <div className="container mx-auto flex items-center gap-5 flex-col lg:flex-row h-full">
        <button className="bg-mainBlue text-whiteColor px-4 py-2 rounded-md cursor-pointer hover:bg-mainYellow transiotion-all duration-200" onClick={showCategory}>{isActive?'Hide':"Show"} Category</button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-2 place-items-center">
           {isActive? (category.map((el,i)=>{
                return <li className="bg-mainBlue text-whiteColor px-4 py-2 w-[250px] text-center rounded-lg cursor-pointer hover:bg-mainYellow" key={i}>{el}</li>
            })):null}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
