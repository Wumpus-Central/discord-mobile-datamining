// === Module 12599: ? ===

// Module 12599
import _mod12598 from "module_12598" /* 12598 */;
import _mod12600 from "module_12600" /* 12600 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12598.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12600.getStackAsyncContextStrategy();
    const tmpResult = _mod12600;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12598.getMainCarrier();
  _mod12598.getSentryCarrier(mainCarrier).acs = acs;
};