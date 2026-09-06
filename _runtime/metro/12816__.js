// === Module 12816: ? ===

// Module 12816
import _mod12815 from "module_12815" /* 12815 */;
import _mod12817 from "module_12817" /* 12817 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod12815.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12817.getStackAsyncContextStrategy();
    const tmpResult = _mod12817;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12815.getMainCarrier();
  _mod12815.getSentryCarrier(mainCarrier).acs = acs;
};