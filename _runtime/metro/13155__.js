// === Module 13155: ? ===

// Module 13155
import _mod13154 from "module_13154" /* 13154 */;
import _mod13156 from "module_13156" /* 13156 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13154.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13156.getStackAsyncContextStrategy();
    const tmpResult = _mod13156;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13154.getMainCarrier();
  _mod13154.getSentryCarrier(mainCarrier).acs = acs;
};