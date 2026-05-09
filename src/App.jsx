import Header from './components/Header';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Promo from './components/Promo';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Tracking from './components/Tracking';

function App() {
  return (
    <>
      <Header />
      <SideNav />
      <main className="pt-[90px] min-h-screen">
        <Hero />
        <Promo />
        <Menu />
        <AboutUs />
        <Tracking />
      </main>
    </>
  );
}

export default App;
