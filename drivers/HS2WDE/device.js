
'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { Cluster, debug, CLUSTER } = require('zigbee-clusters');
const HeimanSpecificCluster = require('../../lib/HeimanSpecificCluster')

Cluster.addCluster(HeimanSpecificCluster);

class HS2WDE extends ZigBeeDevice {

  async onNodeInit({ zclNode }) {
    this.enableDebug(); // only for debugging purposes
    this.printNode(); // only for debugging purposes
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

    this.registerCapability('measure_battery', CLUSTER.POWER_CONFIGURATION, {
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