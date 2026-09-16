// === Module 12959: ? ===

// Module 12959
import _mod12958 from "module_12958" /* 12958 */;
import _mod12960 from "module_12960" /* 12960 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12958.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12960.getStackAsyncContextStrategy();
    const tmpResult = _mod12960;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12958.getMainCarrier();
  _mod12958.getSentryCarrier(mainCarrier).acs = acs;
};