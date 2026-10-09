// === Module 11186: ? ===

// Module 11186
import _mod11185 from "module_11185" /* 11185 */;
import _mod11187 from "module_11187" /* 11187 */;

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