// _runtime/metro/12584__.js
import _mod12583 from "12583__.js";
import _mod12585 from "12585__.js";

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  let acs;
  const obj = _mod12583;
  const sentryCarrier = obj.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12585;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12583;
  const mainCarrier = obj.getMainCarrier();
  _mod12583.getSentryCarrier(mainCarrier).acs = acs;
  _mod12583;
};
