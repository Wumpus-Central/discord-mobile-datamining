// === Module 13311: ? ===

// Module 13311
import _mod13310 from "module_13310" /* 13310 */;
import _mod13312 from "module_13312" /* 13312 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13310.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13312.getStackAsyncContextStrategy();
    const tmpResult = _mod13312;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13310.getMainCarrier();
  _mod13310.getSentryCarrier(mainCarrier).acs = acs;
}