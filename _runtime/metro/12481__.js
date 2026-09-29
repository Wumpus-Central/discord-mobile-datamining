// === Module 12481: ? ===

// Module 12481
import _mod12482 from "module_12482" /* 12482 */;
import _mod12485 from "module_12485" /* 12485 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12485.GLOBAL_OBJ.onerror;
  _mod12485.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12482.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12485.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12482.addHandler("error", errorCallback);
  _mod12482.maybeInstrument("error", instrumentError);
};