// _runtime/metro/09816__.js
import _mod9815 from "09815__.js";
import _mod9817 from "09817__.js";

require = arg1;
const dependencyMap = arg6;

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod9815.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod9817.getStackAsyncContextStrategy();
    const tmpResult = _mod9817;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod9815.getMainCarrier();
  _mod9815.getSentryCarrier(mainCarrier).acs = acs;
}
