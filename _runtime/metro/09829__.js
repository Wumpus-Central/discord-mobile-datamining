// === Module 9829: ? ===

// Module 9829
import _mod9828 from "module_9828" /* 9828 */;
import _mod9830 from "module_9830" /* 9830 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod9828.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod9830.getStackAsyncContextStrategy();
    const tmpResult = _mod9830;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod9828.getMainCarrier();
  _mod9828.getSentryCarrier(mainCarrier).acs = acs;
}