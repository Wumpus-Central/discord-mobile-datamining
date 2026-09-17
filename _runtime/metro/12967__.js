// _runtime/metro/12967__.js
import _mod12966 from "12966__.js";
import _mod12968 from "12968__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12966.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12968.getStackAsyncContextStrategy();
    const tmpResult = _mod12968;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12966.getMainCarrier();
  _mod12966.getSentryCarrier(mainCarrier).acs = acs;
};
