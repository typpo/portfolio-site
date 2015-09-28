var React = require('react');

var Project = React.createClass({
  render() {
    return (
      <div className="project flex-item-default">
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.desc}</p>
      </div>
    );
  },
});

module.exports = Project;
