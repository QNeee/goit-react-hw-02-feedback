import PropTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div>
        {options.map((btn => <button key={btn} className="btn" type="button" onClick={() => onLeaveFeedback(btn)}>{btn}</button>))}
    </div>
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    clickFeedback: PropTypes.func,
};