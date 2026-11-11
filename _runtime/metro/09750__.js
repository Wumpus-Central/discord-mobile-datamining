// _runtime/metro/09750__.js
import _mod9749 from "09749__.js";
import _mod9751 from "09751__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod9749.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod9751.getStackAsyncContextStrategy();
    const tmpResult = _mod9751;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod9749.getMainCarrier();
  _mod9749.getSentryCarrier(mainCarrier).acs = acs;
}
