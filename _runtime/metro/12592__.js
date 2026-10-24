// === Module 12592: ? ===

// Module 12592
import _mod12591 from "module_12591" /* 12591 */;
import _mod12593 from "module_12593" /* 12593 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12591.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12593.getStackAsyncContextStrategy();
    const tmpResult = _mod12593;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12591.getMainCarrier();
  _mod12591.getSentryCarrier(mainCarrier).acs = acs;
};