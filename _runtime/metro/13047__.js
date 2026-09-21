// === Module 13047: ? ===

// Module 13047
import _mod13048 from "module_13048" /* 13048 */;
import _mod13051 from "module_13051" /* 13051 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13051.GLOBAL_OBJ.onerror;
  _mod13051.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod13048.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13051.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13048.addHandler("error", errorCallback);
  _mod13048.maybeInstrument("error", instrumentError);
};