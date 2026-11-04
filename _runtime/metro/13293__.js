// === Module 13293: ? ===

// Module 13293
import _mod13292 from "module_13292" /* 13292 */;
import _mod13294 from "module_13294" /* 13294 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13292.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13294.getStackAsyncContextStrategy();
    const tmpResult = _mod13294;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13292.getMainCarrier();
  _mod13292.getSentryCarrier(mainCarrier).acs = acs;
}