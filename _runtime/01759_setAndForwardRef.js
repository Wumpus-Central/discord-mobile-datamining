// _runtime/01759_setAndForwardRef.js
arg5.default = function setAndForwardRef(arg0) {
  let closure_0;
  let closure_1;
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