import Home from './Components/Cmp-Header/Home'
import React from 'react';  
 


import { Route , Switch} from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route  path="/" component={Home}/>
    </Switch>

  );
}

export default App;
