// === Module 13001: ? ===

// Module 13001
import _mod13002 from "module_13002" /* 13002 */;
import _mod13005 from "module_13005" /* 13005 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13005.GLOBAL_OBJ.onerror;
  _mod13005.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13002.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13005.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13002.addHandler("error", errorCallback);
  _mod13002.maybeInstrument("error", instrumentError);
}