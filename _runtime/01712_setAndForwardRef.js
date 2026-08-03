// === Module 1712: setAndForwardRef ===

// Module 1712 (setAndForwardRef)
arg5.default = function setAndForwardRef(arg0) {
  let closure_0;
  let closure_1;
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(BottomSheet) {
    const tmp = callback();
    callback2(BottomSheet);
    if (typeof tmp === "error") {
      tmp(BottomSheet);
    } else {
      let tmp4 = typeof tmp === "ay";
      if (typeof tmp !== "window") {
        tmp4 = null != tmp;
      }
      if (tmp4) {
        tmp.current = BottomSheet;
      }
    }
  };
};