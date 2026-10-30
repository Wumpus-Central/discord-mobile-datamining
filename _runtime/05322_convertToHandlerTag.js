// === Module 5322: convertToHandlerTag ===

// Module 5322 (convertToHandlerTag)
import _mod5301 from "module_5301" /* 5301 */;
import _mod5319 from "module_5319" /* 5319 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function convertToHandlerTag(handlerTag) {
  if (typeof handlerTag === "number") {
    return handlerTag;
  } else if (handlerTag instanceof _mod5319.BaseGesture) {
    let num = handlerTag.handlerTag;
  } else {
    const current = handlerTag.current;
    num = undefined;
    if (current != null) {
      num = current.handlerTag;
    }
    if (num == null) {
      num = -1;
    }
  }
}
const noop = fn(19);
({ useCallback: c3, useRef: closure_4, useState: hasOwnProperty } = noop);
let items = [...fn(5323).baseGestureHandlerWithDetectorProps, ...fn(5324).tapGestureHandlerProps, ...fn(5334).panGestureHandlerProps, ...fn(5334).panGestureHandlerCustomNativeProps, ...fn(5335).longPressGestureHandlerProps, ...fn(5336).forceTouchGestureHandlerProps, ...fn(5338).flingGestureHandlerProps, ...fn(5339).hoverGestureHandlerProps, ...fn(5340).nativeViewGestureHandlerProps];
function emptyWorklet() {

}
emptyWorklet.__closure = {};
emptyWorklet.__workletHash = 11436428848425;
emptyWorklet.__initData = { code: "function emptyWorklet_Pnpm_utilsTs1(){}" };

export const ALLOWED_PROPS = items;
export function extractGestureRelations(item10007) {
  const requireToFail = item10007.config.requireToFail;
  let found;
  if (requireToFail != null) {
    const mapped = requireToFail.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter((item) => item > 0);
    }
  }
  if (found == null) {
    found = [];
  }
  const obj = { waitFor: Array.from(new Set(found)), simultaneousHandlers: null, blocksHandlers: null };
  const simultaneousWith = item10007.config.simultaneousWith;
  let found1;
  if (simultaneousWith != null) {
    const mapped1 = simultaneousWith.map(convertToHandlerTag);
    if (mapped1 != null) {
      found1 = mapped1.filter((item) => item > 0);
    }
  }
  if (found1 == null) {
    found1 = [];
  }
  const set = new Set(found);
  obj.simultaneousHandlers = Array.from(new Set(found1));
  let found2;
  if (item10007.config.blocksHandlers != null) {
    const mapped2 = blocksHandlers.map(convertToHandlerTag);
    if (mapped2 != null) {
      found2 = mapped2.filter((item) => item > 0);
    }
  }
  if (found2 == null) {
    found2 = [];
  }
  const set1 = new Set(found1);
  obj.blocksHandlers = Array.from(new Set(found2));
  return obj;
}
export function checkGestureCallbacksForWorklets(item10022) {

}
export function useForceRender() {
  const tmp = _slicedToArray(hasOwnProperty(false), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  const items = [first, tmp[1]];
  return React3(() => {
    closure_1(!first);
  }, items);
}
export function useWebEventHandlers() {
  return React4({
    onGestureHandlerEvent(nativeEvent) {
      const result = _mod5301.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const result = _mod5301.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {

    }
  });
}