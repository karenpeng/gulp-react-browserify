'use strict';

var React = require('react');
var Item = require('./item');

var _list = [1,2,3,4,5];

var List = React.createClass({
  displayName: 'List',

  propTypes:{
    
  },

  getDefaultProps: function(){
    return{

    }
  },

  getInitialState: function(){
    return{
      list: _list
    }
  },

  render: function(){

    var listDom = this.state.list.map(function(item, index){
      return <Item key={index} content={item+''}/>
    });
    return <div>{listDom}</div>
  }
});

module.exports = List;