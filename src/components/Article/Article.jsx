const Article = (props) => {
    const { imgUrl, text, blogger, altText } = props;

    return (
        <article className="blog">
            <div className="thumbnail">
                <img src={imgUrl} alt={altText} style={{ width: '200px', marginRight: '1rem' }} />
            </div>
            <div className="blog-info">
                <h2 className="blog-title">{text}</h2>
                <p className="blog-author">By <a href="/" style={{ textDecoration: 'none' }}>{blogger}</a></p>
            </div>
        </article>
    );
};

export default Article;