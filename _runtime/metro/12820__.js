// _runtime/metro/12820__.js
import _mod12819 from "12819__.js";
import _mod12821 from "12821__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12819.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12821.getStackAsyncContextStrategy();
    const tmpResult = _mod12821;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12819.getMainCarrier();
  _mod12819.getSentryCarrier(mainCarrier).acs = acs;
};
