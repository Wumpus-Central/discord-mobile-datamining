// === Module 1912: useScrollOffsetNative ===

// Module 1912 (useScrollOffsetNative)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
let closure_5 = { code: "(function pnpm_useScrollOffsetNativeTs1(event){let[offset]=this.__closure;offset.value=event.contentOffset.x===0?event.contentOffset.y:event.contentOffset.x;})" };

export function useScrollOffset(animatedRef, scrollViewOffset) {
  _require = animatedRef;
  let sharedValue = scrollViewOffset;
  if (scrollViewOffset == null) {
    sharedValue = obj.useSharedValue(0);
  }
  const current = closure_3(sharedValue).current;
  obj = require("module_1894");
  items = [closure_5, current];
  _require = undefined;
  [tmp5, tmp6] = items;
  function pnpm_useScrollOffsetNativeTs1(contentOffset) {
    if (0 === contentOffset.contentOffset.x) {
      let x = contentOffset.contentOffset.y;
    } else {
      x = contentOffset.contentOffset.x;
    }
    c0.value = x;
  }
  const items1 = [tmp6];
  pnpm_useScrollOffsetNativeTs1.__closure = items1;
  pnpm_useScrollOffsetNativeTs1.__workletHash = 13911422777369;
  pnpm_useScrollOffsetNativeTs1.__initData = tmp5;
  event = require("module_1902").useEvent(pnpm_useScrollOffsetNativeTs1, closure_4);
  const items2 = [animatedRef, event];
  closure_2(() => {
    if (_undefined) {
      return _undefined.observe((findNodeHandleResult) => {
        closure_0 = findNodeHandleResult;
        if (findNodeHandleResult) {
          workletEventHandler.workletEventHandler.registerForEvents(findNodeHandleResult);
          return () => {
            event.workletEventHandler.unregisterFromEvents(closure_0);
          };
        } else {
          const logger = _undefined(event[3]).logger;
          logger.warn("animatedRef is not initialized in useScrollOffset. Make sure to pass the animated ref to the scrollable component to get scroll offset updates.");
        }
      });
    }
  }, items2);
  return current;
}