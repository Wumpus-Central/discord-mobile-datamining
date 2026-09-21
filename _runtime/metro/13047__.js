// _runtime/metro/13047__.js
import _mod13048 from "13048__.js";
import _mod13051 from "13051__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13051.GLOBAL_OBJ.onerror;
  _mod13051.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod13048.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13051.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13048.addHandler("error", errorCallback);
  _mod13048.maybeInstrument("error", instrumentError);
};
