// _runtime/metro/13311__.js
import _mod13310 from "13310__.js";
import _mod13312 from "13312__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13310.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13312.getStackAsyncContextStrategy();
    const tmpResult = _mod13312;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13310.getMainCarrier();
  _mod13310.getSentryCarrier(mainCarrier).acs = acs;
}
