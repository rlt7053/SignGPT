import SignGPTIcon from '../assets/signgpt.svg';

function Message(props) {
  return (
    <div>
        {(props.messages) ?
        <> <div className="Message" style={{backgroundColor: 'white'}}>
        <div>
          <div className="icon">L</div>
        </div>

        <div className="text">What's the sign for fish?
        </div>
      </div>
      <div className="Message">
        <div>
          <img src={SignGPTIcon} alt="SignGPT icon" />
        </div>

        <div className="text">
          <video autoPlay controls>
          <source src="../assets/aslsample.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video><p>Here's the link to the video above: <a href="https://lifeprint.com/asl101/pages-signs/f/fish.htm">https://lifeprint.com/asl101/pages-signs/f/fish.htm</a>.</p></div></div></> : <>
          <div className="Message">
        <div>
          <img src={SignGPTIcon} alt="SignGPT icon" />
        </div>

        <div className="text">Feedback: Your fish sign is good, 
          but try holding it further away from 
          your body to simulate the fish swimming away. 
          Also, remember to hold your thumb up to 
          represent the fin and keep your other fingers 
          together to indicate a whole fish. To make the 
          fish mouth more clear, use your mouth movement
          and facial expression. You can watch the video 
          to the left for the correct sign and mouth 
          movement for 'fish'.
        </div></div>
      </>}
        </div>
  );
}

export default Message;