const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(825) /* getGlobalSingleton */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(842) /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require(842) /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(825) /* getGlobalSingleton */.getMainCarrier();
  const obj = require(825) /* getGlobalSingleton */;
  require(825) /* getGlobalSingleton */.getSentryCarrier(mainCarrier).acs = acs;
};