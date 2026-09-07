// _runtime/metro/12863__.js
import _mod12801 from "12801__.js";
import _mod12828 from "12828__.js";
import _mod12829 from "12829__.js";

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12801;
    if (_mod12829.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12828.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12828.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12828.getCurrentScope();
  currentScope.setClient(arg0);
};
