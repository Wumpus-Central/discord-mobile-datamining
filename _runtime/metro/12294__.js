// === Module 12294: ? ===

// Module 12294
import _mod12293 from "module_12293" /* 12293 */;
import _mod12295 from "module_12295" /* 12295 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12293.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12295.getStackAsyncContextStrategy();
    const tmpResult = _mod12295;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12293.getMainCarrier();
  _mod12293.getSentryCarrier(mainCarrier).acs = acs;
};