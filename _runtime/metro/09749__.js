// _runtime/metro/09749__.js
import _mod9748 from "09748__.js";
import _mod9750 from "09750__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod9748.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod9750.getStackAsyncContextStrategy();
    const tmpResult = _mod9750;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod9748.getMainCarrier();
  _mod9748.getSentryCarrier(mainCarrier).acs = acs;
}
