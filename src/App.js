import './index.css'
import Court from './components/Court'
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>NBA</h1>
        <h2>BUİLD YOUR OWN TEAM</h2>
      </header>
      <div className="container">
        <Court />
      </div>
    </div>
  );
}

export default App;
