import "../assets/css/index.css";
function Product({ cart: { title, price } }) {
  return (
    <div className="info">
      <h4>{title}</h4>
      <p>{price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
