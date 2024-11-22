import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import HowWeCanHelp from "./Components/HowWeCanHelp/HowWeCanHelp";
import Services from "./Components/ServicesSection/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowWeCanHelp />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
