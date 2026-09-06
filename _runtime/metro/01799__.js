// === Module 1799: ? ===

// Module 1799
import noop from "module_19" /* 19 */;
import module_1639 from "module_1639" /* 1639 */;

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
({ useCallback: c2, useEffect: c3, useRef: closure_4 } = noop);
let c5 = "animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.";
const __initData = { code: "function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}" };
const __initData2 = { code: "function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}" };
let closure_9 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];

export const useScrollViewOffset = module_1639.isWeb() ? (function useScrollViewOffsetWeb(animatedRef, arg1) {
  _require = animatedRef;
  let sharedValue = arg1;
  let obj = require("module_1788");
  if (arg1 == null) {
    sharedValue = obj.useSharedValue(0);
  }
  current = closure_4(sharedValue).current;
  const fn = function _() {
    if (closure_0) {
      current = tmp.current;
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
  fn.__initData = __initData;
  const items = [animatedRef, current];
  const tmp3 = closure_2(fn, items);
  closure_2 = tmp3;
  const items1 = [animatedRef, tmp3];
  closure_3(() => {
    if (closure_0) {
      return obj.observe((arg0) => {
        if (arg0) {
          current = scrollableNode.current;
          scrollableNode = undefined;
          if (current != null) {
            scrollableNode = current.getScrollableNode();
          }
          if (scrollableNode == null) {
            scrollableNode = current;
          }
          const listener = scrollableNode.addEventListener("scroll", closure_2);
          return () => {
            const removed = scrollableNode.removeEventListener("scroll", closure_2_2);
          };
        } else {
          const logger = animatedRef(closure_1_1[3]).logger;
          logger.warn(closure_1_5);
        }
      });
    }
    obj = closure_0;
  }, items1);
  return current;
}) : (function useScrollViewOffsetNative(arg0, arg1) {
  _require = arg0;
  let sharedValue = arg1;
  if (arg1 == null) {
    sharedValue = obj.useSharedValue(0);
  }
  const current = closure_4(sharedValue).current;
  obj = require("module_1788");
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
  fn.__initData = __initData2;
  const event = require("module_1783").useEvent(fn, closure_9);
  const items = [arg0, event];
  closure_3(() => {
    if (closure_0) {
      return obj.observe((arg0) => {
        closure_0 = arg0;
        if (arg0) {
          workletEventHandler.workletEventHandler.registerForEvents(arg0);
          return () => {
            event.workletEventHandler.unregisterFromEvents(closure_0);
          };
        } else {
          const logger = closure_1_0(current[3]).logger;
          logger.warn(closure_1_5);
        }
      });
    }
    obj = closure_0;
  }, items);
  return current;
});