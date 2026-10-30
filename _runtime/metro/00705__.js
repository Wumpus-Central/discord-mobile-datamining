// _runtime/metro/00705__.js
import _mod689 from "00689__.js";
import _mod706 from "00706__.js";

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
