import Card from "../components/Card";
const Home = ({ Products  }) => {
  return (
    <main className="flex gap-3 justify-between flex-wrap mt-6 other:justify-evenly">
      {Products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </main>
  );
};
export default Home;
