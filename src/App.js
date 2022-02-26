import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MovieDetail } from './Components/MovieDeatail/MovieDetail';
import { Landing } from './Pages/Landing/Landing';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element= {<Landing/>}/>
        <Route exact path ='/movie/:id' element = {<MovieDetail/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;
