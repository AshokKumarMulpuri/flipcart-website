import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart} from '../Redux/action';
import './home.css'

const Home = () => {
  const [inventory, setInventory]= useState([]);
  const dispatch = useDispatch();
 
  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data.map(item => ({
                  ...item,
                  price:  15
                }));
        setInventory([...data]);
      });
  }, []);
  

  return (
    <>
    <h1>Product List</h1>
    <div id="container">
      
      {inventory.map((item, index) => (
        <div key={index}>
          <div id="con">
            <p>{item.name}</p>
         <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
         </div>
        </div>
        
      ))}
    </div>
    </>
  );
}

export default Home;



