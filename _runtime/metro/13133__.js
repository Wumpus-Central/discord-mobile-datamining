// === Module 13133: ? ===

// Module 13133
import _mod13134 from "module_13134" /* 13134 */;
import _mod13137 from "module_13137" /* 13137 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13137.GLOBAL_OBJ.onerror;
  _mod13137.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13134.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13137.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13134.addHandler("error", errorCallback);
  _mod13134.maybeInstrument("error", instrumentError);
};