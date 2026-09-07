// === Module 12820: ? ===

// Module 12820
import _mod12819 from "module_12819" /* 12819 */;
import _mod12821 from "module_12821" /* 12821 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12819.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12821.getStackAsyncContextStrategy();
    const tmpResult = _mod12821;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12819.getMainCarrier();
  _mod12819.getSentryCarrier(mainCarrier).acs = acs;
};