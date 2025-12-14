import "./App.css";
import Header from "./components/Layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import AddProduct from "./pages/Products/AddProduct";
import Layout from "./components/Layout";
import routers from "./config/routers";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routers.map((route, index) => {
            const Page = route.component;
            return (
              <Route key={index} exact path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
