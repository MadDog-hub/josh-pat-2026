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
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          {/* YouTube Video Section */}
          <div className="space-y-6">
            <h3 
              className="text-3xl md:text-4xl text-center text-primary italic"
              style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
            >
              Save the Date
            </h3>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl aspect-video bg-black/5">
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

          {/* Proposal Video Section */}
          <div className="space-y-6">
            <h3 
              className="text-3xl md:text-4xl text-center text-primary italic"
              style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
            >
              The Proposal
            </h3>
            <div className="relative w-full max-w-[350px] mx-auto overflow-hidden rounded-xl shadow-2xl" style={{ aspectRatio: '9/16' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://res.cloudinary.com/dc36azfgf/video/upload/v1767436821/proposal_vid_cnxzsj.mp4"
                controls
                data-testid="video-proposal"
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
