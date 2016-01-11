'use strict';

var React = require('react');
var List = require('./list');
var InputBox = require('./InputBox')

var App = React.createClass({
  displayName: 'App',

  render: function(){

    return(
      <div>
        <InputBox/>
        <List/>
      </div>
    )
  }

});

module.exports = App;