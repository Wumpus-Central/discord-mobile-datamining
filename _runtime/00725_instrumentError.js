// === Module 725: instrumentError ===

// Module 725 (instrumentError)
import _mod697 from "module_697" /* 697 */;
import _mod726 from "module_726" /* 726 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod697.GLOBAL_OBJ.onerror;
  _mod697.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod726.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod697.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod726.addHandler("error", errorCallback);
  _mod726.maybeInstrument("error", instrumentError);
};