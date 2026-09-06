// === Module 714: instrumentError ===

// Module 714 (instrumentError)
import _mod686 from "module_686" /* 686 */;
import _mod715 from "module_715" /* 715 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod686.GLOBAL_OBJ.onerror;
  _mod686.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod715.triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return tmp2;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
  };
  _mod686.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod715.addHandler("error", arg0);
  _mod715.maybeInstrument("error", instrumentError);
};