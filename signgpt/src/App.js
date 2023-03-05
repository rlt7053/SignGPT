import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Signbar from "./components/Signbar";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div id="interactive">
        <Chat />
        <Signbar />
      </div>
    </div>
  );
}

export default App;
