// _runtime/05444_convertToHandlerTag.js
import _mod5422 from "metro/05422__.js";
import _mod5440 from "metro/05440__.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
function convertToHandlerTag(handlerTag) {
  if (typeof handlerTag === "number") {
    return handlerTag;
  } else if (handlerTag instanceof _mod5440.BaseGesture) {
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
let items = [
  ...fn(5445).baseGestureHandlerWithDetectorProps,
  ...fn(5446).tapGestureHandlerProps,
  ...fn(5457).panGestureHandlerProps,
  ...fn(5457).panGestureHandlerCustomNativeProps,
  ...fn(5458).longPressGestureHandlerProps,
  ...fn(5459).forceTouchGestureHandlerProps,
  ...fn(5461).flingGestureHandlerProps,
  ...fn(5462).hoverGestureHandlerProps,
  ...fn(5463).nativeViewGestureHandlerProps,
];
const items1 = [{ code: "(function emptyWorklet_Pnpm_utilsTs1(){})" }];
[tmp3] = items1;
function emptyWorklet() {}
emptyWorklet.__workletHash = 14308112991912;
emptyWorklet.__initData = tmp3;

export const ALLOWED_PROPS = items;
export function hasExternalRelations(gesturesToAttach) {
  new Set(gesturesToAttach);
  const iter = gesturesToAttach[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    items = [nextResult.config.blocksHandlers, nextResult.config.requireToFail, nextResult.config.simultaneousWith];
    for (const item10026 of items) {
      if (undefined !== item10026) {
        for (const item10033 of item10026) {
          if (typeof item10033 !== "number") {
            obj3.return();
            obj2.return();
            iter.return();
            let flag = true;
            return true;
          }
          continue;
        }
      }
      continue;
    }
    continue;
  }
  return false;
}
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
export function checkGestureCallbacksForWorklets(item10022) {}
export function useForceRender() {
  const tmp = _slicedToArray(hasOwnProperty(false), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  items = [first, tmp[1]];
  return React3(() => {
    closure_1(!first);
  }, items);
}
export function useWebEventHandlers() {
  return React4({
    onGestureHandlerEvent(nativeEvent) {
      const result = _mod5422.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const result = _mod5422.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {},
  });
}
