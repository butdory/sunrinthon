import React from 'react';

import Main from './components/page/Main';
import Notice from './components/page/Notice';
import Update from './components/page/Update';
import Event from './components/page/Event';
import WorldView from './components/page/WorldView';
import Class from './components/page/Class';
import Contents from './components/page/Contents';
import GameGuide from './components/page/GameGuide';
import ItemDictionary from './components/page/ItemDictionary';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div>      
    <Router>
      <Routes>
        <Route exact path='/' element={ <Main /> }/>
        <Route exact path='/Notice' element={ <Notice /> }/>
        <Route exact path='/Update' element={ <Update /> }/>
        <Route exact path='/Event' element={ <Event /> }/>
        <Route exact path='/WorldView' element={ <WorldView /> }/>
        <Route exact path='/Class' element={ <Class /> }/>
        <Route exact path='/Contents' element={ <Contents /> }/>
        <Route exact path='/GameGuide' element={ <GameGuide /> }/>
        <Route exact path='/ItemDictionary' element={ <ItemDictionary /> }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
