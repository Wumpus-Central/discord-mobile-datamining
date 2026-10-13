// _runtime/metro/12025__.js
import _mod12024 from "12024__.js";
import _mod12026 from "12026__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12024.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12026.getStackAsyncContextStrategy();
    const tmpResult = _mod12026;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12024.getMainCarrier();
  _mod12024.getSentryCarrier(mainCarrier).acs = acs;
};
