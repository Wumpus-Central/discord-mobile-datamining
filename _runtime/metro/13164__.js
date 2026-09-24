// === Module 13164: ? ===

// Module 13164
import _mod13163 from "module_13163" /* 13163 */;
import _mod13165 from "module_13165" /* 13165 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13163.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13165.getStackAsyncContextStrategy();
    const tmpResult = _mod13165;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13163.getMainCarrier();
  _mod13163.getSentryCarrier(mainCarrier).acs = acs;
};