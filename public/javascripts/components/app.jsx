var React = require('react'),
    Search = require('./search'),
    Project = require('./project'),
    ProjectList = require('./projectlist');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
// FIXME
//import { Link } from 'react-router'

var App = React.createClass({
  render() {
    return (
      <div>
        <div className="nav">
          <strong>&raquo;</strong> Projects &middot;
          <Link to="/talks">Talks</Link> &middot;
          <Link to="/press">Press</Link>
          {this.props.children}
        </div>
        <div>
          <ProjectList />
        </div>
      </div>
    );
  }
});

module.exports = App;
