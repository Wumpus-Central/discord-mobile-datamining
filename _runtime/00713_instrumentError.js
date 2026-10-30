// _runtime/00713_instrumentError.js
import _mod685 from "metro/00685__.js";
import _mod714 from "metro/00714__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod685.GLOBAL_OBJ.onerror;
  _mod685.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod714.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod685.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod714.addHandler("error", errorCallback);
  _mod714.maybeInstrument("error", instrumentError);
}
