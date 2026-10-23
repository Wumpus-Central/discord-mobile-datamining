// === Module 12558: ? ===

// Module 12558
import _mod12557 from "module_12557" /* 12557 */;
import _mod12559 from "module_12559" /* 12559 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12557.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12559.getStackAsyncContextStrategy();
    const tmpResult = _mod12559;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12557.getMainCarrier();
  _mod12557.getSentryCarrier(mainCarrier).acs = acs;
};