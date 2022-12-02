import Header from '../components/Header';
import GameBackground from './../assets/images/Game-Background.png';

const Home = () => {
  return (
    <section className="home">
      <Header />
      <div className="home__row d-g">
        <div className="home__column">
          <figure>
            <img src={GameBackground} alt="game" />

            <figcaption>
              <p>PVP Galaxy Run</p>
              <button className="button"></button>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Home;
