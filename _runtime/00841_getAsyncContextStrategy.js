// _runtime/00841_getAsyncContextStrategy.js
import getGlobalSingleton from "00825_getGlobalSingleton.js";
import withScope from "00842_withScope.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = getGlobalSingleton.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = withScope.getStackAsyncContextStrategy();
    const tmpResult = withScope;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = getGlobalSingleton.getMainCarrier();
  const obj = getGlobalSingleton;
  getGlobalSingleton.getSentryCarrier(mainCarrier).acs = acs;
};