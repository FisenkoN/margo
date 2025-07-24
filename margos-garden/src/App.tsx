import { useState } from 'react';
import Intro from './components/Intro';
import CitySelect from './components/CitySelect';

type Screen = 'intro' | 'city';

function App() {
  const [screen, setScreen] = useState<Screen>('intro');

  return (
    <>
      {screen === 'intro' && <Intro onNext={() => setScreen('city')} />}
      {screen === 'city' && (
        <CitySelect onSelect={() => console.log('місто вибрано')} />
      )}
    </>
  );
}

export default App;
