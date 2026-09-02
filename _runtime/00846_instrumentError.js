// === Module 846: instrumentError ===

// Module 846 (instrumentError)
import _mod818 from "module_818" /* 818 */;
import addHandler from "addHandler" /* 847 */;

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = _mod818.GLOBAL_OBJ.onerror;
  _mod818.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
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
  _mod818.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  addHandler.addHandler("error", arg0);
  const obj = addHandler;
  addHandler.maybeInstrument("error", instrumentError);
};