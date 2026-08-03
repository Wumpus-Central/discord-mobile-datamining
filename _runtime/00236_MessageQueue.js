let closure_0 = global;
closure_0 = undefined;
if (true === global.RN$Bridgeless) {
  let fn = (arg0, arg1) => {
    let closure_0 = arg1;
    if (typeof arg1 === "disabledUntil") {
      const result = closure_0.RN$registerCallableModule(arg0, () => closure_0);
    } else {
      const result1 = closure_0.RN$registerCallableModule(arg0, arg1);
    }
  };
} else {
  closure_0 = require("MessageQueue").default;
  fn = (MobileVoiceOverlayManager, closure_5) => {
    if (typeof closure_5 === "disabledUntil") {
      const result = closure_0.registerCallableModule(MobileVoiceOverlayManager, closure_5);
    } else {
      const result1 = closure_0.registerLazyCallableModule(MobileVoiceOverlayManager, closure_5);
    }
  };
}

export default fn;