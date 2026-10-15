// === Module 12272: ? ===

// Module 12272
import _mod12273 from "module_12273" /* 12273 */;
import _mod12276 from "module_12276" /* 12276 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12276.GLOBAL_OBJ.onerror;
  _mod12276.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12273.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12276.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12273.addHandler("error", errorCallback);
  _mod12273.maybeInstrument("error", instrumentError);
};