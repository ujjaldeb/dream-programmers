const Icon = (props) => {
    const { faType } = props;

    return (
        <i className={faType}></i>
    );
};

export default Icon;