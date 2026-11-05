// === Module 13278: ? ===

// Module 13278
import _mod13279 from "module_13279" /* 13279 */;
import _mod13282 from "module_13282" /* 13282 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13282.GLOBAL_OBJ.onerror;
  _mod13282.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13279.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13282.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13279.addHandler("error", errorCallback);
  _mod13279.maybeInstrument("error", instrumentError);
}