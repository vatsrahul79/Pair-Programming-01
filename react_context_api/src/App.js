import React from 'react';
import {AppProvider} from './components/AppProvider'
import User from './components/User'

function App() {
  return (
    <AppProvider>
      <User/>
    </AppProvider>
  );
}

export default App;
