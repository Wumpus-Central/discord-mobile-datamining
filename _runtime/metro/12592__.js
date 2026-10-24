// _runtime/metro/12592__.js
import _mod12591 from "12591__.js";
import _mod12593 from "12593__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod12591.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod12593.getStackAsyncContextStrategy();
    const tmpResult = _mod12593;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod12591.getMainCarrier();
  _mod12591.getSentryCarrier(mainCarrier).acs = acs;
};
