// _runtime/07539_getAsyncContextStrategy.js
import { getMainCarrier } from "07538_getMainCarrier.js";
import { withScope } from "07540_withScope.js";
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = getMainCarrier.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = withScope.getStackAsyncContextStrategy();
    const tmpResult = withScope;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = getMainCarrier.getMainCarrier();
  const obj = getMainCarrier;
  getMainCarrier.getSentryCarrier(mainCarrier).acs = acs;
};