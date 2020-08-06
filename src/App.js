import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import 'bootstrap/dist/css/bootstrap.css';
const products = [{price: 4.500 , name:"Egg pack" , category:"Food"},
                  {price: 5.300 , name:"Deodorant" , category:"Hygiene"},
                  {price:10.800 , name:"Screwdiver" , category:"Utility"}]


function App() {
  return (
    <ProductTable products={products}/>
  );
}

export default App;
