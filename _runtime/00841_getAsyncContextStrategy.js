// _runtime/00841_getAsyncContextStrategy.js
import getGlobalSingleton from "getGlobalSingleton" /* 825 */;
import withScope from "withScope" /* 842 */;

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