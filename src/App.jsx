import Products from "./components/cardProducts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import {products as productos} from "../src/services/dataProd.json";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Products products={productos} />
      <Footer />
    </>
  );
}

export default App;
