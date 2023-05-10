import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
const Card = ({ product }) => {
  const [includedInCart, SetIncludedInCart] = useState(false);
  const { addToCart, deleteFromCart, cartList } = useCart();
  useEffect(() => {
    const itemIncluded = cartList.some((item) => item === product);
    if (itemIncluded) {
      SetIncludedInCart(true);
    } else {
      SetIncludedInCart(false);
    }
  }, [cartList, product]);
  // const addBtn =
  //   "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  //   const removebtn = "text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  return (
    <div
      key={product.id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="4">
        <img
          className="p-8 rounded-t-lg "
          src={product.image}
          alt="product imge"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="4">
          <h5 className="text-lg truncate font-bold tracking-tight text-gray-900 dark:text-white max-w-full">
            {product.name}
          </h5>
        </a>

        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold  text-gray-900 dark:text-white max-w-full ">
            ${product.price}
          </span>
          {includedInCart ? (
            <button
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={() => deleteFromCart(product)}
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
