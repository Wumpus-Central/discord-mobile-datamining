// _runtime/metro/13292__.js
import _mod13291 from "13291__.js";
import _mod13293 from "13293__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13291.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13293.getStackAsyncContextStrategy();
    const tmpResult = _mod13293;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13291.getMainCarrier();
  _mod13291.getSentryCarrier(mainCarrier).acs = acs;
}
