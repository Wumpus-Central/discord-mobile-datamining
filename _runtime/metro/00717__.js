// === Module 717: ? ===

// Module 717
import _mod701 from "module_701" /* 701 */;
import _mod718 from "module_718" /* 718 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod701.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod718.getStackAsyncContextStrategy();
    const tmpResult = _mod718;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod701.getMainCarrier();
  _mod701.getSentryCarrier(mainCarrier).acs = acs;
};