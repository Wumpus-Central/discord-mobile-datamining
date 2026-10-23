// === Module 12539: ? ===

// Module 12539
import _mod12538 from "module_12538" /* 12538 */;
import _mod12540 from "module_12540" /* 12540 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12538.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12540.getStackAsyncContextStrategy();
    const tmpResult = _mod12540;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12538.getMainCarrier();
  _mod12538.getSentryCarrier(mainCarrier).acs = acs;
};