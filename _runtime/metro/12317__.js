// _runtime/metro/12317__.js
import _mod12316 from "12316__.js";
import _mod12318 from "12318__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12316.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12318.getStackAsyncContextStrategy();
    const tmpResult = _mod12318;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12316.getMainCarrier();
  _mod12316.getSentryCarrier(mainCarrier).acs = acs;
};
