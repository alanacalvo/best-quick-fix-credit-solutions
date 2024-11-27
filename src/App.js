import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import HowWeCanHelp from "./Components/HowWeCanHelp/HowWeCanHelp";
import Services from "./Components/ServicesSection/Services";
import TestimonialsSection from "./Components/TestimonialsSection/TestimonialsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowWeCanHelp />
      <Services />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
