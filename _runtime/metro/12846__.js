// === Module 12846: ? ===

// Module 12846
import _mod12845 from "module_12845" /* 12845 */;
import _mod12847 from "module_12847" /* 12847 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12845.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12847.getStackAsyncContextStrategy();
    const tmpResult = _mod12847;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12845.getMainCarrier();
  _mod12845.getSentryCarrier(mainCarrier).acs = acs;
};