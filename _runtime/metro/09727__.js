// === Module 9727: ? ===

// Module 9727
import _mod9728 from "module_9728" /* 9728 */;
import _mod9731 from "module_9731" /* 9731 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod9731.GLOBAL_OBJ.onerror;
  _mod9731.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod9728.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod9731.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod9728.addHandler("error", errorCallback);
  _mod9728.maybeInstrument("error", instrumentError);
}