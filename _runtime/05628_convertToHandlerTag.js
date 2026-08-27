// _runtime/05628_convertToHandlerTag.js
import _isNativeReflectConstruct from "05625__isNativeReflectConstruct.js";
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

require = arg1;
function convertToHandlerTag(num) {
  if (typeof num === "number") {
    return num;
  } else if (num instanceof _isNativeReflectConstruct.BaseGesture) {
    num = num.handlerTag;
  } else {
    const current = num.current;
    num = undefined;
    if (current != null) {
      num = current.handlerTag;
    }
    if (num == null) {
      num = -1;
    }
  }
}
({ useCallback: c3, useRef: c4, useState: c5 } = noop);
let items = [...require("items1").baseGestureHandlerWithDetectorProps, ...require("items1").tapGestureHandlerProps, ...require("managePanProps").panGestureHandlerProps, ...require("managePanProps").panGestureHandlerCustomNativeProps, ...require("items1").longPressGestureHandlerProps, ...require("_isNativeReflectConstruct").forceTouchGestureHandlerProps, ...require("items1").flingGestureHandlerProps, ...require("_isNativeReflectConstruct").hoverGestureHandlerProps, ...require("items").nativeViewGestureHandlerProps];
function emptyWorklet() {

}
emptyWorklet.__closure = {};
emptyWorklet.__workletHash = 11436428848425;
emptyWorklet.__initData = { code: "function emptyWorklet_Pnpm_utilsTs1(){}" };

export const ALLOWED_PROPS = items;
export const extractGestureRelations = function extractGestureRelations(item10007) {
  const requireToFail = item10007.config.requireToFail;
  let found;
  if (requireToFail != null) {
    const mapped = requireToFail.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter((arg0) => arg0 > 0);
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
      found1 = mapped1.filter((arg0) => arg0 > 0);
    }
  }
  if (found1 == null) {
    found1 = [];
  }
  const set = new Set(found);
  obj[1] = Array.from(new Set(found1));
  let found2;
  if (item10007.config.blocksHandlers != null) {
    const mapped2 = blocksHandlers.map(convertToHandlerTag);
    if (mapped2 != null) {
      found2 = mapped2.filter((arg0) => arg0 > 0);
    }
  }
  if (found2 == null) {
    found2 = [];
  }
  const set1 = new Set(found1);
  obj[2] = Array.from(new Set(found2));
  return obj;
};
export function checkGestureCallbacksForWorklets(item10022) {

}
export const useForceRender = function useForceRender() {
  const tmp = callback(callback4(false), 2);
  const first = tmp[0];
  closure_1 = tmp3;
  const items = [first, tmp[1]];
  return callback2(() => {
    callback(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  return callback3({
    onGestureHandlerEvent(nativeEvent) {
      const result = callback(5607).onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const result = callback(5607).onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {

    }
  });
};