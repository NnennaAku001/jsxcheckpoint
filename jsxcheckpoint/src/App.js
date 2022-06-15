import './App.css';
import jjd from './Image/jjd.jpg';
import './Style.css'
import myvideo from './Image/myvideo.mp4'

function App() {
  return (
    <div style={{ border:'solid 1px black'}}>
      <h1 className ="title red">Fashion</h1>
      <br />
      <h2>Image in public folder</h2>
      <img src="./Image/keke.jpg" width="500" height="450" alt="Kekeplamer" />
      <br />
      <h2>Image in src folder</h2>
      <img src={jjd} width="500" height="450" alt='Runway' />
      <video width="320" height="240" controls>
      <source src= "myvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
