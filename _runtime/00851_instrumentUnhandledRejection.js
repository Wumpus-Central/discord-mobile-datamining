// === Module 851: instrumentUnhandledRejection ===

// Module 851 (instrumentUnhandledRejection)
import _mod821 from "module_821" /* 821 */;
import addHandler from "addHandler" /* 850 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = _mod821.GLOBAL_OBJ.onunhandledrejection;
  _mod821.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    callback(table[0]).triggerHandlers("unhandledrejection", arg0);
    if (!onunhandledrejection) {
      return !onunhandledrejection;
    } else {
      const self = this;
      const apply = onunhandledrejection.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
    const obj = callback(table[0]);
  };
  _mod821.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  addHandler.addHandler("unhandledrejection", arg0);
  addHandler.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};