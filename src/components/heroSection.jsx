import ShowProducts from "./ShowProducts";
import {products as productos} from '../services/dataProd.json'


export default function HeroSection() {
  return (
    <>
      <div className="pt-32  bg-white pb-10">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Productos
        </h1>
      </div>
      <ShowProducts products={productos[1]}/>
      <Footer />
    </>
  );
}
