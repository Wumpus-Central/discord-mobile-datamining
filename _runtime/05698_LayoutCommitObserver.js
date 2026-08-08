// _runtime/05698_LayoutCommitObserver.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
const require = arg1;
({ useLayoutEffect: c3, useMemo: c4, useRef: c5 } = noop);
const memoResult = require("noop").memo((children) => {
  let tmp3;
  const onCommitLayoutEffect = children.onCommitLayoutEffect;
  recyclerViewContext = onCommitLayoutEffect(recyclerViewContext[3]).useRecyclerViewContext();
  const obj = onCommitLayoutEffect(recyclerViewContext[3]);
  const obj2 = onCommitLayoutEffect(recyclerViewContext[4]);
  [r10018, tmp3] = callback(onCommitLayoutEffect(recyclerViewContext[4]).useLayoutState(0), 2);
  callback = tmp3;
  const tmp2 = callback(onCommitLayoutEffect(recyclerViewContext[4]).useLayoutState(0), 2);
  const current = callback3(new Set()).current;
  current(() => {
    if (current.size <= 0) {
      if (onCommitLayoutEffect != null) {
        tmp();
      }
    }
  });
  const items = [recyclerViewContext, current, tmp3];
  const value = callback2(() => ({
    layout() {
      callback((arg0) => arg0 + 1);
    },
    getRef() {
      let ref;
      if (closure_1 != null) {
        ref = closure_1.getRef();
      }
      if (ref == null) {
        ref = null;
      }
      return ref;
    },
    getParentRef() {
      let parentRef;
      if (closure_1 != null) {
        parentRef = closure_1.getParentRef();
      }
      if (parentRef == null) {
        parentRef = null;
      }
      return parentRef;
    },
    getParentScrollViewRef() {
      let parentScrollViewRef;
      if (closure_1 != null) {
        parentScrollViewRef = closure_1.getParentScrollViewRef();
      }
      if (parentScrollViewRef == null) {
        parentScrollViewRef = null;
      }
      return parentScrollViewRef;
    },
    getScrollViewRef() {
      let scrollViewRef;
      if (closure_1 != null) {
        scrollViewRef = closure_1.getScrollViewRef();
      }
      if (scrollViewRef == null) {
        scrollViewRef = null;
      }
      return scrollViewRef;
    },
    markChildLayoutAsPending(arg0) {
      if (closure_1 != null) {
        const result = closure_1.markChildLayoutAsPending(arg0);
      }
      set.add(arg0);
    },
    unmarkChildLayoutAsPending(arg0) {
      if (closure_1 != null) {
        const result = closure_1.unmarkChildLayoutAsPending(arg0);
      }
      if (set.has(arg0)) {
        set.delete(arg0);
        closure_4.layout();
      }
    }
  }), items);
  callback2 = value;
  return jsx(onCommitLayoutEffect(recyclerViewContext[3]).RecyclerViewContextProvider, { value, children: children.children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;