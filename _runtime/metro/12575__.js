// === Module 12575: ? ===

// Module 12575
import _mod12576 from "module_12576" /* 12576 */;
import _mod12579 from "module_12579" /* 12579 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12579.GLOBAL_OBJ.onerror;
  _mod12579.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12576.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12579.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12576.addHandler("error", errorCallback);
  _mod12576.maybeInstrument("error", instrumentError);
};