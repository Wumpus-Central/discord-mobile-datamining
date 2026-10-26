// _runtime/metro/12600__.js
import _mod12599 from "12599__.js";
import _mod12601 from "12601__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12599.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12601.getStackAsyncContextStrategy();
    const tmpResult = _mod12601;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12599.getMainCarrier();
  _mod12599.getSentryCarrier(mainCarrier).acs = acs;
};
