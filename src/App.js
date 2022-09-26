import React from "react";
import './App.css';
import {Main} from "./components/main/Main";
import {NewProduct} from "./components/newProduct/NewProduct";
import {Collection} from "./components/collection/Collection";
import {ManufacBlock} from "./components/manufacBlock/ManufacBlock";
import {FurnitureBlock} from "./components/furnitureBlock/FurnitureBlock";
import {InfoBlock} from "./components/infoBlock/InfoBlock";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Main/>
      <NewProduct/>
      <Collection/>
      <ManufacBlock/>
      <Footer/>
    </div>
  );
}

export default App;
