var React = require('react'),
    Search = require('./search'),
    Project = require('./project'),
    ProjectList = require('./projectlist');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var App = React.createClass({
  render() {
    return (
      <div>
        <div className="nav">
          <strong>&raquo;</strong> Projects &middot;
        </div>
        <div>
          <ProjectList />
        </div>
      </div>
    );
  }
});

module.exports = App;
