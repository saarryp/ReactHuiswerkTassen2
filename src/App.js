import React from 'react';
import Button from "./components/Button";
import Product from './components/Product';
import FourSection from "./components/FourSection";
import './App.css';
import pinkBag from "./assets/bag_1.png";
import brownBag from "./assets/bag_2.png";
import greenBag from "./assets/bag_3.png";
import yellowBag from "./assets/bag_4.png";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
      <nav>
        <Button
            buttonType="button"
            isDisabled={false}
            clickHandler = {() => console.log('to the collection')} > to to the collection
            </Button>
          <Button
              buttonType="button"
              isDisabled={false}
              clickHandler = {() => console.log('shop all bags')} > shop all bags
          </Button>
          <Button
              buttonType="button"
              isDisabled={true}
              clickHandler = {() => console.log('pre-orders')} > pre-orders
          </Button>

      </nav>
          <main>
             <Product
                 typeOfSell= "Best seller"
                 img= {pinkBag}
                 title= "een roze handtas"
                 typeOfBag="The handy bag"
                 priceOfBag={400}
             />
              <Product
                  typeOfSell = "Best seller"
                  img= {brownBag}
                  title= " een bruine tas"
                  typeOfBag="The stylish bag"
                  priceOfBag= {400}
              />
              <Product
                      typeOfSell= "New Collection"
                      img = {greenBag}
                      title= "een groene tas"
                      typeOfBag="The simple bag"
                      priceOfBag= {300}
              />
              <Product
                  typeOfSell= "New Collection"
                  img = {yellowBag}
                  title = "een gele tas"
                  typeOfBag= "The trendy bag"
                  priceOfBag= {150}
              />


          </main>

          <footer>

              <FourSection
                  textContent= "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ducimus magnam minus repudiandae! Adipisci aliquam dicta dolore,
              dolorem eligendi eos eum ipsa ipsum itaque molestiae mollitia
              odit quisquam rerum sapiente sint!"
                  />

              <FourSection
                  img={brand} title="het merk"
                  />

              <FourSection
                  img={ourStory} text="twee lachende vrouwen op foto"
                  />

              <FourSection
                  textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aperiam aut consequatur est fugiat, fugit in iure nihil perferendis quas quasi quo quos reiciendis rem sit sunt unde vitae voluptatem,
                      voluptatibus."
                  />

          </footer>

        </>
  );
}

export default App;



