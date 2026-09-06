// _runtime/metro/00760__.js
import _mod688 from "00688__.js";
import consoleSandbox from "../00689_consoleSandbox.js";
import _mod713 from "00713__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = consoleSandbox;
    if (_mod688.DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod713.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod713.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod713.getCurrentScope();
  currentScope.setClient(arg0);
};
