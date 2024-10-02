const Card = ({ title, price, image }) => {
  return (
    <div className="card border rounded-lg p-4 shadow-lg w-62 sm:w-52">
      <img
        draggable="false"
        className="w-full h-48 object-cover rounded-md"
        src={image}
        alt={title}
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-lg text-gray-600">{price}</p>
    </div>
  );
};

function Product() {
  const products = [
    {
      title: "Buah Apel",
      price: "Rp 10.000",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Buah Jeruk",
      price: "Rp 12.000",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Buah Pisang",
      price: "Rp 8.000",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div id="product" className="mx-6">
      <h1 className="text-3xl font-medium text-center mb-6">Produk Kami</h1>
      <div className="flex justify-center flex-wrap gap-5">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
