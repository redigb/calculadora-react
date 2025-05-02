

export const Button = ({ label, onClick, className, isDisabled }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={() => !isDisabled && onClick(label)}
            disabled={isDisabled}
        >
            {label}
        </button>
    );
};