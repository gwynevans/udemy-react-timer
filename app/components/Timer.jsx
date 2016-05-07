var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  render: function () {
    return (
      <div>
        <p>Timer.jsx</p>
          <Clock totalSeconds={10}/>
      </div>
    );
  }
});

module.exports = Timer;
