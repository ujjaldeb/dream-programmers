const Course = (props) => {
    const { imgUrl, altText, title, mentor, starCount, duration } = props;
    return (
        <div className="course">
            <div className="course-banner">
                <img src={imgUrl} alt={altText} style={{ width: '100%' }} />
            </div>

            <div className="course-detail">
                <h3 className="course-title">{title}</h3>
                <p className="course-author">{mentor}</p>
                <div className="course-info">
                    <div>
                        {props.children}
                        <span style={{ marginLeft: '0.3rem' }}>{starCount}</span>
                    </div>

                    <div className="course-duration">
                        <i className="far fa-clock" style={{ marginRight: '0.3rem' }}></i>
                        {duration}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;