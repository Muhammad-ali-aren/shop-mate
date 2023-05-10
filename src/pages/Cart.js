import HCard from "../components/HCard";
import { useCart } from "../Context/CartContext";
const Cart = () => {
  const { total } = useCart();
  const { cartList } = useCart();
  return (
    <main className="flex flex-col justify-start gap-5">
      <span className="text-center text-lg font-bold">{cartList.length} / ${total}</span>
      {cartList.map((product) => (
        <HCard key={product.id} product={product} />
      ))}
    </main>
  );
};
export default Cart;
