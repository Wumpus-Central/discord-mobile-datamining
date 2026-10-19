// === Module 12403: ? ===

// Module 12403
import _mod12404 from "module_12404" /* 12404 */;
import _mod12407 from "module_12407" /* 12407 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12407.GLOBAL_OBJ.onerror;
  _mod12407.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12404.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12407.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12404.addHandler("error", errorCallback);
  _mod12404.maybeInstrument("error", instrumentError);
};