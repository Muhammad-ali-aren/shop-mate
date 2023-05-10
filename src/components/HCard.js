import { useCart } from "../Context/CartContext";

const HCard = ({ product }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="max-w-7xl bg-red-400  max-h-24 gap-4 items-center flex justify-between">
      <img
        className="inline-block h-16 w-16 object-cover items-start "
        src={product.image}
        alt="he"
      />
      <span>{product.name}</span>
      <span>${product.price}</span>
      <button
        onClick={() => removeFromCart(product)}
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded text-sm px-9 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Remove
      </button>
    </div>
  );
};
export default HCard;
