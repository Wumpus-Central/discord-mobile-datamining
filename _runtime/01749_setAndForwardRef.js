// === Module 1749: setAndForwardRef ===

// Module 1749 (setAndForwardRef)

export default function setAndForwardRef(arg0) {
  let closure_0;
  let closure_1;
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(current) {
    const tmp = closure_0();
    closure_1(current);
    if (typeof tmp === "function") {
      tmp(current);
    } else {
      let tmp4 = typeof tmp === "object";
      if (typeof tmp === "object") {
        tmp4 = null != tmp;
      }
      if (tmp4) {
        tmp.current = current;
      }
    }
  };
};