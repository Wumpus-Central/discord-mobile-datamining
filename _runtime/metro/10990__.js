// _runtime/metro/10990__.js
import _mod10991 from "10991__.js";
import _mod10994 from "10994__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod10994.GLOBAL_OBJ.onerror;
  _mod10994.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod10991.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod10994.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod10991.addHandler("error", errorCallback);
  _mod10991.maybeInstrument("error", instrumentError);
};
