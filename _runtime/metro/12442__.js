// === Module 12442: ? ===

// Module 12442
import _mod12441 from "module_12441" /* 12441 */;
import _mod12443 from "module_12443" /* 12443 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12441.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12443.getStackAsyncContextStrategy();
    const tmpResult = _mod12443;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12441.getMainCarrier();
  _mod12441.getSentryCarrier(mainCarrier).acs = acs;
};