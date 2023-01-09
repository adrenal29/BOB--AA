import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics';
import Budget from './components/Budget';
import Statement from './components/Statement';
import TaxFile from './components/TaxFile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/dashboard/analytics' element={<Analytics/>}></Route>
          <Route exact path='/dashboard/budget' element={<Budget/>}></Route>
          <Route exact path='/dashboard/statement' element={<Statement/>}></Route>
          <Route exact path='/dashboard/tax' element={<TaxFile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
