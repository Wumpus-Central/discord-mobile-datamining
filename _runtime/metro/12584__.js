// _runtime/metro/12584__.js
import _mod12583 from "12583__.js";
import _mod12585 from "12585__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12583.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12585.getStackAsyncContextStrategy();
    const tmpResult = _mod12585;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12583.getMainCarrier();
  _mod12583.getSentryCarrier(mainCarrier).acs = acs;
};
