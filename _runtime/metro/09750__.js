// === Module 9750: ? ===

// Module 9750
import _mod9749 from "module_9749" /* 9749 */;
import _mod9751 from "module_9751" /* 9751 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod9749.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod9751.getStackAsyncContextStrategy();
    const tmpResult = _mod9751;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod9749.getMainCarrier();
  _mod9749.getSentryCarrier(mainCarrier).acs = acs;
}