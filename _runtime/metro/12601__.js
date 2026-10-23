// _runtime/metro/12601__.js
import _mod12539 from "12539__.js";
import _mod12566 from "12566__.js";
import _mod12567 from "12567__.js";

require = arg1;
const dependencyMap = arg6;

export const initAndBind = function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod12539;
    if (_mod12567.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod12566.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod12566.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
};
export const setCurrentClient = function setCurrentClient(arg0) {
  const currentScope = _mod12566.getCurrentScope();
  currentScope.setClient(arg0);
};
