// _runtime/metro/01742__.js

export default function setAndForwardRef(arg0) {
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(BottomSheet) {
    const tmp = closure_1_0();
    closure_1_1(BottomSheet);
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
}
