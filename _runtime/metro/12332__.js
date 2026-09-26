// === Module 12332: ? ===

// Module 12332
import _mod12331 from "module_12331" /* 12331 */;
import _mod12333 from "module_12333" /* 12333 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12331.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12333.getStackAsyncContextStrategy();
    const tmpResult = _mod12333;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12331.getMainCarrier();
  _mod12331.getSentryCarrier(mainCarrier).acs = acs;
};