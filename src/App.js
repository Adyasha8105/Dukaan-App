import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import OtherProducts from "./components/OtherProducts";
import SloganMaker from "./components/SloganMaker";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white font-Galano">
      <Header />
      <SloganMaker />
      <Features />
      <OtherProducts />
      <Footer />
    </div>
  );
};

export default App;
