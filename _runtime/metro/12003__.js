// === Module 12003: ? ===

// Module 12003
import _mod12004 from "module_12004" /* 12004 */;
import _mod12007 from "module_12007" /* 12007 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12007.GLOBAL_OBJ.onerror;
  _mod12007.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12004.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12007.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12004.addHandler("error", errorCallback);
  _mod12004.maybeInstrument("error", instrumentError);
};