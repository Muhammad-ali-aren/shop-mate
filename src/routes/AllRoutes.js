import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const AllRoutes = () => {
  const Products = [
    {
      id: 1,
      name: "sony wh-ch510 Bluetooth Wireless",
      price: 149,
      image: "/images/1001.png",
    },
    { id: 2, name: "Boat Rockerz 450", price: 49, image: "/images/1002.png" },
    { id: 3, name: "JBL Tune 760NC", price: 179, image: "/images/1003.png" },
    {
      id: 4,
      name: "LogiTech H111 Wired",
      price: 39,
      image: "/images/1004.png",
    },
    {
      id: 5,
      name: "Apple Airpods Max Bluetooth Headsets",
      price: 199,
      image: "/images/1005.png",
    },
    {
      id: 6,
      name: "zebronic zeb-thunder Wired",
      price: 29,
      image: "/images/1006.png",
    },
  ];

  return (
    <Routes>
      <Route path="" element={<Home Products={Products} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
export default AllRoutes;
