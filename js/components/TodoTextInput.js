var React = require('react');
var TodoActions = require('../actions/TodoActions');

var Header = React.createClass({

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  render: function () {
    return (
        <div>
          <input type="text" value={this.state.value} placeholder="New todo"
                 onChange={this._onChange} onBlur={this._save} />
        </div>
    )
  },

  _onChange: function (event) {
    this.setState({value: event.target.value});
  },

  _save: function (event) {
    this.props.onSave(event.target.value);
    this.setState({value: ''});
  }
});

module.exports = Header;