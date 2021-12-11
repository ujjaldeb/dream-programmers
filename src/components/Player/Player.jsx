
const Player = (props) => {
    const { text, imgUrl, altText } = props;
    return (
        <div className="player">
            <img src={imgUrl} alt={altText} style={{ width: '70px', marginRight: '1rem' }} />
            <h3 className="player-name">{text}</h3>
        </div>
    );
};

export default Player;