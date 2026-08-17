// _runtime/00135_SymbolResult2.js
import SymbolResult1 from "SymbolResult1" /* 134 */;

require = arg1;
const dependencyMap = arg6;
const SymbolResult = Symbol("EventTarget[get the parent]");
const SymbolResult2 = Symbol("EventTarget[dispatch]");
arg5.EVENT_TARGET_GET_THE_PARENT_KEY = SymbolResult;
arg5.EVENT_TARGET_GET_DECLARATIVE_LISTENER_KEY = Symbol("EventTarget[get listener from props]");
arg5.INTERNAL_DISPATCH_METHOD_KEY = SymbolResult2;
arg5.dispatchTrustedEvent = function dispatchTrustedEvent(self, tmp2Result) {
  SymbolResult1.setIsTrusted(tmp2Result, true);
  return self[SymbolResult2](tmp2Result);
};