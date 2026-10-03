// _runtime/00725_instrumentError.js
import _mod697 from "metro/00697__.js";
import _mod726 from "metro/00726__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod697.GLOBAL_OBJ.onerror;
  _mod697.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
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
