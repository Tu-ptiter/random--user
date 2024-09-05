import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState(null);  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
  
    axios.get('https://randomuser.me/api/')
      .then(response => {
        setUser(response.data.results[0]);
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  
      });
  }, []);  

  if (loading) {
    return ;  
  }

  return (
    <div className="App">
      {user ? (
        <div>
          <header>
            <p>RANDOM USER GENERATOR</p>
          </header>
          <div class="card">
            <img src={user.picture.large} alt="User Avatar" class="img" />
            <p class ="first">Hi, My name is</p>
            <p class ="profile">{user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <p>Location: {user.location.city}, {user.location.country}</p>
          </div>   
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default App;
