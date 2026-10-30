// _runtime/metro/00759__.js
import _mod687 from "00687__.js";
import consoleSandbox from "../00688_consoleSandbox.js";
import _mod712 from "00712__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = consoleSandbox;
    if (_mod687.DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod712.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod712.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod712.getCurrentScope();
  currentScope.setClient(arg0);
}
