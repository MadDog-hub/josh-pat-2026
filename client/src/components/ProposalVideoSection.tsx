import { useEffect, useRef } from 'react';

const ProposalVideoSection = () => {
  return (
    <section className="bg-white relative w-full overflow-hidden pb-12">
      <div className="w-full">
        <div className="space-y-6">
          <h3 
            className="text-3xl md:text-4xl text-center text-primary italic px-4"
            style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
          >
            The Proposal
          </h3>
          <div className="relative w-full overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
            <video
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
