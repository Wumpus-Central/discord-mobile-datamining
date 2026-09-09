// _runtime/metro/12846__.js
import _mod12845 from "12845__.js";
import _mod12847 from "12847__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12845.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12847.getStackAsyncContextStrategy();
    const tmpResult = _mod12847;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12845.getMainCarrier();
  _mod12845.getSentryCarrier(mainCarrier).acs = acs;
};
