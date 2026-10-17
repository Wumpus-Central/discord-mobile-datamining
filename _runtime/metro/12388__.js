// === Module 12388: ? ===

// Module 12388
import _mod12387 from "module_12387" /* 12387 */;
import _mod12389 from "module_12389" /* 12389 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12387.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12389.getStackAsyncContextStrategy();
    const tmpResult = _mod12389;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12387.getMainCarrier();
  _mod12387.getSentryCarrier(mainCarrier).acs = acs;
};