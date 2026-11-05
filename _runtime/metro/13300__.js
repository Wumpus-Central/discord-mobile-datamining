// === Module 13300: ? ===

// Module 13300
import _mod13299 from "module_13299" /* 13299 */;
import _mod13301 from "module_13301" /* 13301 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13299.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13301.getStackAsyncContextStrategy();
    const tmpResult = _mod13301;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13299.getMainCarrier();
  _mod13299.getSentryCarrier(mainCarrier).acs = acs;
}