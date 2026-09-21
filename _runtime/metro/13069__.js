// _runtime/metro/13069__.js
import _mod13068 from "13068__.js";
import _mod13070 from "13070__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13068.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13070.getStackAsyncContextStrategy();
    const tmpResult = _mod13070;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13068.getMainCarrier();
  _mod13068.getSentryCarrier(mainCarrier).acs = acs;
};
