// _runtime/metro/12425__.js
import _mod12424 from "12424__.js";
import _mod12426 from "12426__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12424.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12426.getStackAsyncContextStrategy();
    const tmpResult = _mod12426;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12424.getMainCarrier();
  _mod12424.getSentryCarrier(mainCarrier).acs = acs;
};
