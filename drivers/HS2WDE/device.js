
'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { Cluster, debug, CLUSTER } = require('zigbee-clusters');
const HeimanSpecificCluster = require('../../lib/HeimanSpecificCluster')

Cluster.addCluster(HeimanSpecificCluster);

class HS2WDE extends ZigBeeDevice {

  async onNodeInit({ zclNode }) {
    this.enableDebug(); // only for debugging purposes
    this.printNode(); // only for debugging purposes
    // Register measure_battery capability and configure attribute reporting
    this.batteryThreshold = 20;
    this.registerCapability('alarm_battery', CLUSTER.POWER_CONFIGURATION, {
      getOpts: {
        getOnStart: true,
      },
      reportOpts: {
        configureAttributeReporting: {
          minInterval: 0, // No minimum reporting interval
          maxInterval: 60000, // Maximally every ~16 hours
          minChange: 5, // Report when value changed by 5
        },
      },
    });
	
	
  }
  
}

module.exports = HS2WDE;