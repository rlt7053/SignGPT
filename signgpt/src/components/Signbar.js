import React, { useRef, useState } from "react";
import Message from "./Message";

function Signbar() {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 500;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div id="Signbar">
      <div className="app__container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
        <div className="app__input">
          {playing ? (
            <button id="stop" onClick={stopVideo}></button>
          ) : (
            <button id="start" onClick={startVideo}></button>
          )}
        </div>
      </div>

      <Message messages={false} />
    </div>
  );
}

export default Signbar;
