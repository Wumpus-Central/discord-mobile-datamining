// _runtime/metro/12528__.js
import _mod12527 from "12527__.js";
import _mod12529 from "12529__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12527.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12529.getStackAsyncContextStrategy();
    const tmpResult = _mod12529;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12527.getMainCarrier();
  _mod12527.getSentryCarrier(mainCarrier).acs = acs;
};
