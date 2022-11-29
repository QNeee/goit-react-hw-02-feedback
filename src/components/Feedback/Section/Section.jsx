import PropTypes from "prop-types";
export const Section = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};
Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
};