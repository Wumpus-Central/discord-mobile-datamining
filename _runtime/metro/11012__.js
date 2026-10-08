// === Module 11012: ? ===

// Module 11012
import _mod11011 from "module_11011" /* 11011 */;
import _mod11013 from "module_11013" /* 11013 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod11011.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod11013.getStackAsyncContextStrategy();
    const tmpResult = _mod11013;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod11011.getMainCarrier();
  _mod11011.getSentryCarrier(mainCarrier).acs = acs;
};