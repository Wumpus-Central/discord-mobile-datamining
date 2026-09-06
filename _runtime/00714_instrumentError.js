// === Module 714: instrumentError ===

// Module 714 (instrumentError)
import _mod686 from "module_686" /* 686 */;
import addHandler from "addHandler" /* 715 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = _mod686.GLOBAL_OBJ.onerror;
  _mod686.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    callback(table[0]).triggerHandlers("error", { column, error, line, msg, url });
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
      const tmp3 = onerror;
    }
  };
  _mod686.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  addHandler.addHandler("error", arg0);
  const obj = addHandler;
  addHandler.maybeInstrument("error", instrumentError);
};