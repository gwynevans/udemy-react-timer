var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  render: function () {
    return (
      <div>
        <p>Timer.jsx</p>
          <Clock totalSeconds={10}/>
          <Controls countdownStatus="started"/>
      </div>
    );
  }
});

module.exports = Timer;
