// === Module 13209: ? ===

// Module 13209
import _mod13208 from "module_13208" /* 13208 */;
import _mod13210 from "module_13210" /* 13210 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13208.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13210.getStackAsyncContextStrategy();
    const tmpResult = _mod13210;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13208.getMainCarrier();
  _mod13208.getSentryCarrier(mainCarrier).acs = acs;
}