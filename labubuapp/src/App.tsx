import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import './App.css';

function App() {
  useEffect(() => {
    WebApp.ready();     
    WebApp.expand(); 
  }, []);

  const handleClick = () => {
    WebApp.sendData("hello sn0weagle data sent"); 
    WebApp.close(); 
  };

  return (
    <div className="app">
      <h1>hello sn0weagle</h1>
      <p>user: {WebApp.initDataUnsafe.user?.first_name}</p>
      <button onClick={handleClick}>send and close</button>
    </div>
  );
}

export default App;
