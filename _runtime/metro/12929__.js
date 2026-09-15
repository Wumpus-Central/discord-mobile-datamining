// === Module 12929: ? ===

// Module 12929
import _mod12930 from "module_12930" /* 12930 */;
import _mod12933 from "module_12933" /* 12933 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12933.GLOBAL_OBJ.onerror;
  _mod12933.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12930.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12933.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12930.addHandler("error", errorCallback);
  _mod12930.maybeInstrument("error", instrumentError);
};