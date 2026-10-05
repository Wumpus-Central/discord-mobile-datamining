// _runtime/metro/00727__.js
import _mod697 from "00697__.js";
import _mod726 from "00726__.js";

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod697.GLOBAL_OBJ.onunhandledrejection;
  _mod697.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    const obj = _mod726;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod697.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    const obj = _mod726;
    obj.addHandler("unhandledrejection", errorCallback);
    const obj2 = _mod726;
    obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
