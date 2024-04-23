import React, { useRef } from "react";

import logo from "./assets/icons/logoIcon.svg";
import cartIcon from "./assets/icons/cartIcon.svg";
import rocketIcon from "./assets/icons/rocketIcon.svg";
import earth from "./assets/images/earth.webp";
import cardBackground1 from "./assets/images/background2.webp";
import cardBackground2 from "./assets/images/background3.webp";
import cardBackground3 from "./assets/images/background4.webp";
import cardBackground4 from "./assets/images/background5.webp";

import "./App.scss";

const App = () => {
  const homeSection = useRef(null);
  const productsSection = useRef(null);

  const handleScrollToSection = (refElement) => {
    const el = refElement.current ? refElement.current : refElement;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  };

  return (
    <div className="App">
      <header className="header">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="navbar">
            <li onClick={() => handleScrollToSection(homeSection)}>
              <a href="#home" className="text-link">Home</a>  
            </li>
            <li onClick={() => handleScrollToSection(homeSection)}>
              <a href="#products" className="text-link">Products</a>
            </li>
            <li>
              <a>
                <img src={cartIcon} alt="cart" />
              </a>
            </li>
          </nav>
        </div>
      </header>

      <main>
        {/* BANNER */}
        <section ref={homeSection} id="#home" className="banner">
          <div className="banner--content__container">
            <div className="banner__heading">
              <h1 className="text__heading__banner">Discover the vast expanses of <span className="text--highlighted">space</span></h1>
              <h2 className="text__subheading">Where the possibilities are <span className="text--highlighted--variant">endless!</span></h2>
              <button className="button">
                <span>Learn more</span>
              </button>
            </div>

            <div>
              <img src={earth} alt="Earth" />
            </div>
          </div>
        </section>
        
        {/* OFFERS */}
        <section ref={productsSection} id="#products" className="offers__section">
          <div className="offers__section--container">
            <h2 className="text__subheading">Offers</h2>
            
            <div className="offers__list">
                <div className="offer__card">
                  <h3>Move the borders of reality!</h3>
                  <h4>Go on a space adventure - it's possible with us!</h4>

                  <button className="button__outlined">
                    <span>Learn more</span>
                  </button>

                  <img src={cardBackground1} alt="background" />
                  <div className="offer_card__overlay"></div>
                </div>
                <div className="offer__card">
                  <h3>Space is not<br/>just stars and<br/>planets</h3>
                  <h4>Go on a space adventure</h4>

                  <button className="button__outlined">
                    <span>Learn more</span>
                  </button>

                  <img src={cardBackground2} alt="background" />
                  <div className="offer_card__overlay"></div>
                </div>
                <div className="offer__card">
                  <h3>For those<br/>who dream<br/>of stars</h3>
                  <h4>Our offer: make your dream come true</h4>

                  <button className="button__outlined">
                    <span>Learn more</span>
                  </button>

                  <img src={cardBackground3} alt="background" />
                  <div className="offer_card__overlay"></div>
                </div>
                <div className="offer__card">
                  <h3>Fulfill your<br/>fantastic dreams</h3>
                  <h4>Space has never been so close</h4>

                  <button className="button__outlined">
                    <span>Learn more</span>
                  </button>

                  <img src={cardBackground4} alt="background" />
                  <div className="offer_card__overlay"></div>
                </div>
            </div>

            <div className="offers__section--info">
              <h2 className="text__subheading">Embark on a space journey</h2>
              <p>
                Travelling into space is one of the most exciting and unforgettable adventures 
                that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, 
                then our company is ready to help you realize this dream. We offer a unique experience that will allow you to 
                go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be 
                filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of 
                your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for 
                space excursions.
              </p>
              <span>Read more</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <img src={rocketIcon} alt="" />
        <p className="text--highlighted--variant">Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
