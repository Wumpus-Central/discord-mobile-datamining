// === Module 9749: ? ===

// Module 9749
import _mod9748 from "module_9748" /* 9748 */;
import _mod9750 from "module_9750" /* 9750 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod9748.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod9750.getStackAsyncContextStrategy();
    const tmpResult = _mod9750;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod9748.getMainCarrier();
  _mod9748.getSentryCarrier(mainCarrier).acs = acs;
}