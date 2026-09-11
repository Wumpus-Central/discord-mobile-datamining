// === Module 12909: ? ===

// Module 12909
import _mod12908 from "module_12908" /* 12908 */;
import _mod12910 from "module_12910" /* 12910 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12908.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12910.getStackAsyncContextStrategy();
    const tmpResult = _mod12910;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12908.getMainCarrier();
  _mod12908.getSentryCarrier(mainCarrier).acs = acs;
};