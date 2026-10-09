// _runtime/metro/11186__.js
import _mod11185 from "11185__.js";
import _mod11187 from "11187__.js";

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod11185.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod11187.getStackAsyncContextStrategy();
    const tmpResult = _mod11187;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod11185.getMainCarrier();
  _mod11185.getSentryCarrier(mainCarrier).acs = acs;
};
