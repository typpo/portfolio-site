var React = require('react'),
    App = React.createFactory(require('components/app'));

import { Router, Route, Link } from 'react-router'
import ProjectList from 'components/projectlist'
import TalkList from 'components/talklist'

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render((
      <Router>
        <Route path="/" component={App}>
          <Route path="*" component={ProjectList} />
          <Route path="talks" component={TalkList} />
          <Route path="press" component={TalkList} />
        </Route>
      </Router>
    ), document.getElementById('content'));
  };
}
