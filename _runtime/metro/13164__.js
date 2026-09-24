// _runtime/metro/13164__.js
import _mod13163 from "13163__.js";
import _mod13165 from "13165__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13163.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13165.getStackAsyncContextStrategy();
    const tmpResult = _mod13165;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13163.getMainCarrier();
  _mod13163.getSentryCarrier(mainCarrier).acs = acs;
};
