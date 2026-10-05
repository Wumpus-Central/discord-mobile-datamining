// === Module 771: ? ===

// Module 771
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import _mod724 from "module_724" /* 724 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod699.DEBUG_BUILD;
    const obj = CONSOLE_LEVELS;
    if (DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod724;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod724;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod724;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};