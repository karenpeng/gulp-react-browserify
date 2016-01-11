'use strict';

var React = require('react');

var Item = React.createClass({
  displayName: 'Item',

  propTypes:{
    content: React.PropTypes.string
  },

  getDefaultProps: function(){
    return{

    }
  },

  getInitialState: function(){
    return{

    }
  },

  render: function(){

    return <p>{this.props.content}</p>

  }
});

module.exports = Item;