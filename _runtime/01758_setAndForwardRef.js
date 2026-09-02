// === Module 1758: setAndForwardRef ===

// Module 1758 (setAndForwardRef)
arg5.default = function setAndForwardRef(arg0) {
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(BottomSheet) {
    const tmp = callback();
    callback2(BottomSheet);
    if (typeof tmp === "function") {
      tmp(BottomSheet);
    } else {
      let tmp4 = typeof tmp === "object";
      if (typeof tmp === "object") {
        tmp4 = null != tmp;
      }
      if (tmp4) {
        tmp.current = BottomSheet;
      }
    }
  };
};