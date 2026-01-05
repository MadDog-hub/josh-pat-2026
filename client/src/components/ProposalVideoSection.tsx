import { useEffect, useRef } from 'react';

interface ProposalVideoSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const ProposalVideoSection = ({ audioRef }: ProposalVideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    const handlePause = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => console.log('Music play failed:', err));
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handlePause);
    };
  }, [audioRef]);

  return (
    <section className="bg-white relative w-full overflow-hidden pb-12">
      <div className="w-full">
        <div className="space-y-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 
              className="text-5xl font-display font-light italic text-gold-bright mb-2"
              data-testid="text-proposal-title"
            >
              The Proposal
            </h2>
            <p className="text-xl font-display text-primary/80 mb-8 italic">April 1, 2025</p>
          </div>
          <div className="relative w-full overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://res.cloudinary.com/dc36azfgf/video/upload/v1767436821/proposal_vid_cnxzsj.mp4"
              controls
              data-testid="video-proposal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalVideoSection;
