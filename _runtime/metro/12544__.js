// _runtime/metro/12544__.js
import _mod12543 from "12543__.js";
import _mod12545 from "12545__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12543.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12545.getStackAsyncContextStrategy();
    const tmpResult = _mod12545;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12543.getMainCarrier();
  _mod12543.getSentryCarrier(mainCarrier).acs = acs;
};
