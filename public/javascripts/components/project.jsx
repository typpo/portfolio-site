var React = require('react');

var Project = React.createClass({
  getInitialState() {
    return {
      hover: false,
    }
  },
  render() {
    var style = {};
    if (this.props.data.imgurl) {
      if (this.state.hover) {
        style['backgroundImage'] = 'url(' + this.props.data.imgurl + ')';
      } else {
        style['backgroundImage'] = 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(' +
                this.props.data.imgurl + ')';
      }
    }
    return (
      <a href={this.props.data.url}>
        <div className="project flex-item-default"
              style={style}
             onMouseOver={this.onMouseOver}
             onMouseOut={this.onMouseOut}>
          <h3 className="title">{this.props.data.title}</h3>
          <div className="desc">{this.props.data.desc}</div>
        </div>
      </a>
    );
  },
  onMouseOver(event) {
    this.setState({
      hover: true,
    });
  },
  onMouseOut(event) {
    this.setState({
      hover: false,
    });
  },
});

module.exports = Project;
