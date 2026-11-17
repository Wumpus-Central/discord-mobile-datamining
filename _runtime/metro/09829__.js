// _runtime/metro/09829__.js
import _mod9828 from "09828__.js";
import _mod9830 from "09830__.js";

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
