// _runtime/metro/12294__.js
import _mod12293 from "12293__.js";
import _mod12295 from "12295__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12293.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12295.getStackAsyncContextStrategy();
    const tmpResult = _mod12295;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12293.getMainCarrier();
  _mod12293.getSentryCarrier(mainCarrier).acs = acs;
};
