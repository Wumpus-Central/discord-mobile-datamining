// _runtime/metro/12945__.js
import _mod12944 from "12944__.js";
import _mod12946 from "12946__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12944.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12946.getStackAsyncContextStrategy();
    const tmpResult = _mod12946;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12944.getMainCarrier();
  _mod12944.getSentryCarrier(mainCarrier).acs = acs;
};
