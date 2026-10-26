// === Module 12600: ? ===

// Module 12600
import _mod12599 from "module_12599" /* 12599 */;
import _mod12601 from "module_12601" /* 12601 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12599.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12601.getStackAsyncContextStrategy();
    const tmpResult = _mod12601;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12599.getMainCarrier();
  _mod12599.getSentryCarrier(mainCarrier).acs = acs;
};