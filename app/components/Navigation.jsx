var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React TimerApp</li>
            <li><IndexLink activeClassName="active-link" to="/">Timer</IndexLink></li>
            <li><Link      activeClassName="active-link" to="/countdown">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com/gwynevans/udemy-react-timer" target="_blank">Gwyn Evans</a></li>
          </ul>
        </div>
      </div>
    );
  }
})

module.exports = Navigation;
