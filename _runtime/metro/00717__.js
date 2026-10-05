// _runtime/metro/00717__.js
import _mod701 from "00701__.js";
import AsyncContextStack from "../00718_AsyncContextStack.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getAsyncContextStrategy = function getAsyncContextStrategy(mainCarrier) {
  let acs;
  const obj = _mod701;
  const sentryCarrier = obj.getSentryCarrier(mainCarrier);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = AsyncContextStack;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod701;
  const mainCarrier = obj.getMainCarrier();
  _mod701.getSentryCarrier(mainCarrier).acs = acs;
  _mod701;
};
