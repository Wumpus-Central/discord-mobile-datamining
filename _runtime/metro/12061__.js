// === Module 12061: ? ===

// Module 12061
import _mod12060 from "module_12060" /* 12060 */;
import _mod12062 from "module_12062" /* 12062 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12060.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12062.getStackAsyncContextStrategy();
    const tmpResult = _mod12062;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12060.getMainCarrier();
  _mod12060.getSentryCarrier(mainCarrier).acs = acs;
};