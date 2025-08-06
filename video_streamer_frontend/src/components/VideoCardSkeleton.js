import React from "react";
import "./VideoCardSkeleton.css";

// PUBLIC_INTERFACE
function VideoCardSkeleton() {
  /** Simple skeleton for video card loading state. */
  return (
    <div className="video-card skeleton">
      <div className="video-thumbnail skeleton-block"></div>
      <div className="video-info">
        <div className="video-avatar skeleton-block"></div>
        <div className="video-meta" style={{flex: 1}}>
          <div className="skeleton-line" style={{width: '90%', height: '18px'}}></div>
          <div className="skeleton-line" style={{width: '60%', height: '13px', marginTop: '7px'}}></div>
          <div className="skeleton-line" style={{width: '70%', height: '11px', marginTop: '8px'}}></div>
        </div>
      </div>
    </div>
  );
}
export default VideoCardSkeleton;
