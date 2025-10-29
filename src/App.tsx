import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Download } from './components/Download';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Truck3D } from './components/Truck3D';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Download />
      <Contact />
      <Footer />
      <Truck3D />
    </div>
  );
}

export default App;
