const Button = ({ name, onClick, onclick, type = 'button' }) => {
    const handleClick = onClick ?? onclick;

    return (
        <button type={type} className="buttonContainer" onClick={handleClick}>
            {name}
        </button>
    );
};

export default Button;