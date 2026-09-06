// === Module 12794: ? ===

// Module 12794
import _mod12795 from "module_12795" /* 12795 */;
import _mod12798 from "module_12798" /* 12798 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12798.GLOBAL_OBJ.onerror;
  _mod12798.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    _mod12795.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12798.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  _mod12795.addHandler("error", arg0);
  _mod12795.maybeInstrument("error", instrumentError);
};