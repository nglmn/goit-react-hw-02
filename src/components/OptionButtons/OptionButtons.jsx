import './OptionButtons.css';

const OptionButtons = ({ updateFeedback, totalFeedback }) => {

    return (
        <div className="option-btns">
            <button className="option-btn good" type="button" onClick={updateFeedback}>Good</button>
            <button className="option-btn neutral" type="button" onClick={updateFeedback}>Neutral</button>
            <button className="option-btn bad" type="button" onClick={updateFeedback}>Bad</button>
            {totalFeedback != 0 &&
                <button className="option-btn reset" id="reset" type="button" onClick={updateFeedback}>Reset</button>}
        </div>
    )
}

export default OptionButtons;