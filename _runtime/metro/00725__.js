// _runtime/metro/00725__.js
import _mod697 from "00697__.js";
import _mod726 from "00726__.js";

function instrumentError() {
  onerror = _mod697.GLOBAL_OBJ.onerror;
  _mod697.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod726;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod697.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  const obj = _mod726;
  obj.addHandler("error", errorCallback);
  const obj2 = _mod726;
  obj2.maybeInstrument("error", instrumentError);
};
