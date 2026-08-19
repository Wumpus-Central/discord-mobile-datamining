// === Module 7742: instrumentUnhandledRejection ===

// Module 7742 (instrumentUnhandledRejection)
import addHandler from "addHandler" /* 7736 */;
import getGlobalSingleton from "getGlobalSingleton" /* 7739 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = getGlobalSingleton.GLOBAL_OBJ.onunhandledrejection;
  getGlobalSingleton.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
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
  getGlobalSingleton.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  addHandler.addHandler("unhandledrejection", arg0);
  addHandler.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};