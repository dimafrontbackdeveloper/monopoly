import Navbar from '../components/Navbar';
import Home from './Home';

const Main = () => {
  return (
    <section className="main">
      <div className="main__row d-g">
        <Navbar />
        <Home />
      </div>
    </section>
  );
};

export default Main;
