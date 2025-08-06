import React from "react";
import "./VideoCard.css";

// PUBLIC_INTERFACE
function VideoCard({
  thumbnail,
  duration,
  avatar,
  title,
  channel,
  verified,
  views,
  date,
  live,
}) {
  /**
   * Renders a Video Card for video feed/grid.
   * @param {string} thumbnail - URL for video thumbnail.
   * @param {string} duration - Video length (e.g. "3:15").
   * @param {string} avatar - URL for channel avatar.
   * @param {string} title - Video title.
   * @param {string} channel - Channel name.
   * @param {boolean} verified - Is channel verified.
   * @param {string} views - View count descriptor (e.g. "1 M de vues").
   * @param {string} date - Published time ago (e.g. "il y a 15 jours").
   * @param {boolean} live - Is the video live now.
   */
  return (
    <div className="video-card">
      <div className="video-thumbnail" style={{ backgroundImage: `url('${thumbnail}')` }}>
        <span className="video-duration">{duration}</span>
        {live && (
          <span className="badge-live">
            <span className="live-dot"></span>
            <span>En direct</span>
          </span>
        )}
      </div>
      <div className="video-info">
        <img className="video-avatar" src={avatar} alt={channel} />
        <div className="video-meta">
          <div className="video-title">{title}</div>
          <div className="video-channel">
            {channel}
            {verified && (
              <span title="Verified" className="video-verified"></span>
            )}
          </div>
          <div className="video-stats">
            {views} • {date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
