// === Module 7382: getAsyncContextStrategy ===

// Module 7382 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(7381) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(7383) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(7383) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(7381) /* getMainCarrier */.getMainCarrier();
  const obj = require(7381) /* getMainCarrier */;
  require(7381) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};