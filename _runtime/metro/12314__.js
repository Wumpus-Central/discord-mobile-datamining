// === Module 12314: ? ===

// Module 12314
import _mod12313 from "module_12313" /* 12313 */;
import _mod12315 from "module_12315" /* 12315 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12313.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12315.getStackAsyncContextStrategy();
    const tmpResult = _mod12315;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12313.getMainCarrier();
  _mod12313.getSentryCarrier(mainCarrier).acs = acs;
};