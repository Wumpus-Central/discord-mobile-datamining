// _runtime/07394_getAsyncContextStrategy.js
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require("07393_getMainCarrier.js") /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require("07395_withScope.js") /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require("07395_withScope.js") /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require("07393_getMainCarrier.js") /* getMainCarrier */.getMainCarrier();
  const obj = require("07393_getMainCarrier.js") /* getMainCarrier */;
  require("07393_getMainCarrier.js") /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};