// _runtime/metro/12546__.js
import _mod12484 from "12484__.js";
import _mod12511 from "12511__.js";
import _mod12512 from "12512__.js";

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12484;
    if (_mod12512.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12511.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12511.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12511.getCurrentScope();
  currentScope.setClient(arg0);
};
