import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
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
<<<<<<< HEAD
    <div id="Signbar">
      <video ref={videoRef} />
      <Message messages={ false} />
=======
    <div className="app">
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
            <button id="start" onClick={stopVideo}></button>
          ) : (
            <button id="stop" onClick={startVideo}></button>
          )}
        </div>
      </div>

      <Message messages={false} />
>>>>>>> b3b625fb8f7afb5f02d6cadcce3e6adb9b51a8af
    </div>
  );
}

export default Signbar;
