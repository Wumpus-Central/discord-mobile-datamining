// === Module 12366: ? ===

// Module 12366
import _mod12367 from "module_12367" /* 12367 */;
import _mod12370 from "module_12370" /* 12370 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12370.GLOBAL_OBJ.onerror;
  _mod12370.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12367.triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return onerror;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
    const obj = { column, error, line, msg, url };
  };
  _mod12370.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12367.addHandler("error", errorCallback);
  _mod12367.maybeInstrument("error", instrumentError);
};