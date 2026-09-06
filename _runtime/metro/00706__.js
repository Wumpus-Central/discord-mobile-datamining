// _runtime/metro/00706__.js
import _mod690 from "00690__.js";
import _mod707 from "00707__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod690.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod707.getStackAsyncContextStrategy();
    const tmpResult = _mod707;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod690.getMainCarrier();
  _mod690.getSentryCarrier(mainCarrier).acs = acs;
};
