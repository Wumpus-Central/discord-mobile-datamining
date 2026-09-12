// === Module 7027: LayoutCommitObserver ===

// Module 7027 (LayoutCommitObserver)
import _mod6976 from "module_6976" /* 6976 */;
import _mod6977 from "module_6977" /* 6977 */;
import _slicedToArray from "module_6958" /* 6958 */;
import noop from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useLayoutEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
const jsx = fn(21).jsx;
const memoResult = noop.memo((children) => {
  const onCommitLayoutEffect = children.onCommitLayoutEffect;
  const recyclerViewContext = _mod6977.useRecyclerViewContext();
  [r10018, tmp3] = _slicedToArray(_mod6976.useLayoutState(0), 2);
  _slicedToArray = tmp3;
  const tmp2 = _slicedToArray(_mod6976.useLayoutState(0), 2);
  const current = hasOwnProperty(new Set()).current;
  React3(() => {
    if (current.size <= 0) {
      if (onCommitLayoutEffect != null) {
        tmp();
      }
    }
  });
  const items = [recyclerViewContext, current, tmp3];
  value = React4(() => ({
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
  return jsx(_mod6977.RecyclerViewContextProvider, { value, children: children.children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;