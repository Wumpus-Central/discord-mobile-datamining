// _runtime/metro/12608__.js
import _mod12607 from "12607__.js";
import _mod12609 from "12609__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12607.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12609.getStackAsyncContextStrategy();
    const tmpResult = _mod12609;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12607.getMainCarrier();
  _mod12607.getSentryCarrier(mainCarrier).acs = acs;
};
