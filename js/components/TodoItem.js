var React = require('react');
var TodoActions = require('../actions/TodoActions');

var TodoItem = React.createClass({
  render: function () {
    var todo = this.props.todo;
    return (<li key={todo.id}><input type="checkbox" checked={todo.complete} onChange={this._onChange} />{todo.text}</li>);
  },

  _onChange: function () {
    TodoActions.toggleComplete(this.props.todo);
  }
});

module.exports = TodoItem;