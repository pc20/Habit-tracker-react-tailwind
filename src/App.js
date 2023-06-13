import './App.css';
import DetailView from './Components/DetailView';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <Navbar />
      <DetailView />

    </div>
  );
}

export default App;
