// _runtime/07089_useBoundDetection.js
import noop from "00019_noop.js";
import { useUnmountAwareTimeout } from "07086_useUnmountAwareTimeout.js";

({ useCallback: obj1, useEffect: c3, useMemo: c4, useRef: c5 } = noop);

export const useBoundDetection = function useBoundDetection(recyclerViewManager, arg1) {
  const _require = recyclerViewManager;
  dependencyMap = arg1;
  const callback = callback4(false);
  const callback2 = callback4(false);
  const callback3 = callback4(false);
  callback4 = callback4(Date.now());
  const data = recyclerViewManager.props.data;
  const _requestAnimationFrame = _useUnmountAwareTimeout.useUnmountAwareAnimationFrame().requestAnimationFrame;
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
  const checkBounds = callback(() => {
    closure_5.current = Date.now();
    const props = closure_0.props;
    ({ onEndReached, onStartReached, maintainVisibleContentPosition, onEndReachedThreshold, onStartReachedThreshold } = props);
    let num;
    if (maintainVisibleContentPosition != null) {
      num = maintainVisibleContentPosition.autoscrollToBottomThreshold;
    }
    if (num == null) {
      num = -1;
    }
    if (closure_0.getIsFirstLayoutComplete()) {
      const absoluteLastScrollOffset = obj.getAbsoluteLastScrollOffset();
      const size = obj.getChildContainerDimensions();
      const size2 = obj.getWindowSize();
      const tmp3 = true === props.horizontal ? size2.width : size2.height;
      const sum = (tmp2 ? size.width : size.height) + obj.firstItemOffset;
      if (tmp3 > 0) {
        if (onEndReached) {
          if (onEndReachedThreshold == null) {
            onEndReachedThreshold = 0.5;
          }
          const _Math = Math;
          const result = onEndReachedThreshold * tmp3;
          const tmp6 = Math.ceil(absoluteLastScrollOffset + tmp3) >= sum - result;
          let tmp7 = tmp6;
          if (tmp6) {
            tmp7 = !ref.current;
          }
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
          let tmp13 = tmp12;
          if (absoluteLastScrollOffset <= onStartReachedThreshold * tmp3) {
            tmp13 = !ref2.current;
          }
          if (tmp13) {
            ref2.current = true;
            onStartReached();
          }
          ref2.current = absoluteLastScrollOffset <= onStartReachedThreshold * tmp3;
        }
        if (!tmp2) {
          if (num >= 0) {
            const _Math2 = Math;
            const result1 = num * tmp3;
            closure_4.current = Math.ceil(absoluteLastScrollOffset + tmp3) >= sum - result1;
          }
        }
      }
    }
  }, items);
  const tmp2 = callback(() => {
    let current = closure_0.isOffsetProjectionEnabled;
    if (current) {
      current = ref3.current;
    }
    if (current) {
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
          if (flag) {
            flag = !props.ignoreScrollEvents;
          }
          const obj = { animated: null };
          obj[0] = flag;
          current.scrollToEnd(obj);
        }
      });
    }
  }, items1);
  closure_7 = tmp2;
  const items2 = [data];
  callback3(() => {
    closure_2.current = false;
  }, items2);
  const items3 = [data, tmp2, num, num3];
  callback2(() => {
    callback();
  }, items3);
  const items4 = [num2, num4, recyclerViewManager.firstItemOffset, tmp2];
  callback2(() => {
    if (Date.now() - ref4.current >= 100) {
      callback();
    }
  }, items4);
  return { checkBounds };
};