var React = require('react');
var TodoTextInput = require('../components/TodoTextInput');
var TodoActions = require('../actions/TodoActions');

var Header = React.createClass({
  render: function () {
    return (
        <header>
          <h1>Todos</h1>
          <TodoTextInput onSave={this._onSave}></TodoTextInput>
        </header>
    )
  },

  _onSave: function (text) {
    TodoActions.create(text);
  }
});

module.exports = Header;