import './App.css';
import Hero from "./components/hero/Hero";
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
const [queen, setQueen] = useState([])
useEffect(()=>{
  axios.get('http://www.nokeynoshade.party/api/queens/all')
  .then((res)=>{console.log(res.data)})
  .catch((err)=>{console.log(err)})
})

  return (
    <div className="App">
      <Hero />

    </div>
  );
}

export default App;
