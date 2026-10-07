// _runtime/metro/12577__.js
import _mod12578 from "12578__.js";
import _mod12581 from "12581__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12581.GLOBAL_OBJ.onerror;
  _mod12581.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod12578.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12581.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12578.addHandler("error", errorCallback);
  _mod12578.maybeInstrument("error", instrumentError);
};
