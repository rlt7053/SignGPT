import SignGPTIcon from '../assets/signgpt.svg';

function Message() {
  return (
    <div className="Message">
      <img src={SignGPTIcon} alt="SignGPT icon" />
      <div>text</div>
    </div>
  );
}

export default Message;