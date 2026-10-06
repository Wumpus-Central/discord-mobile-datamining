// _runtime/metro/12584__.js
import _mod12578 from "12578__.js";
import _mod12581 from "12581__.js";

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12581.GLOBAL_OBJ.onunhandledrejection;
  _mod12581.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    const obj = _mod12578;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12581.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    const obj = _mod12578;
    obj.addHandler("unhandledrejection", errorCallback);
    const obj2 = _mod12578;
    obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
