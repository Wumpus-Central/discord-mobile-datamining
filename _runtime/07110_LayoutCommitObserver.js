// _runtime/07110_LayoutCommitObserver.js
import noopDefault from "00019_noop.js";
import _slicedToArray from "metro/07041__slicedToArray.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = fn;
({ useLayoutEffect: c3, useMemo: c4, useRef: c5 } = noop);
const memoResult = noopDefault.memo((children) => {
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
      if (store != null) {
        ref = store.getRef();
      }
      if (ref == null) {
        ref = null;
      }
      return ref;
    },
    getParentRef() {
      let parentRef;
      if (store != null) {
        parentRef = store.getParentRef();
      }
      if (parentRef == null) {
        parentRef = null;
      }
      return parentRef;
    },
    getParentScrollViewRef() {
      let parentScrollViewRef;
      if (store != null) {
        parentScrollViewRef = store.getParentScrollViewRef();
      }
      if (parentScrollViewRef == null) {
        parentScrollViewRef = null;
      }
      return parentScrollViewRef;
    },
    getScrollViewRef() {
      let scrollViewRef;
      if (store != null) {
        scrollViewRef = store.getScrollViewRef();
      }
      if (scrollViewRef == null) {
        scrollViewRef = null;
      }
      return scrollViewRef;
    },
    markChildLayoutAsPending(arg0) {
      if (store != null) {
        const result = store.markChildLayoutAsPending(arg0);
      }
      set.add(arg0);
    },
    unmarkChildLayoutAsPending(arg0) {
      if (store != null) {
        const result = store.unmarkChildLayoutAsPending(arg0);
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