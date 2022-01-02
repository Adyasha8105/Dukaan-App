import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import OtherProducts from "./components/OtherProducts";
import SloganMaker from "./components/SloganMaker";

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <SloganMaker />
      <Features />
      <OtherProducts />
    </div>
  );
};

export default App;
