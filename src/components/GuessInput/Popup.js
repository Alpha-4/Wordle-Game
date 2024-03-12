import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Popup({ guess, onClose, answer }) {
  return (
    <div className="popup-overlay">
      <div
        className={
          guess < NUM_OF_GUESSES_ALLOWED ? "happy banner" : "sad banner"
        }
      >
        {guess < NUM_OF_GUESSES_ALLOWED ? (
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guess} guesses</strong>.
          </p>
        ) : (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}

        <button onClick={onClose} autoFocus={true}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default Popup;
