// _runtime/00236_MessageQueue.js
let closure_0 = global;
closure_0 = undefined;
if (true === global.RN$Bridgeless) {
  let fn = (arg0, fn) => {
    let closure_0 = fn;
    if (typeof fn !== "function") {
      const result = closure_0.RN$registerCallableModule(arg0, () => closure_0);
    } else {
      const result1 = closure_0.RN$registerCallableModule(arg0, fn);
    }
  };
} else {
  closure_0 = require("MessageQueue").default;
  fn = (MobileVoiceOverlayManager, fn) => {
    if (typeof fn !== "function") {
      const result = closure_0.registerCallableModule(MobileVoiceOverlayManager, fn);
    } else {
      const result1 = closure_0.registerLazyCallableModule(MobileVoiceOverlayManager, fn);
    }
  };
}

export default fn;