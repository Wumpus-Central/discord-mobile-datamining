// === Module 771: ? ===

// Module 771
import _mod699 from "module_699" /* 699 */;
import consoleSandbox from "consoleSandbox" /* 700 */;
import _mod724 from "module_724" /* 724 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = consoleSandbox;
    if (_mod699.DEBUG_BUILD) {
      debug = obj.debug;
      debug.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod724.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod724.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod724.getCurrentScope();
  currentScope.setClient(arg0);
};