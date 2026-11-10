// === Module 13354: ? ===

// Module 13354
import _mod13292 from "module_13292" /* 13292 */;
import _mod13319 from "module_13319" /* 13319 */;
import _mod13320 from "module_13320" /* 13320 */;

require = arg1;
const dependencyMap = arg6;

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod13292;
    if (_mod13320.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod13319.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod13319.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod13319.getCurrentScope();
  currentScope.setClient(arg0);
}