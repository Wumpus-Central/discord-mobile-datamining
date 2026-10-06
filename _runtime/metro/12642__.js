// === Module 12642: ? ===

// Module 12642
import _mod12580 from "module_12580" /* 12580 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12608 from "module_12608" /* 12608 */;


export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const DEBUG_BUILD = _mod12608.DEBUG_BUILD;
    const obj = _mod12580;
    if (DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const obj2 = _mod12607;
  const currentScope = obj2.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const obj5 = _mod12607;
  const currentScope1 = obj5.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const obj = _mod12607;
  const currentScope = obj.getCurrentScope();
  currentScope.setClient(arg0);
};