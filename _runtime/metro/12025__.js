// === Module 12025: ? ===

// Module 12025
import _mod12024 from "module_12024" /* 12024 */;
import _mod12026 from "module_12026" /* 12026 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12024.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12026.getStackAsyncContextStrategy();
    const tmpResult = _mod12026;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12024.getMainCarrier();
  _mod12024.getSentryCarrier(mainCarrier).acs = acs;
};