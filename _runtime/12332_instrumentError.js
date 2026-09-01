// _runtime/12332_instrumentError.js
import addHandler from "12333_addHandler.js";
import getGlobalSingleton from "12336_getGlobalSingleton.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = getGlobalSingleton.GLOBAL_OBJ.onerror;
  getGlobalSingleton.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
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
  getGlobalSingleton.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  addHandler.addHandler("error", arg0);
  const obj = addHandler;
  addHandler.maybeInstrument("error", instrumentError);
};
