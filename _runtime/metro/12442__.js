// _runtime/metro/12442__.js
import _mod12441 from "12441__.js";
import _mod12443 from "12443__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12441.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12443.getStackAsyncContextStrategy();
    const tmpResult = _mod12443;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12441.getMainCarrier();
  _mod12441.getSentryCarrier(mainCarrier).acs = acs;
};
