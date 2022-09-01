
import './App.scss';
import Main from './pages/main/Main'
import Add from './pages/add/Add'
import Records from './pages/records/Records'
import Laptopform from './pages/laptopForm/Laptopform';
import Finish from './pages/finish/Finish';
import Internalpage from './pages/internalpage/Internalpage';

function App() {
  return (
    <div className="App">
      <Main/>
      <Add/>
      <Laptopform/>
      <Records/>
      <Internalpage/>
      <Finish/>
    </div>
  );
}

export default App;
