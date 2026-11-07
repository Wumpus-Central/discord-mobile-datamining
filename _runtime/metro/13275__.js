// === Module 13275: ? ===

// Module 13275
import _mod13276 from "module_13276" /* 13276 */;
import _mod13279 from "module_13279" /* 13279 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13279.GLOBAL_OBJ.onerror;
  _mod13279.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13276.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13279.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13276.addHandler("error", errorCallback);
  _mod13276.maybeInstrument("error", instrumentError);
}