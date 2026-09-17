// === Module 12967: ? ===

// Module 12967
import _mod12966 from "module_12966" /* 12966 */;
import _mod12968 from "module_12968" /* 12968 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12966.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12968.getStackAsyncContextStrategy();
    const tmpResult = _mod12968;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12966.getMainCarrier();
  _mod12966.getSentryCarrier(mainCarrier).acs = acs;
};