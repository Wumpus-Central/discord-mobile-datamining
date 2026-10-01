// === Module 12544: ? ===

// Module 12544
import _mod12543 from "module_12543" /* 12543 */;
import _mod12545 from "module_12545" /* 12545 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12543.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12545.getStackAsyncContextStrategy();
    const tmpResult = _mod12545;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12543.getMainCarrier();
  _mod12543.getSentryCarrier(mainCarrier).acs = acs;
};