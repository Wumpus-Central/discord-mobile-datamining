// _runtime/metro/11227__.js
import _mod11226 from "11226__.js";
import _mod11228 from "11228__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod11226.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod11228.getStackAsyncContextStrategy();
    const tmpResult = _mod11228;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod11226.getMainCarrier();
  _mod11226.getSentryCarrier(mainCarrier).acs = acs;
};
