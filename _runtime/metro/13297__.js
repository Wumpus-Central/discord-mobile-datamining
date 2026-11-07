// _runtime/metro/13297__.js
import _mod13296 from "13296__.js";
import _mod13298 from "13298__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13296.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13298.getStackAsyncContextStrategy();
    const tmpResult = _mod13298;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13296.getMainCarrier();
  _mod13296.getSentryCarrier(mainCarrier).acs = acs;
}
