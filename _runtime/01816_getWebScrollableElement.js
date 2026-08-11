// _runtime/01816_getWebScrollableElement.js
import noop from "noop";
import isJest from "isJest";

let c3;
let c4;
let obj1;
function getWebScrollableElement(getScrollableNode) {
  let scrollableNode;
  if (getScrollableNode != null) {
    scrollableNode = getScrollableNode.getScrollableNode();
  }
  if (scrollableNode == null) {
    scrollableNode = getScrollableNode;
  }
  return scrollableNode;
}
({ useCallback: obj1, useEffect: c3, useRef: c4 } = noop);
let c5 = "animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.";
let closure_6 = { code: "function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}" };
let closure_7 = { code: "function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}" };
let closure_9 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];

export const useScrollViewOffset = isJest.isWeb() ? (function useScrollViewOffsetWeb(animatedRef) {
  const _require = animatedRef;
  let sharedValue = arg1;
  let obj = _require(current[2]);
  if (arg1 == null) {
    sharedValue = obj.useSharedValue(0);
  }
  current = closure_4(sharedValue).current;
  const fn = function _() {
    if (closure_0) {
      const current = tmp.current;
      let scrollableNode;
      if (current != null) {
        scrollableNode = current.getScrollableNode();
      }
      if (scrollableNode == null) {
        scrollableNode = current;
      }
      current.value = 0 === scrollableNode.scrollLeft ? scrollableNode.scrollTop : scrollableNode.scrollLeft;
    }
  };
  obj = { animatedRef, getWebScrollableElement, offset: current };
  fn.__closure = obj;
  fn.__workletHash = 2244034762234;
  fn.__initData = closure_6;
  const items = [animatedRef, current];
  const tmp3 = callback(fn, items);
  callback = tmp3;
  const items1 = [animatedRef, tmp3];
  callback2(() => {
    if (closure_0) {
      return obj.observe((arg0) => {
        if (arg0) {
          const current = scrollableNode.current;
          scrollableNode = undefined;
          if (current != null) {
            scrollableNode = current.getScrollableNode();
          }
          if (scrollableNode == null) {
            scrollableNode = current;
          }
          const listener = scrollableNode.addEventListener("scroll", closure_2);
          return () => {
            const removed = scrollableNode.removeEventListener("scroll", outer1_2);
          };
        } else {
          const logger = outer1_0(outer1_1[3]).logger;
          logger.warn(outer1_5);
        }
      });
    }
    obj = closure_0;
  }, items1);
  return current;
}) : (function useScrollViewOffsetNative(arg0, arg1) {
  const _require = arg0;
  let sharedValue = arg1;
  if (arg1 == null) {
    sharedValue = obj.useSharedValue(0);
  }
  const current = closure_4(sharedValue).current;
  obj = _require(current[2]);
  const tmp2 = _require;
  const tmp3 = current;
  const tmp4 = closure_4;
  const fn = function _(contentOffset) {
    if (0 === contentOffset.contentOffset.x) {
      let x = contentOffset.contentOffset.y;
    } else {
      x = contentOffset.contentOffset.x;
    }
    current.value = x;
  };
  fn.__closure = { offset: current };
  fn.__workletHash = 17316000082767;
  fn.__initData = closure_7;
  const event = _require(current[4]).useEvent(fn, closure_9);
  const items = [arg0, event];
  callback2(() => {
    if (closure_0) {
      return obj.observe((arg0) => {
        let closure_0 = arg0;
        if (arg0) {
          workletEventHandler.workletEventHandler.registerForEvents(arg0);
          return () => {
            outer1_2.workletEventHandler.unregisterFromEvents(closure_0);
          };
        } else {
          const logger = outer1_0(outer1_1[3]).logger;
          logger.warn(outer1_5);
        }
      });
    }
    obj = closure_0;
  }, items);
  return current;
});