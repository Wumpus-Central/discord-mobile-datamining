// === Module 12608: ? ===

// Module 12608
import _mod12607 from "module_12607" /* 12607 */;
import _mod12609 from "module_12609" /* 12609 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12607.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12609.getStackAsyncContextStrategy();
    const tmpResult = _mod12609;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12607.getMainCarrier();
  _mod12607.getSentryCarrier(mainCarrier).acs = acs;
};