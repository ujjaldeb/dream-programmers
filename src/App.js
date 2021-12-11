import './App.css';
import Article from './components/Article/Article';
import Player from './components/Player/Player';
import Course from './components/Course/Course';
import Icon from './components/Icon/Icon';
import img1 from './images/players/player-1.png';
import img2 from './images/players/player-2.png';
import img3 from './images/players/player-3.png';
import img4 from './images/players/player-4.png';
import img5 from './images/players/player-5.png';
import img6 from './images/players/player-6.png';
import img7 from './images/blogs/blog-1.png';
import img8 from './images/blogs/blog-2.png';
import img9 from './images/blogs/blog-3.png';
import img10 from './images/blogs/blog-4.png';
import img11 from './images/courses/course-1.png';
import img12 from './images/courses/course-2.png';
import img13 from './images/courses/course-3.png';

function App() {
  return (
    <div>
      <section className="container">
        <div className="top-players">
          <h1 className="section-title" style={{ fontSize: '2rem' }}>Top Programmers</h1>
          <div className="players">
            <Player text="Programmer-1" imgUrl={img1} altText="Player-1" />
            <Player text="Programmer-2" imgUrl={img2} altText="Player-2" />
            <Player text="Programmer-3" imgUrl={img3} altText="Player-3" />
            <Player text="Programmer-4" imgUrl={img4} altText="Player-4" />
            <Player text="Programmer-5" imgUrl={img5} altText="Player-4" />
            <Player text="Programmer-6" imgUrl={img6} altText="Player-4" />
          </div>
        </div>

        <hr style={{ marginTop: '1rem' }} />

        <div className="top-blogs">
          <h1 className="section-title" style={{ fontSize: '2rem' }}>Top Blogs</h1>
          <div className="blogs">
            <Article imgUrl={img7} text="Think in a javascript way" blogger="John Doe" altText="Think in a javascript way" />
            <Article imgUrl={img8} text="Javascript odd and good parts" blogger="David walker" altText="Javascript odd and good parts" />
            <Article imgUrl={img9} text="You do not know js yet" blogger="Jane West" altText="You don't know js" />
            <Article imgUrl={img10} text="Why Javascript over others?" blogger="Steve Jobs" altText="why Javascript?" />
          </div>
        </div>
      </section>

      {/* Latest Courses */}
      <section className="container">
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Latest Courses</h2>
        <div className="courses">
          <Course
            imgUrl={img11}
            altText="React - The Complete Guide 2022"
            title="React - The Complete Guide 2022"
            mentor="Reed Krakoff."
            starCount="4"
            duration="01:30 hr"
          >
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="far fa-star" />
          </Course>
          <Course
            imgUrl={img12}
            altText="NodeJS - The Complete Guide 2022"
            title="NodeJS - The Complete Guide 2022"
            mentor="Anna Marisaz"
            starCount="5"
            duration="02:30 hr"
          >
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
          </Course>
          <Course
            imgUrl={img13}
            altText="Javascript - The Complete Guide 2022"
            title="Javascript - The Complete Guide 2022"
            mentor="Brad Williamson"
            starCount="3"
            duration="03:30 hr"
          >
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="fas fa-star" />
            <Icon faType="far fa-star" />
            <Icon faType="far fa-star" />
          </Course>
        </div>
      </section>
    </div>
  );
}

export default App;
