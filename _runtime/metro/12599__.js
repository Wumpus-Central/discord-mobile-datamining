// _runtime/metro/12599__.js
import _mod12598 from "12598__.js";
import _mod12600 from "12600__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12598.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12600.getStackAsyncContextStrategy();
    const tmpResult = _mod12600;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12598.getMainCarrier();
  _mod12598.getSentryCarrier(mainCarrier).acs = acs;
};
