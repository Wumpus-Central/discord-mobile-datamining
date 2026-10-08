// _runtime/metro/11012__.js
import _mod11011 from "11011__.js";
import _mod11013 from "11013__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod11011.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod11013.getStackAsyncContextStrategy();
    const tmpResult = _mod11013;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod11011.getMainCarrier();
  _mod11011.getSentryCarrier(mainCarrier).acs = acs;
};
