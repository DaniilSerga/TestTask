import "./App.scss";
import logo from "./assets/icons/logoIcon.svg";
import cartIcon from "./assets/icons/cartIcon.svg";
import earth from "./assets/images/earth.webp";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar">
          <li>
            <a href="#home" className="text-link">Home</a>  
          </li>
          <li>
            <a href="#products" className="text-link">Products</a>
          </li>
          <li>
            <a>
              <img src={cartIcon} alt="cart" />
            </a>
          </li>
        </nav>
      </header>

      <main>
        {/* BANNER */}
        <section className="banner">
          <div className="banner__heading">
            <h1 className="text___heading__banner">Discover the vast expanses of <span className="text--highlighted">space</span></h1>
            <h2 className="text___subheading__banner">Where the possibilities are <span className="text--highlighted--variant">endless!</span></h2>
            <button className="button">
              <span>Learn more</span>
            </button>
          </div>

          <div>
            <img src={earth} alt="Earth" />
          </div>
        </section>
        
        {/* OFFERS */}
        <section className="offers__section">
          
        </section>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
