var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should set to zero on stopped status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('stopped');

      expect(timer.state.count).toBe(0);
    });


    it('should count up on started after stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('stopped');
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause timer on pause status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('stopped');
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

  });

});
