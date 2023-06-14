import './App.css';
import DetailView from './Components/DetailView';
import Calendar from './Components/Calendar';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App h-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-2 p-4'>
          <Calendar />
        </div>
        <div className='col-span-9 text-left'>
          <DetailView></DetailView>
        </div>
      </div>
    </div>
  );
}

export default App;
