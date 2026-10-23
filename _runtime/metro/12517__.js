// === Module 12517: ? ===

// Module 12517
import _mod12518 from "module_12518" /* 12518 */;
import _mod12521 from "module_12521" /* 12521 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12521.GLOBAL_OBJ.onerror;
  _mod12521.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12518.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12521.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12518.addHandler("error", errorCallback);
  _mod12518.maybeInstrument("error", instrumentError);
};