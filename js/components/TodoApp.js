var React = require('react');

var TodoStore = require('../stores/TodoStore');
var TodoList = require('./TodoList');
var TodoItem = require('./TodoItem');
var Header = require('./Header');
var Footer = require('./Footer');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll()
  };
}


var TodoApp = React.createClass({

  getInitialState: function () {
    return getTodoState();
  },

  componentDidMount: function () {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    TodoStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
        <section id="todo-app">
          <Header />
          <TodoList todos={this.state.allTodos}></TodoList>
          <Footer todos={this.state.allTodos} />
        </section>);
  },

  _onChange: function () {
    this.setState(getTodoState());
  }
});

module.exports = TodoApp;