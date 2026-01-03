import { useEffect, useRef } from 'react';

interface SaveTheDateSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const SaveTheDateSection = ({ audioRef }: SaveTheDateSectionProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeId = 'save-the-date-youtube-iframe';
    iframe.id = iframeId;

    const initializeYouTubeAPI = () => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: 'listening',
          id: iframeId,
          channel: 'widget'
        }),
        '*'
      );
    };

    iframe.addEventListener('load', initializeYouTubeAPI);
    
    if (iframe.contentWindow) {
      initializeYouTubeAPI();
    }

    return () => {
      iframe.removeEventListener('load', initializeYouTubeAPI);
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      if (!audioRef.current) return;

      try {
        const data = JSON.parse(event.data);
        
        // Only respond to messages from the Save the Date iframe specifically
        if (data.id === 'save-the-date-youtube-iframe' && data.event === 'infoDelivery' && data.info) {
          const playerState = data.info.playerState;
          
          if (playerState === 1) {
            audioRef.current.pause();
            console.log('Save the Date video playing - background music paused');
          } else if (playerState === 2 || playerState === 0) {
            audioRef.current.play().catch((error) => {
              console.log('Background music resume failed:', error);
            });
            console.log('Save the Date video paused/ended - background music resumed');
          }
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [audioRef]);

  return (
    <section className="bg-white relative w-full overflow-hidden py-12">
      <div className="w-full">
        <div className="space-y-12">
          {/* YouTube Video Section */}
          <div className="space-y-6">
            <h2 
              className="text-5xl font-display font-light italic text-gold-bright mb-8 text-center"
              data-testid="text-save-the-date-title"
            >
              Save the Date
            </h2>
            <div className="relative w-full overflow-hidden shadow-2xl aspect-video bg-black/5">
              <iframe
                ref={iframeRef}
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/LnmAmSoTx_4?enablejsapi=1&rel=0&showinfo=0&modestbranding=1"
                title="Save the Date Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .ytp-title,
        .ytp-watermark,
        .ytp-chrome-top,
        .ytp-show-cards-title,
        .ytp-pause-overlay-container,
        .ytp-ce-element,
        .ytp-cards-teaser {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default SaveTheDateSection;
