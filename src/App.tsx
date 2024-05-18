import React from 'react';
import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import Login from './components/LoginComponent/Login';
import Profile from './components/ProfileComponent/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*<Route path='/profile' element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}



export default App;
