import React from 'react';
import Button from "./components/Button";
import Product from './components/Product'
import './App.css';
import pinkBag from "./assets/bag_1.png";
import brownBag from "./assets/bag_2.png";
import greenBag from "./assets/bag_3.png";
import yellowBag from "./assets/bag_4.png";

function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
      <nav>
        <Button text="to to the collection"/>
        <Button text= "shop all bags"/>
        <Button text= "pre-orders"/>
      </nav>
          <main>
             <Product typeofBag="The handy bag" priceOfBag="€ 400 " />
              <Product typeofBag="The stylish bag" priceOfBag= "€ 250"/>
              <Product typeOfBag="The simple bag" priceOfBag="€ 300" />
              <Product typeOfBag= "The trendy bag" priceOfBag= "€ 150" />
              <article>
                <span>Best seller</span>
                <img src={pinkBag} alt="the handy bag"/>
                  <p>The handy bag</p>
                  <h4>€ 400 </h4>
              </article>
              <article>
                <span> Best seller</span>
                <img src={brownBag} alt="The stylish bag"/>
                  <p>The stylish bag</p>
                  <h4>€ 250</h4>
              </article>
              <article>
                <span> New collection</span>
                <img src={greenBag} alt="The simple bag"/>
                  <p>The simple bag</p>
                  <h4> € 300</h4>
              </article>
              <article>
                <span> New Collection</span>
                  <img src={yellowBag} alt=" the trendy bag"/>
                  <p>The trendy bag</p>
                  <h4> € 150 </h4>
              </article>
          </main>

        </>
  );
}

export default App;



