var mcs = require('mcsjs');

var myApp = mcs.register({
  deviceId: 'D6FX6mWY',
  deviceKey: 'ddc980Olze0fjw6E',
  host: 'mqtt.mcs.mediatek.io',
  method: 'mqtt',
  port: 1883,
  qos: 0,
});

myApp.on('switch', function(data) {
  console.log(data);
});

setTimeout(function() {
  myApp.emit('integer','', 10000);
}, 5000)
