// === Module 12951: ? ===

// Module 12951
import _mod12950 from "module_12950" /* 12950 */;
import _mod12952 from "module_12952" /* 12952 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12950.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12952.getStackAsyncContextStrategy();
    const tmpResult = _mod12952;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12950.getMainCarrier();
  _mod12950.getSentryCarrier(mainCarrier).acs = acs;
};