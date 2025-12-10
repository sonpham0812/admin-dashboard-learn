import "./App.css";
import Header from "./components/Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import AddProduct from "./pages/Products/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="relative mx-8">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <Routes>
            <Route element={<AddProduct />} path="add-product" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
