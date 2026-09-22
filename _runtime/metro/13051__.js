// === Module 13051: ? ===

// Module 13051
import _mod13052 from "module_13052" /* 13052 */;
import _mod13055 from "module_13055" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13055.GLOBAL_OBJ.onerror;
  _mod13055.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13052.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13055.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13052.addHandler("error", errorCallback);
  _mod13052.maybeInstrument("error", instrumentError);
};