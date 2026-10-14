// _runtime/metro/12061__.js
import _mod12060 from "12060__.js";
import _mod12062 from "12062__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12060.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12062.getStackAsyncContextStrategy();
    const tmpResult = _mod12062;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12060.getMainCarrier();
  _mod12060.getSentryCarrier(mainCarrier).acs = acs;
};
