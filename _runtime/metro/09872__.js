// === Module 9872: ? ===

// Module 9872
import _mod9810 from "module_9810" /* 9810 */;
import _mod9837 from "module_9837" /* 9837 */;
import _mod9838 from "module_9838" /* 9838 */;

require = arg1;
const dependencyMap = arg6;

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod9810;
    if (_mod9838.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod9837.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod9837.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod9837.getCurrentScope();
  currentScope.setClient(arg0);
}