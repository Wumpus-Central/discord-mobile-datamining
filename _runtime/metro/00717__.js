// _runtime/metro/00717__.js
import _mod701 from "00701__.js";
import _mod718 from "00718__.js";

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
