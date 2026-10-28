// === Module 12655: ? ===

// Module 12655
import _mod12654 from "module_12654" /* 12654 */;
import _mod12656 from "module_12656" /* 12656 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12654.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12656.getStackAsyncContextStrategy();
    const tmpResult = _mod12656;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12654.getMainCarrier();
  _mod12654.getSentryCarrier(mainCarrier).acs = acs;
};