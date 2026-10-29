// === Module 12850: ? ===

// Module 12850
import _mod12851 from "module_12851" /* 12851 */;
import _mod12854 from "module_12854" /* 12854 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12854.GLOBAL_OBJ.onerror;
  _mod12854.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12851.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12854.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12851.addHandler("error", errorCallback);
  _mod12851.maybeInstrument("error", instrumentError);
}