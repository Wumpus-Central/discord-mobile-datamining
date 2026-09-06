// === Module 1742: ? ===

// Module 1742

export default function setAndForwardRef(arg0) {
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(current) {
    const tmp = closure_1_0();
    closure_1_1(current);
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