// _runtime/metro/13274__.js
import _mod13273 from "13273__.js";
import _mod13275 from "13275__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13273.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13275.getStackAsyncContextStrategy();
    const tmpResult = _mod13275;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13273.getMainCarrier();
  _mod13273.getSentryCarrier(mainCarrier).acs = acs;
}
