// _runtime/metro/13209__.js
import _mod13208 from "13208__.js";
import _mod13210 from "13210__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13208.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13210.getStackAsyncContextStrategy();
    const tmpResult = _mod13210;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13208.getMainCarrier();
  _mod13208.getSentryCarrier(mainCarrier).acs = acs;
}
