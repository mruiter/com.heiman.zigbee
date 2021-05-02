'use strict';

const Homey = require('homey');

class HeimanZigbee extends Homey.App {
  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('HeimanZigbee has been initialized');
  }
}

module.exports = HeimanZigbee;