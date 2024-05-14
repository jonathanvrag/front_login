import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FormLogin from './components/FormLogin/FormLogin';
import SuccessfulLogin from './components/SuccessfulLogin/SuccessfulLogin';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/successful-login' element={<SuccessfulLogin />} />
          <Route path='/' element={<FormLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
