import React from 'react';
import { Router, Route } from 'react-router'
import { App, ProjectList, TalkList }

export default (
  <Router>
    <Route path="/" component={App}>
      <Route path="*" component={ProjectList} />
      <Route path="talks" component={TalkList} />
      <Route path="press" component={TalkList} />
    </Route>
  </Router>
)
