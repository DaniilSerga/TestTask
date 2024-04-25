import React, { useRef } from "react";

import logo from "./assets/icons/logoIcon.svg";
import rocketIcon from "./assets/icons/rocketIcon.svg";
import earth from "./assets/images/earth.webp";
import menuIcon from "./assets/icons/menuIcon.svg";
import closeIcon from "./assets/icons/closeIcon.svg";

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
          <div className="navbar__wrapper">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <img src={menuIcon} alt="Open menu" />
              <img src={closeIcon} alt="Open menu" />
            </label>

            <nav className="navbar">
              <li className="navbar__item" onClick={() => handleScrollToSection(homeSection)}>
                <a href="#home" className="text-link">
                  <label className="menu__btn" htmlFor="menu__toggle">Home</label>
                </a>  
              </li>
              <li className="navbar__item" onClick={() => handleScrollToSection(productsSection)}>
                <a href="#products" className="text-link">
                  <label className="menu__btn" htmlFor="menu__toggle">Products</label>
                </a>
              </li>
              <li className="navbar__item">
                <a href="#">
                  <label className="menu__btn" htmlFor="menu__toggle">
                    <svg width="24px" height="20px" viewBox="0 0 24 20" enableBackground="new 0 0 24 20">
                      <defs>
                        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" fy="90%">
                          <stop offset="0" stopColor="white" />
                          <stop offset="1" stopColor="white" />
                        </linearGradient>
                        <mask id="car-icon-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24px" height="20px">
                          <path d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                          fill="white" />
                        </mask>
                      </defs>
                      <g mask="url(#car-icon-mask)">
                          <rect x="0" y="0" width="24px" height="20px" fill="url(#gradient)" />
                      </g>
                    </svg>
                  </label>
                </a>
              </li>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* BANNER */}
        <section ref={homeSection} className="banner">
          <div className="banner__content-container">
            <div>
              <h1 className="banner__text-heading">Discover the vast<br/>expanses of <span className="text--highlighted">space</span></h1>
              <h2 className="text-subheading">Where the possibilities are <span className="text--highlighted--variant">endless!</span></h2>
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
        <section ref={productsSection} className="offers__section">
          <div className="offers__section--container">
            <h2>Offers</h2>
            
            <div className="offers__list">
              <div className="offer__card">
                <h3>Move the borders<br/>of reality!</h3>
                <h4>Go on a space adventure <span>- it's possible with us!</span></h4>
                <button className="button__outlined">
                  <span>Learn more</span>
                </button>
              </div>
              <div className="offer__card">
                <h3>Space is not<br/>just stars and<br/>planets</h3>
                <h4>Go on a space adventure</h4>
                <button className="button__outlined">
                  <span>Learn more</span>
                </button>
              </div>
              <div className="offer__card">
                <h3>For those<br/>who dream<br/>of stars</h3>
                <h4>Our offer: make your dream come true</h4>
                <button className="button__outlined">
                  <span>Learn more</span>
                </button>
              </div>
              <div className="offer__card">
                <h3>Fulfill your<br/>fantastic dreams</h3>
                <h4>Space has never been so close</h4>
                <button className="button__outlined">
                  <span>Learn more</span>
                </button>
              </div>
            </div>

            <div className="offers__section--info">
              <h2>Embark on a space journey</h2>
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
