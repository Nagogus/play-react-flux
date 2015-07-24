var TodoItem = require('./TodoItem');
var TodoActions = require('../actions/TodoActions');
var React = require('react');


var TodoList = React.createClass({

  propTypes: {
    todos: React.PropTypes.object.isRequired
  },

  render: function () {
    var todoItems = [],
        todos = this.props.todos;

    for (var key in todos) {
      todoItems.push(<TodoItem key={key} todo={todos[key]}></TodoItem>);
    }

    return (
        <ul>{todoItems}</ul>
    );
  }
});

module.exports = TodoList;