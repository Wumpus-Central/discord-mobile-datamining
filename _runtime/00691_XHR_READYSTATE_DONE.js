// _runtime/00691_XHR_READYSTATE_DONE.js
import RN_GLOBAL_OBJ2 from "00692_RN_GLOBAL_OBJ.js";

export const XHR_READYSTATE_DONE = 4;
export const createStealthXhr = function createStealthXhr() {
  let RN_GLOBAL_OBJ = arg0;
  if (arg0 === undefined) {
    RN_GLOBAL_OBJ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ;
  }
  if (RN_GLOBAL_OBJ.XMLHttpRequest) {
    const self = this;
    const self2 = this;
    const xMLHttpRequest = new RN_GLOBAL_OBJ.XMLHttpRequest();
    if (xMLHttpRequest.open.__sentry_original__) {
      xMLHttpRequest.open = xMLHttpRequest.open.__sentry_original__;
    }
    if (xMLHttpRequest.send.__sentry_original__) {
      xMLHttpRequest.send = xMLHttpRequest.send.__sentry_original__;
    }
    return xMLHttpRequest;
  } else {
    return null;
  }
};
