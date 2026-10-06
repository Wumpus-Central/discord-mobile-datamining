// === Module 6418: LayoutCommitObserver ===

// Module 6418 (LayoutCommitObserver)
import Fragment from "Fragment" /* 21 */;
import _mod6367 from "module_6367" /* 6367 */;
import react2 from "react" /* 6368 */;
import _slicedToArray from "_slicedToArray" /* 6349 */;
import react_mod from "react" /* 19 */;

let onCommitLayoutEffect, set;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useLayoutEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;
const memoResult = react.memo((onCommitLayoutEffect) => {
  let tmp3;
  onCommitLayoutEffect = onCommitLayoutEffect.onCommitLayoutEffect;
  const children = onCommitLayoutEffect.children;
  const obj = react2;
  const recyclerViewContext = obj.useRecyclerViewContext();
  const obj2 = _mod6367;
  [r10018, tmp3] = _slicedToArray(obj2.useLayoutState(0), 2);
  let closure_2 = tmp3;
  const tmp2 = _slicedToArray(obj2.useLayoutState(0), 2);
  set = new Set();
  const current = hasOwnProperty(set).current;
  _false(() => {
    if (current.size <= 0) {
      if (onCommitLayoutEffect != null) {
        tmp();
      }
    }
  });
  const items = [recyclerViewContext, current, tmp3];
  const value = React3(() => ({
    layout() {
      closure_1_2((arg0) => arg0 + 1);
    },
    getRef() {
      let ref;
      if (recyclerViewContext != null) {
        ref = recyclerViewContext.getRef();
      }
      if (ref == null) {
        ref = null;
      }
      return ref;
    },
    getParentRef() {
      let parentRef;
      if (recyclerViewContext != null) {
        parentRef = recyclerViewContext.getParentRef();
      }
      if (parentRef == null) {
        parentRef = null;
      }
      return parentRef;
    },
    getParentScrollViewRef() {
      let parentScrollViewRef;
      if (recyclerViewContext != null) {
        parentScrollViewRef = recyclerViewContext.getParentScrollViewRef();
      }
      if (parentScrollViewRef == null) {
        parentScrollViewRef = null;
      }
      return parentScrollViewRef;
    },
    getScrollViewRef() {
      let scrollViewRef;
      if (recyclerViewContext != null) {
        scrollViewRef = recyclerViewContext.getScrollViewRef();
      }
      if (scrollViewRef == null) {
        scrollViewRef = null;
      }
      return scrollViewRef;
    },
    markChildLayoutAsPending(arg0) {
      if (recyclerViewContext != null) {
        const result = recyclerViewContext.markChildLayoutAsPending(arg0);
      }
      set.add(arg0);
    },
    unmarkChildLayoutAsPending(arg0) {
      if (recyclerViewContext != null) {
        const result = recyclerViewContext.unmarkChildLayoutAsPending(arg0);
      }
      if (set.has(arg0)) {
        set.delete(arg0);
        closure_1_4.layout();
      }
    }
  }), items);
  return jsx(react2.RecyclerViewContextProvider, { value, children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;