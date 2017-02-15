var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;
    return (
      <h3>The temperature in {location} is {temp} degrees.</h3>
    )
  }
})

var WeatherMessage = props => {
  var {temp, location} = props;
  return (
    <h3 className="text-center">The temperature in {location} is {temp} degrees.</h3>
  )
};


module.exports = WeatherMessage;
