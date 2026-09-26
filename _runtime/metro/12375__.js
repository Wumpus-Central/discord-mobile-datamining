// === Module 12375: ? ===

// Module 12375
import _mod12313 from "module_12313" /* 12313 */;
import _mod12340 from "module_12340" /* 12340 */;
import _mod12341 from "module_12341" /* 12341 */;

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12313;
    if (_mod12341.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12340.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12340.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12340.getCurrentScope();
  currentScope.setClient(arg0);
};