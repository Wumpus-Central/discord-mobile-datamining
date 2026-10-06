// === Module 12599: ? ===

// Module 12599
import _mod12598 from "module_12598" /* 12598 */;
import _mod12600 from "module_12600" /* 12600 */;


export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  let acs;
  const obj = _mod12598;
  const sentryCarrier = obj.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12600;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12598;
  const mainCarrier = obj.getMainCarrier();
  _mod12598.getSentryCarrier(mainCarrier).acs = acs;
  _mod12598;
};