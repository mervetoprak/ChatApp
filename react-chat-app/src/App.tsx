import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import './styles/globalStyles.ts';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  const handleLogin = (username: string, room: string) => {
    setUsername(username);
    setRoom(room);
  };

  return username && room ? (
      <Chat username={username} room={room} />
  ) : (
      <Login onLogin={handleLogin} />
  );
};

export default App;
