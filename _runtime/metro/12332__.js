// _runtime/metro/12332__.js
import _mod12331 from "12331__.js";
import _mod12333 from "12333__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12331.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12333.getStackAsyncContextStrategy();
    const tmpResult = _mod12333;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12331.getMainCarrier();
  _mod12331.getSentryCarrier(mainCarrier).acs = acs;
};
