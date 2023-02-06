import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Providers
import { AlertProvider } from "../Contexts/AlertContext";
// Pages
import AboutPage from "./About/AboutPage";
import BeansPage from "./Beans/BeansPage";
import CatalistPage from "./Catalist/CatalistPage";
import ContactPage from "./Contact/ContactPage";
import DemosPage from "./Demos/DemosPage";
import HomePage from "./Home/HomePage";
import JimCoPage from "./JimCo/JimCoPage";
import NotFound from "./NotFound/NotFound";
import PrivacyPage from "./Privacy/PrivacyPage";
import TechPage from "./Tech/TechPage";
// Miscellaneous
import AlertPopup from "./Widgets/Alert/AlertPopup";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// CSS
import "./App.css";

function App() {
  return (
    <AlertProvider>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <div className="page">
            <Routes>
              <Route
                path=""
                element={
                  <>
                    <AlertPopup />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <AlertPopup />
                    <HomePage />
                  </>
                }
              />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Beans" element={<BeansPage />} />
              <Route path="/Catalist" element={<CatalistPage />} />
              <Route path="/Contact" element={<ContactPage />} />
              <Route path="/JimCo" element={<JimCoPage />} />
              <Route path="/Demos" element={<DemosPage />} />
              <Route path="/Privacy" element={<PrivacyPage />} />
              <Route path="/Tech" element={<TechPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </AlertProvider>
  );
}

export default App;
