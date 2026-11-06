// === Module 13252: ? ===

// Module 13252
import _mod13253 from "module_13253" /* 13253 */;
import _mod13256 from "module_13256" /* 13256 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13256.GLOBAL_OBJ.onerror;
  _mod13256.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13253.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13256.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13253.addHandler("error", errorCallback);
  _mod13253.maybeInstrument("error", instrumentError);
}