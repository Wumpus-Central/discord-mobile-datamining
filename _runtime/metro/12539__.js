// _runtime/metro/12539__.js
import _mod12538 from "12538__.js";
import _mod12540 from "12540__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12538.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12540.getStackAsyncContextStrategy();
    const tmpResult = _mod12540;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12538.getMainCarrier();
  _mod12538.getSentryCarrier(mainCarrier).acs = acs;
};
