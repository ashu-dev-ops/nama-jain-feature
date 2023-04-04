import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import QuestionAndAnsPage from "./pages/QuestionAndAnsPage";
import Err404Page from "./pages/Err404Page";
import ContactUsPage from "./pages/ContactUsPage";
import ResponsiveGrid from "./pages/tryPage";
import BrowseSpace from "./pages/BrowseSpace";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/f&q" element={<QuestionAndAnsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/try" element={<ResponsiveGrid />} />
          <Route path="/spaces" element={<BrowseSpace />} />
          <Route path="*" element={<Err404Page />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
