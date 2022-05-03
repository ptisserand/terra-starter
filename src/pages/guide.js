import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>🍺 The World's End 🍺</h1>
            <p>Only you can bring us to the last pub</p>
          </div>
        </Link>
      </header>


      <div className="score-board-container">
        <h3>How to play</h3>

        <div>
          <span className="help">
            Drink as many beers as you can within 15 seconds!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Guide;
