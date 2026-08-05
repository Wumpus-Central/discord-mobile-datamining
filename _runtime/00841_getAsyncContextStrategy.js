// _runtime/00841_getAsyncContextStrategy.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require("00825_getGlobalSingleton.js") /* getGlobalSingleton */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require("00842_withScope.js") /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = require("00842_withScope.js") /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require("00825_getGlobalSingleton.js") /* getGlobalSingleton */.getMainCarrier();
  const obj = require("00825_getGlobalSingleton.js") /* getGlobalSingleton */;
  require("00825_getGlobalSingleton.js") /* getGlobalSingleton */.getSentryCarrier(mainCarrier).acs = acs;
};