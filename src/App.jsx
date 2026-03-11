import Product from "./components/Product";

function App() {
  const prodcuts = [
    {
      id: 1,
      title:'T-shirt',
      price: 500,
    },
    {
      id: 2,
      title:'shirt',
      price: 700,
    },
    {
      id: 3,
      title:'Pant',
      price: 900,
    },
    {
      id: 4,
      title:'Shoes',
      price: 1200,
    },
    
  ];
  return (
    <div>
      <h1>This is my Favourite Foods</h1>


<div>

{

prodcuts.map((cart)=><Product key={cart.id} cart={cart} />)
}


</div>

   </div>
  );
}

export default App;
