import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';
// import { useStateValue } from './StateProvider';

function App() {
  // const [{}, dispatch] = useStateValue();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path='/' 
            element={
              <Homepage/>
            }>
          </Route>

          <Route 
            path='/login' 
            element={[
              <Login/>
            ]}>
          </Route>

          <Route 
            path='/register' 
            element={[
              <Register/>
            ]}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
