import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import SloganMaker from "./components/SloganMaker";

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <SloganMaker />
      <Features />
    </div>
  );
};

export default App;
