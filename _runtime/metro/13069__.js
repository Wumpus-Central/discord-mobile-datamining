// === Module 13069: ? ===

// Module 13069
import _mod13068 from "module_13068" /* 13068 */;
import _mod13070 from "module_13070" /* 13070 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13068.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13070.getStackAsyncContextStrategy();
    const tmpResult = _mod13070;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13068.getMainCarrier();
  _mod13068.getSentryCarrier(mainCarrier).acs = acs;
};