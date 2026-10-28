// _runtime/metro/12655__.js
import _mod12654 from "12654__.js";
import _mod12656 from "12656__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12654.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12656.getStackAsyncContextStrategy();
    const tmpResult = _mod12656;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12654.getMainCarrier();
  _mod12654.getSentryCarrier(mainCarrier).acs = acs;
};
