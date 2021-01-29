import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import Title from './Title';

import{ BrowserRouter, Route, Switch }from'react-router-dom';


//ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

ReactDOM.render(
<BrowserRouter>
  <main>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/title/:movieID" component={Title}/>
      <Route component={Error}/>
    </Switch>
  </main>
</BrowserRouter>,   
document.getElementById('root')
);
