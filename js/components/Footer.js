var React = require('react');

var Footer = React.createClass({

  propTypes: {
    todos: React.PropTypes.object.isRequired
  },
  render: function () {
    var todos = this.props.todos,
        completed = 0,
        all = Object.keys(todos).length;

    for (var key in todos) {
      if (todos[key].complete) completed++;
    }
    return (
        <div>{completed} / {all}</div>);
    }
});

module.exports = Footer;