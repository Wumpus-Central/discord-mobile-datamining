// _runtime/metro/12405__.js
import _mod12404 from "12404__.js";
import _mod12406 from "12406__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12404.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12406.getStackAsyncContextStrategy();
    const tmpResult = _mod12406;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12404.getMainCarrier();
  _mod12404.getSentryCarrier(mainCarrier).acs = acs;
};
