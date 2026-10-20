// _runtime/metro/12420__.js
import _mod12421 from "12421__.js";
import _mod12424 from "12424__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12424.GLOBAL_OBJ.onerror;
  _mod12424.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod12421.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12424.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12421.addHandler("error", errorCallback);
  _mod12421.maybeInstrument("error", instrumentError);
};
