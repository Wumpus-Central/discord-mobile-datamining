// _runtime/metro/12503__.js
import _mod12502 from "12502__.js";
import _mod12504 from "12504__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12502.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12504.getStackAsyncContextStrategy();
    const tmpResult = _mod12504;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12502.getMainCarrier();
  _mod12502.getSentryCarrier(mainCarrier).acs = acs;
};
