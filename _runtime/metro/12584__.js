// === Module 12584: ? ===

// Module 12584
import _mod12583 from "module_12583" /* 12583 */;
import _mod12585 from "module_12585" /* 12585 */;


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