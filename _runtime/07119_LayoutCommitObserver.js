// === Module 7119: LayoutCommitObserver ===

// Module 7119 (LayoutCommitObserver)
import _mod7068 from "module_7068" /* 7068 */;
import _mod7069 from "module_7069" /* 7069 */;
import _slicedToArray from "module_7050" /* 7050 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useLayoutEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;
const memoResult = noop.memo((children) => {
  const onCommitLayoutEffect = children.onCommitLayoutEffect;
  const recyclerViewContext = _mod7069.useRecyclerViewContext();
  [r10018, tmp3] = _mod7068.useLayoutState(0);
  _slicedToArray = tmp3;
  const tmp2 = _slicedToArray(_mod7068.useLayoutState(0), 2);
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
  return jsx(_mod7069.RecyclerViewContextProvider, { value, children: children.children });
});
memoResult.displayName = "LayoutCommitObserver";

export const LayoutCommitObserver = memoResult;