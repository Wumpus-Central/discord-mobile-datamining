// === Module 9792: ? ===

// Module 9792
import _mod9730 from "module_9730" /* 9730 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9758 from "module_9758" /* 9758 */;

require = arg1;
const dependencyMap = arg6;

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod9730;
    if (_mod9758.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod9757.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod9757.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod9757.getCurrentScope();
  currentScope.setClient(arg0);
}