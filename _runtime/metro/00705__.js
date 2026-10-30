// === Module 705: ? ===

// Module 705
import _mod689 from "module_689" /* 689 */;
import _mod706 from "module_706" /* 706 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function getAsyncContextStrategy(mainCarrier) {
  const sentryCarrier = _mod689.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod706.getStackAsyncContextStrategy();
    const tmpResult = _mod706;
  }
  return acs;
}
export function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod689.getMainCarrier();
  _mod689.getSentryCarrier(mainCarrier).acs = acs;
}