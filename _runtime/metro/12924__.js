// _runtime/metro/12924__.js
import _mod12925 from "12925__.js";
import _mod12928 from "12928__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12928.GLOBAL_OBJ.onerror;
  _mod12928.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod12925.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12928.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12925.addHandler("error", errorCallback);
  _mod12925.maybeInstrument("error", instrumentError);
};
