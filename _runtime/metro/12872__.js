// === Module 12872: ? ===

// Module 12872
import _mod12871 from "module_12871" /* 12871 */;
import _mod12873 from "module_12873" /* 12873 */;

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12871.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12873.getStackAsyncContextStrategy();
    const tmpResult = _mod12873;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12871.getMainCarrier();
  _mod12871.getSentryCarrier(mainCarrier).acs = acs;
}