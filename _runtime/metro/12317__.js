// === Module 12317: ? ===

// Module 12317
import _mod12316 from "module_12316" /* 12316 */;
import _mod12318 from "module_12318" /* 12318 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12316.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12318.getStackAsyncContextStrategy();
    const tmpResult = _mod12318;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12316.getMainCarrier();
  _mod12316.getSentryCarrier(mainCarrier).acs = acs;
};