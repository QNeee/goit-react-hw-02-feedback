import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div>
        {options.map((btn => <Button key={btn} type="button" onClick={() => onLeaveFeedback(btn)}>{btn}</Button>))}
    </div>
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    clickFeedback: PropTypes.func,
};