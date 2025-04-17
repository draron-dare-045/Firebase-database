// src/App.jsx
import React, { useState } from 'react';
import Login from './Components/Login';
import ChatRoom from './Components/ChatRoom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <ChatRoom user={user} /> : <Login onLogin={setUser} />}
    </div>
  );
}

export default App;
