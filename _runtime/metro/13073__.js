// === Module 13073: ? ===

// Module 13073
import _mod13072 from "module_13072" /* 13072 */;
import _mod13074 from "module_13074" /* 13074 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod13072.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13074.getStackAsyncContextStrategy();
    const tmpResult = _mod13074;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13072.getMainCarrier();
  _mod13072.getSentryCarrier(mainCarrier).acs = acs;
};