// === Module 12301: ? ===

// Module 12301
import _mod12302 from "module_12302" /* 12302 */;
import _mod12305 from "module_12305" /* 12305 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12305.GLOBAL_OBJ.onerror;
  _mod12305.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12302.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12305.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12302.addHandler("error", errorCallback);
  _mod12302.maybeInstrument("error", instrumentError);
};