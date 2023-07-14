import './App.css';
import Listing from './Components/listing';
import data from './data/etsy.json';

data = data.filter(item => item.MainImage !== undefined)

function App() {
  return (
    <div className="App">
      <Listing items={data} />
      {/* {JSON.parsedata} */}
    </div>
  );
}

export default App;
