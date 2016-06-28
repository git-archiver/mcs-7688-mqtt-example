var mcs = require('mcsjs');

var myApp = mcs.register({
  deviceId: 'Input your deviceId',
  deviceKey: 'Input your deviceKey',
  host: 'mqtt.mcs.mediatek.com',
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
