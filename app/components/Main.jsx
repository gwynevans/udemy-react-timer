var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className="columns medium-4 large-3 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
