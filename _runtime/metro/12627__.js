// === Module 12627: ? ===

// Module 12627
import _mod12565 from "module_12565" /* 12565 */;
import _mod12592 from "module_12592" /* 12592 */;
import _mod12593 from "module_12593" /* 12593 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12565;
    if (_mod12593.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12592.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12592.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12592.getCurrentScope();
  currentScope.setClient(arg0);
};