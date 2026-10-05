// === Module 12562: ? ===

// Module 12562
import _mod12563 from "module_12563" /* 12563 */;
import _mod12566 from "module_12566" /* 12566 */;

function instrumentError() {
  onerror = _mod12566.GLOBAL_OBJ.onerror;
  _mod12566.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12563;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12566.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  const obj = _mod12563;
  obj.addHandler("error", errorCallback);
  const obj2 = _mod12563;
  obj2.maybeInstrument("error", instrumentError);
};