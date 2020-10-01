import React, { useState, useEffect } from 'react';

function App() {

  //EVENT LISTENER
  const [location, setLocation] = useState({});

  useEffect(() => { 
    const watchId = navigator.geolocation.watchPosition();

    //desmonta, willmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({ coords }){
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }
  
  return (
    <div className="App">
      Latitude: { location.latitude } <br/>
      Longitude: { location.longitude }
    </div>
  );
}

export default App;
