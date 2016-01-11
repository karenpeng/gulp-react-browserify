'use strict';

var React = require('react');

var InputBox = React.createClass({
  displayName: 'InputBox',

  propTypes:{
    
  },

  getDefaultProps: function(){
    return{

    }
  },

  getInitialState: function(){
    return{

    }
  },

  handleBur: function(e){
    console.log(e);
  },

  handleFocus: function(e){
    console.log(e);
  },

  render: function(){

    return <input onBlur={this.handleBur} onFocus={this.handleFocus}/>

  }
});

module.exports = InputBox;