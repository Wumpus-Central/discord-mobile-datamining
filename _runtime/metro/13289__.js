// === Module 13289: ? ===

// Module 13289
import _mod13290 from "module_13290" /* 13290 */;
import _mod13293 from "module_13293" /* 13293 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13293.GLOBAL_OBJ.onerror;
  _mod13293.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13290.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13293.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13290.addHandler("error", errorCallback);
  _mod13290.maybeInstrument("error", instrumentError);
}