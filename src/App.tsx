import { createContext } from 'react';
import * as React from 'react';

import { NewRoom } from './pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { useState } from 'react';

export const TesteContext = createContext({} as any);

function App() {

  const [value, setValue] = useState('Teste');

  return (
    <BrowserRouter>
      <TesteContext.Provider value={{ value, setValue }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TesteContext.Provider>

    </BrowserRouter>
  );
}

export default App;
