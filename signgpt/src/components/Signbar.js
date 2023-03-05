import React, { useEffect, useRef } from "react";
import Message from "./Message";

function Signbar() {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: '100%' } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  return (
    <div id="Signbar">
      <video ref={videoRef} />
      <Message messages={ false} />
    </div>
  );
}

export default Signbar;
