import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
// Cover media
import cover2Image from '@assets/Dong&Ris-209_1762581138035.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import SaveTheDateSection from '@/components/SaveTheDateSection';
import ProposalVideoSection from '@/components/ProposalVideoSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/dc36azfgf/video/upload/v1767436820/Love_Wins_All_Piano_cover_by_James_Wong_cccpcn.mp3"
      />

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <ProposalVideoSection audioRef={audioRef} />
        <ScrollTriggeredTimeline />
        <CoverSection
          imageUrl="https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/1_fav_prenup_kyhjl4.jpg"
          alt="Josh & Pat Wedding Cover 1"
        />
        <VenueSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/2_fav_prenup_hkvxlo.jpg"
          alt="Josh & Pat Wedding Cover 2"
        />
        <DressCodeSection />
        <HashtagGiftsSection />
        <SaveTheDateSection audioRef={audioRef} />
        <MemorableMomentsSection />
        <RSVPSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/3_fav_prenup_sdq7sf.jpg"
          alt="Josh & Pat Wedding Cover 3"
        />
        <EntourageSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;