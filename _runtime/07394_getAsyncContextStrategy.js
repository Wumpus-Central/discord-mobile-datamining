import { getMainCarrier } from "07393_getMainCarrier.js";
import { withScope } from "07395_withScope.js";
// _runtime/07394_getAsyncContextStrategy.js
const require = arg1;
const dependencyMap = arg6;
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = getMainCarrier /* getMainCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = withScope /* withScope */.getStackAsyncContextStrategy();
    const tmpResult = withScope /* withScope */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = getMainCarrier /* getMainCarrier */.getMainCarrier();
  const obj = getMainCarrier /* getMainCarrier */;
  getMainCarrier /* getMainCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};