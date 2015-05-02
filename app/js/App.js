'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var RouteHandler = require('react-router').RouteHandler;

var Header = require('./components/Header');
var Footer = require('./components/Footer');

var App = React.createClass({
  getInitialState: function() {
    return {
      message: 'world'
    };
  },
  render: function() {
    return (
      <div>
        <Header />
        Hello {this.state.message}
        <RouteHandler params={this.props.params} query={this.props.query} />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
