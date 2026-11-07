// === Module 13297: ? ===

// Module 13297
import _mod13296 from "module_13296" /* 13296 */;
import _mod13298 from "module_13298" /* 13298 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13296.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13298.getStackAsyncContextStrategy();
    const tmpResult = _mod13298;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13296.getMainCarrier();
  _mod13296.getSentryCarrier(mainCarrier).acs = acs;
}