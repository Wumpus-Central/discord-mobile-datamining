// _runtime/metro/09728__.js
import _mod9729 from "09729__.js";
import _mod9732 from "09732__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod9732.GLOBAL_OBJ.onerror;
  _mod9732.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod9729.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod9732.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod9729.addHandler("error", errorCallback);
  _mod9729.maybeInstrument("error", instrumentError);
}
