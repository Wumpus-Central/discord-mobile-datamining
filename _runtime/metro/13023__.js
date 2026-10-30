// === Module 13023: ? ===

// Module 13023
import _mod13022 from "module_13022" /* 13022 */;
import _mod13024 from "module_13024" /* 13024 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13022.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13024.getStackAsyncContextStrategy();
    const tmpResult = _mod13024;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13022.getMainCarrier();
  _mod13022.getSentryCarrier(mainCarrier).acs = acs;
}