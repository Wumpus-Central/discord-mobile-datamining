// === Module 13058: ? ===

// Module 13058
import _mod13057 from "module_13057" /* 13057 */;
import _mod13059 from "module_13059" /* 13059 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13057.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13059.getStackAsyncContextStrategy();
    const tmpResult = _mod13059;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13057.getMainCarrier();
  _mod13057.getSentryCarrier(mainCarrier).acs = acs;
};