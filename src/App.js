import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
