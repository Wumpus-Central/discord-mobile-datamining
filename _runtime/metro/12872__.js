// _runtime/metro/12872__.js
import _mod12871 from "12871__.js";
import _mod12873 from "12873__.js";

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
