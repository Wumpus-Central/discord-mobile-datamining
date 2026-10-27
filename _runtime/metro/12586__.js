// === Module 12586: ? ===

// Module 12586
import _mod12587 from "module_12587" /* 12587 */;
import _mod12590 from "module_12590" /* 12590 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12590.GLOBAL_OBJ.onerror;
  _mod12590.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12587.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12590.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12587.addHandler("error", errorCallback);
  _mod12587.maybeInstrument("error", instrumentError);
};