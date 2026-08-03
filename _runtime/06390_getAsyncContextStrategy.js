const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(6389) /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(6391) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(6391) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(6389) /* getMainCarrier */.getMainCarrier();
  const obj = require(6389) /* getMainCarrier */;
  require(6389) /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};