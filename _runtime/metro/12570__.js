// === Module 12570: ? ===

// Module 12570
import _mod12571 from "module_12571" /* 12571 */;
import _mod12574 from "module_12574" /* 12574 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12574.GLOBAL_OBJ.onerror;
  _mod12574.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12571.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12574.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12571.addHandler("error", errorCallback);
  _mod12571.maybeInstrument("error", instrumentError);
};