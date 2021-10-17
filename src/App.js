import './index.css'
import Score from './components/Score';
import Court from './components/Court'
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>NBA</h1>
        <h2>BUİLD YOUR OWN TEAM</h2>
      </header>
      <div className="container">
        <Score />
        <Court />
      </div>
    </div>
  );
}

export default App;
