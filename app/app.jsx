var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

// React Router
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  // <Router history={hashHistory}>
  //   <Route path="/" component={TodoApp}>
  //   </Route>
  // </Router>,
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
