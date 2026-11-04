// _runtime/metro/13336__.js
import _mod13274 from "13274__.js";
import _mod13301 from "13301__.js";
import _mod13302 from "13302__.js";

require = arg1;
const dependencyMap = arg6;

export function initAndBind(arg0, debug) {
  if (true === debug.debug) {
    const obj = _mod13274;
    if (_mod13302.DEBUG_BUILD) {
      const logger = obj.logger;
      logger.enable();
    } else {
      obj.consoleSandbox(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      });
    }
  }
  const currentScope = _mod13301.getCurrentScope();
  currentScope.update(debug.initialScope);
  const obj4 = new arg0(debug);
  const currentScope1 = _mod13301.getCurrentScope();
  currentScope1.setClient(obj4);
  obj4.init();
  return obj4;
}
export function setCurrentClient(arg0) {
  const currentScope = _mod13301.getCurrentScope();
  currentScope.setClient(arg0);
}
