// _runtime/metro/12323__.js
import _mod12322 from "12322__.js";
import _mod12324 from "12324__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12322.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12324.getStackAsyncContextStrategy();
    const tmpResult = _mod12324;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12322.getMainCarrier();
  _mod12322.getSentryCarrier(mainCarrier).acs = acs;
};
