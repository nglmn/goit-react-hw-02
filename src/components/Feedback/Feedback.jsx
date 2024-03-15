const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback }) => {

    const positiveRatio = Math.round((((good + neutral) / totalFeedback) * 100));

    const highlightPositiveRatio = (positiveRatio) => {
        let color = null;
        if (positiveRatio >= 75) {
            color = 'green';
        }
        if (positiveRatio >= 25 && positiveRatio < 75) {
            color = 'orange';
        }
        if (positiveRatio < 25) {
            color = 'red';
        }
        return { "color": `${color}` };
    }

    return (
        <ul className="feedback-list">
            <li className="feedback-item">Good: {good}</li>
            <li className="feedback-item">Neutral: {neutral}</li>
            <li className="feedback-item">Bad: {bad}</li>
            <li className="feedback-item">Total: {totalFeedback}</li>
            <li className="feedback-item" style={highlightPositiveRatio(positiveRatio)}>Positive: <b>{positiveRatio}%</b></li>
        </ul >
    )
}

export default Feedback