import './OptionButtons.css';

const OptionButtons = ({ updateFeedback, totalFeedback }) => {

    return (
        <div className="option-btns">
            <button className="option-btn good" type="button" onClick={() => updateFeedback('good')}>Good</button>
            <button className="option-btn neutral" type="button" onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className="option-btn bad" type="button" onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback != 0 &&
                <button className="option-btn reset" type="button" onClick={() => updateFeedback('reset')}>Reset</button>}
        </div>
    )
}

export default OptionButtons;