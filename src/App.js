import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import './style/landingPage.css';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Trending Section */}
      <div className='trending' id='trending'>
        <Trending />
      </div>
      {/* End of Trending */}

      {/* Superhero Section */}
      <div className='superhero' id='superhero'>
        <Superhero />
      </div>
      {/* End of Superhero */}
    </div>
  );
}

export default App;
