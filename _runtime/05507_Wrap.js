// _runtime/05507_Wrap.js
import _mod5470 from "metro/05470__.js";
import noop from "metro/00019__.js";

require = fn;
fn(19).useCallback;

export (ref) => {
  let ref2;
  try {
    const Children = noop.Children;
    const onlyResult = Children.only(tmp2);
    ref2 = onlyResult.props.ref;
    items = [ref2, ref];
    let obj2 = {
      collapsable: false,
      ref: useCallback((__internalInstanceHandle) => {
          let assignRefResult = ref(ref2[2]).assignRef(assignRefResult1, __internalInstanceHandle);
          let obj = ref(ref2[2]);
          let obj2 = assignRefResult(ref2[2]);
          assignRefResult1 = obj2.assignRef(ref, assignRefResult(ref2[2]).preferHostInstance(__internalInstanceHandle));
          return () => {
            if (typeof assignRefResult === "function") {
              tmp();
            } else {
              assignRefResult = _mod5470.assignRef(ref2, null);
            }
            if (typeof assignRefResult1 === "function") {
              tmp3();
            } else {
              assignRefResult1 = _mod5470.assignRef(ref, null);
            }
          };
        }, items)
    };
    return noop.cloneElement(onlyResult, obj2, onlyResult.props.children);
  } catch (err) {
    const _Error = Error;
    const error = new Error(ref(ref2[1]).tagMessage("VirtualGestureDetector expects exactly one React element as its child. To use a gesture with multiple views, wrap them in a single parent view and attach the gesture to that."));
    throw error;
  }
}