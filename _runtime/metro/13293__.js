// _runtime/metro/13293__.js
import _mod13292 from "13292__.js";
import _mod13294 from "13294__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13292.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13294.getStackAsyncContextStrategy();
    const tmpResult = _mod13294;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13292.getMainCarrier();
  _mod13292.getSentryCarrier(mainCarrier).acs = acs;
}
