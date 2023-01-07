import './App.css';
import { useSelector } from 'react-redux';
import Login from './View/pages/Login';

function App() {
  const Appproducts = useSelector((state) => state.AllProducts)
  console.log(Appproducts);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
