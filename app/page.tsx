import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FlexProofSection from '@/components/FlexProofSection';
import ConversionSection from '@/components/ConversionSection';
import ContactSection from '@/components/ContactSection';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FlexProofSection />
        <ConversionSection />
        <ContactSection />
      </main>
      <FloatingActionButton />
      <Footer />
    </>
  );
}
