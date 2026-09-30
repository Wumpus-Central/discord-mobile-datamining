// _runtime/metro/12533__.js
import _mod12532 from "12532__.js";
import _mod12534 from "12534__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12532.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12534.getStackAsyncContextStrategy();
    const tmpResult = _mod12534;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12532.getMainCarrier();
  _mod12532.getSentryCarrier(mainCarrier).acs = acs;
};
