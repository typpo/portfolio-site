var React = require('react'),
    Search = require('./search'),
    Project = require('./project'),
    ProjectList = require('./projectlist');

var App = React.createClass({
  render() {
    return (
      <div>
        <Search />
        <ProjectList />
      </div>
    );
  }
});

module.exports = App;
