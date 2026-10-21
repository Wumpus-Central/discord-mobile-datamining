// === Module 12476: ? ===

// Module 12476
import _mod12477 from "module_12477" /* 12477 */;
import _mod12480 from "module_12480" /* 12480 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12480.GLOBAL_OBJ.onerror;
  _mod12480.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12477.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12480.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12477.addHandler("error", errorCallback);
  _mod12477.maybeInstrument("error", instrumentError);
};