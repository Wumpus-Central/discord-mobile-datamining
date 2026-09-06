// _runtime/00714_instrumentError.js
import _mod686 from "metro/00686__.js";
import _mod715 from "metro/00715__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod686.GLOBAL_OBJ.onerror;
  _mod686.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod715.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod686.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod715.addHandler("error", errorCallback);
  _mod715.maybeInstrument("error", instrumentError);
};
