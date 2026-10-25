// === Module 12597: ? ===

// Module 12597
import _mod12596 from "module_12596" /* 12596 */;
import _mod12598 from "module_12598" /* 12598 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12596.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12598.getStackAsyncContextStrategy();
    const tmpResult = _mod12598;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12596.getMainCarrier();
  _mod12596.getSentryCarrier(mainCarrier).acs = acs;
};