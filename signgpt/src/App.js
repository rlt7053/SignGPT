import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Signbar from './components/SignBar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
      <Signbar />
    </div>
  );
}

export default App;
