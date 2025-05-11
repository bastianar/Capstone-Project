import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./page/HomePage";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/service" Component={ServicePage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
