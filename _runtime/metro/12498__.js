// _runtime/metro/12498__.js
import _mod12497 from "12497__.js";
import _mod12499 from "12499__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12497.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12499.getStackAsyncContextStrategy();
    const tmpResult = _mod12499;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12497.getMainCarrier();
  _mod12497.getSentryCarrier(mainCarrier).acs = acs;
};
