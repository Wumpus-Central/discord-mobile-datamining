// === Module 9793: ? ===

// Module 9793
import _mod9731 from "module_9731" /* 9731 */;
import _mod9758 from "module_9758" /* 9758 */;
import _mod9759 from "module_9759" /* 9759 */;

require = arg1;
const dependencyMap = arg6;

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod9731;
    if (_mod9759.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod9758.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod9758.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod9758.getCurrentScope();
  currentScope.setClient(arg0);
}