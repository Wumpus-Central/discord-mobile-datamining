// _runtime/metro/13058__.js
import _mod13057 from "13057__.js";
import _mod13059 from "13059__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13057.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13059.getStackAsyncContextStrategy();
    const tmpResult = _mod13059;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13057.getMainCarrier();
  _mod13057.getSentryCarrier(mainCarrier).acs = acs;
};
