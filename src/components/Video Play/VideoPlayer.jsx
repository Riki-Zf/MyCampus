import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/video.mp4";
const VideoPlayer = ({ playState, setPlaysState }) => {
  const play = useRef(null);
  const closePlay = (e) => {
    if (e.target === play.current) {
      setPlaysState(false);
    }
  };
  return (
    <div className={`video-player ${playState ? "" : "hide"}`} ref={play} onClick={closePlay}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
