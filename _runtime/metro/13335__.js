// === Module 13335: ? ===

// Module 13335
import _mod13273 from "module_13273" /* 13273 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13301 from "module_13301" /* 13301 */;

require = arg1;
const dependencyMap = arg6;

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod13273;
    if (_mod13301.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod13300.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod13300.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod13300.getCurrentScope();
  currentScope.setClient(arg0);
}