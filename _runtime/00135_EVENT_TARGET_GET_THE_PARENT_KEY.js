// === Module 135: EVENT_TARGET_GET_THE_PARENT_KEY ===

// Module 135 (EVENT_TARGET_GET_THE_PARENT_KEY)
import COMPOSED_PATH_KEY from "COMPOSED_PATH_KEY" /* 134 */;

require = arg1;
const dependencyMap = arg6;
const SymbolResult = Symbol("EventTarget[get the parent]");
const SymbolResult2 = Symbol("EventTarget[dispatch]");

export const EVENT_TARGET_GET_THE_PARENT_KEY = SymbolResult;
export const EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY = Symbol("EventTarget[get listener from props]");
export const INTERNAL_DISPATCH_METHOD_KEY = SymbolResult2;
export const dispatchTrustedEvent = function dispatchTrustedEvent(self, tmp2Result) {
  COMPOSED_PATH_KEY.setIsTrusted(tmp2Result, true);
  return self[SymbolResult2](tmp2Result);
};