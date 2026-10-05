// === Module 1806: ? ===

// Module 1806
import react from "react" /* 19 */;
import module_1646 from "module_1646" /* 1646 */;

const require = globalThis.__r;
let _require, closure_0, closure_2, workletEventHandler;

let c2;
let c3;
let closure_4;
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
({ useCallback: c2, useEffect: c3, useRef: closure_4 } = react);
let c5 = "animatedRef is not initialized in useScrollViewOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.";
const __initData = { code: "function pnpm_useScrollViewOffsetTs1(){const{animatedRef,getWebScrollableElement,offset}=this.__closure;if(animatedRef){const element=getWebScrollableElement(animatedRef.current);offset.value=element.scrollLeft===0?element.scrollTop:element.scrollLeft;}}" };
const __initData2 = { code: "function pnpm_useScrollViewOffsetTs2(event){const{offset}=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;}" };
let closure_9 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];

export const useScrollViewOffset = module_1646.isWeb() ? (function useScrollViewOffsetWeb(animatedRef, arg1) {
  let current;
  _require = animatedRef;
  let sharedValue = arg1;
  const obj = require("module_1795");
  if (arg1 == null) {
    sharedValue = obj.useSharedValue(0);
  }
  current = closure_4(sharedValue).current;
  const fn = function _() {
    if (animatedRef) {
      current = animatedRef.current;
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
  const obj2 = { animatedRef, getWebScrollableElement, offset: current };
  fn.__closure = obj2;
  fn.__workletHash = 2244034762234;
  fn.__initData = __initData;
  const items = [animatedRef, current];
  const tmp3 = closure_2(fn, items);
  closure_2 = tmp3;
  const items1 = [animatedRef, tmp3];
  closure_3(() => {
    if (animatedRef) {
      return animatedRef.observe((arg0) => {
        let scrollableNode;
        const tmp = arg0;
        if (tmp) {
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
  }, items1);
  return current;
}) : (function useScrollViewOffsetNative(arg0, arg1) {
  let current;
  _require = arg0;
  let sharedValue = arg1;
  const obj = require("module_1795");
  const tmp2 = _require;
  const tmp3 = current;
  if (arg1 == null) {
    sharedValue = obj.useSharedValue(0);
  }
  current = closure_4(sharedValue).current;
  const fn = function _(contentOffset) {
    let x;
    if (0 === contentOffset.contentOffset.x) {
      x = contentOffset.contentOffset.y;
    } else {
      x = contentOffset.contentOffset.x;
    }
    current.value = x;
  };
  fn.__closure = { offset: current };
  fn.__workletHash = 17316000082767;
  fn.__initData = __initData2;
  const tmp2Result = tmp2(tmp3[4]);
  const event = tmp2Result.useEvent(fn, closure_9);
  const items = [arg0, event];
  closure_3(() => {
    if (closure_0) {
      return closure_0.observe((arg0) => {
        closure_0 = arg0;
        if (closure_0) {
          workletEventHandler = workletEventHandler.workletEventHandler;
          workletEventHandler.registerForEvents(arg0);
          return () => {
            workletEventHandler = event.workletEventHandler;
            workletEventHandler.unregisterFromEvents(closure_0);
          };
        } else {
          const logger = closure_1_0(current[3]).logger;
          logger.warn(closure_1_5);
        }
      });
    }
  }, items);
  return current;
});