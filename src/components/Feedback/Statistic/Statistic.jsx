import PropTypes from "prop-types";
import { Container } from "./Statistic.styled";

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return <Container>
        <p>Good:{good}</p><p>Neutral:{neutral}</p><p>Bad:{bad}</p><p>Total:{total}</p>
        <p>positivePercantage:{positivePercentage}%</p>
    </Container>
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};