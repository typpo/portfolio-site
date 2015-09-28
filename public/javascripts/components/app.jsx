var React = require('react'),
    Search = require('./search'),
    Project = require('./project'),
    ProjectList = require('./projectlist');

var App = React.createClass({
  render() {
    return (
      <div>
        <ProjectList />
      </div>
    );
  }
});

module.exports = App;
