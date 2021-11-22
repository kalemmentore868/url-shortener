import Header from "./components/Header";
import "./HeadAndHero.css";
import "./SearchbarAndResults.css";
import "./Stats.css";
import "./Footer.css";
import HeroSection from "./components/HeroSection";
import LinkBar from "./components/LinkBar";
import StatisticsSection from "./components/StatisticsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LinkBar />
        <StatisticsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
