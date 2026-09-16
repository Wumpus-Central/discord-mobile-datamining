// _runtime/metro/12959__.js
import _mod12958 from "12958__.js";
import _mod12960 from "12960__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12958.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12960.getStackAsyncContextStrategy();
    const tmpResult = _mod12960;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12958.getMainCarrier();
  _mod12958.getSentryCarrier(mainCarrier).acs = acs;
};
