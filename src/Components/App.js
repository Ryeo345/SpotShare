import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Rentals from './Rentals';
import { fetchListings } from '../store';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchListings());
  }, []);

  return (
    <div>
      <h1>FS App Template</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
            </nav>
          </div>
        )
      }
      <Routes>
        <Route path="/" element={<Rentals />} />
      </Routes>
    </div>

  );
};


export default App;