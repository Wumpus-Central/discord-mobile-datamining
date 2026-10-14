// === Module 12039: ? ===

// Module 12039
import _mod12040 from "module_12040" /* 12040 */;
import _mod12043 from "module_12043" /* 12043 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12043.GLOBAL_OBJ.onerror;
  _mod12043.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12040.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12043.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12040.addHandler("error", errorCallback);
  _mod12040.maybeInstrument("error", instrumentError);
};