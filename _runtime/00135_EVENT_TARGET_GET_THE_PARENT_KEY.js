// === Module 135: EVENT_TARGET_GET_THE_PARENT_KEY ===

// Module 135 (EVENT_TARGET_GET_THE_PARENT_KEY)
import COMPOSED_PATH_KEY from "COMPOSED_PATH_KEY" /* 134 */;

const SymbolResult = Symbol("EventTarget[get the parent]");
const SymbolResult1 = Symbol("EventTarget[get listener from props]");
const SymbolResult2 = Symbol("EventTarget[dispatch]");

export const EVENT_TARGET_GET_THE_PARENT_KEY = SymbolResult;
export const EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY = SymbolResult1;
export const INTERNAL_DISPATCH_METHOD_KEY = SymbolResult2;
export const dispatchTrustedEvent = function dispatchTrustedEvent(upload, defaultPrevented) {
  const obj = COMPOSED_PATH_KEY;
  obj.setIsTrusted(defaultPrevented, true);
  return upload[SymbolResult2](defaultPrevented);
};