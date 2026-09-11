// _runtime/metro/12909__.js
import _mod12908 from "12908__.js";
import _mod12910 from "12910__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12908.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12910.getStackAsyncContextStrategy();
    const tmpResult = _mod12910;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12908.getMainCarrier();
  _mod12908.getSentryCarrier(mainCarrier).acs = acs;
};
