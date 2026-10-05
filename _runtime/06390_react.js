// _runtime/06390_react.js
import _slicedToArray from "metro/06387__slicedToArray.js";
import react from "00019_react.js";

let size;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ useCallback: c2, useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);

export const useBoundDetection = function useBoundDetection(recyclerViewManager, arg1) {
  let closure_0 = recyclerViewManager;
  let closure_1 = arg1;
  let c2 = hasOwnProperty(false);
  let c3 = hasOwnProperty(false);
  let closure_4 = hasOwnProperty(false);
  hasOwnProperty = hasOwnProperty(Date.now());
  const data = recyclerViewManager.props.data;
  let obj = _slicedToArray;
  const _requestAnimationFrame = obj.useUnmountAwareAnimationFrame().requestAnimationFrame;
  let num = 0;
  if (recyclerViewManager.hasLayout()) {
    num = recyclerViewManager.getWindowSize().height;
  }
  let num2 = 0;
  if (recyclerViewManager.hasLayout()) {
    num2 = recyclerViewManager.getChildContainerDimensions().height;
  }
  let num3 = 0;
  if (recyclerViewManager.hasLayout()) {
    num3 = recyclerViewManager.getWindowSize().width;
  }
  let num4 = 0;
  if (recyclerViewManager.hasLayout()) {
    num4 = recyclerViewManager.getChildContainerDimensions().width;
  }
  const items = [recyclerViewManager];
  const items1 = [_requestAnimationFrame, arg1, recyclerViewManager];
  const checkBounds = React2(() => {
    let maintainVisibleContentPosition;
    let onEndReached;
    let onEndReachedThreshold;
    let onStartReached;
    let onStartReachedThreshold;
    ref4.current = Date.now();
    const props = closure_0.props;
    ({ onEndReached, onStartReached, maintainVisibleContentPosition, onEndReachedThreshold, onStartReachedThreshold } =
      props);
    let num;
    const horizontal = props.horizontal;
    if (maintainVisibleContentPosition != null) {
      num = maintainVisibleContentPosition.autoscrollToBottomThreshold;
    }
    if (num == null) {
      num = -1;
    }
    if (closure_0.getIsFirstLayoutComplete()) {
      const absoluteLastScrollOffset = closure_0.getAbsoluteLastScrollOffset();
      size = closure_0.getChildContainerDimensions();
      const size2 = closure_0.getWindowSize();
      const tmp3 = true === horizontal ? size2.width : size2.height;
      const sum = (tmp2 ? size.width : size.height) + closure_0.firstItemOffset;
      if (tmp3 > 0) {
        if (onEndReached) {
          if (onEndReachedThreshold == null) {
            onEndReachedThreshold = 0.5;
          }
          const _Math = Math;
          const result = onEndReachedThreshold * tmp3;
          const tmp6 = Math.ceil(absoluteLastScrollOffset + tmp3) >= sum - result;
          const tmp7 = tmp6 && !ref.current;
          if (tmp7) {
            ref.current = true;
            onEndReached();
          }
          ref.current = tmp6;
        }
        if (onStartReached) {
          if (onStartReachedThreshold == null) {
            onStartReachedThreshold = 0.2;
          }
          const tmp13 = tmp12 && !ref2.current;
          if (tmp13) {
            ref2.current = true;
            onStartReached();
          }
          ref2.current = absoluteLastScrollOffset <= onStartReachedThreshold * tmp3;
        }
        if (true !== horizontal) {
          if (num >= 0) {
            const _Math2 = Math;
            const result1 = num * tmp3;
            ref3.current = Math.ceil(absoluteLastScrollOffset + tmp3) >= sum - result1;
          }
        }
      }
    }
  }, items);
  const tmp2 = React2(() => {
    let current = props.isOffsetProjectionEnabled && ref3.current;
    if (current) {
      let flag = false;
      ref3.current = false;
      _requestAnimationFrame(() => {
        const maintainVisibleContentPosition = props.props.maintainVisibleContentPosition;
        let flag;
        if (maintainVisibleContentPosition != null) {
          flag = maintainVisibleContentPosition.animateAutoScrollToBottom;
        }
        if (flag == null) {
          flag = true;
        }
        const current = ref.current;
        if (current != null) {
          const scrollToEnd = current.scrollToEnd;
          if (flag) {
            flag = !props.ignoreScrollEvents;
          }
          const obj = { animated: flag };
          scrollToEnd(obj);
        }
      });
    }
  }, items1);
  let closure_7 = tmp2;
  const items2 = [data];
  let tmp3 = React3(() => {
    ref.current = false;
  }, items2);
  const items3 = [data, tmp2, num, num3];
  _false(() => {
    closure_7();
  }, items3);
  const items4 = [num2, num4, recyclerViewManager.firstItemOffset, tmp2];
  _false(() => {
    if (Date.now() - ref4.current >= 100) {
      closure_7();
    }
  }, items4);
  return { checkBounds };
};
