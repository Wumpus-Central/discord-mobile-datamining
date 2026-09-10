// _runtime/metro/12886__.js
import _mod12885 from "12885__.js";
import _mod12887 from "12887__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12885.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12887.getStackAsyncContextStrategy();
    const tmpResult = _mod12887;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12885.getMainCarrier();
  _mod12885.getSentryCarrier(mainCarrier).acs = acs;
};
