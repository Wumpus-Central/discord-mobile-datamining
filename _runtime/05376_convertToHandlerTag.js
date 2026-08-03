import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let c5;
const require = arg1;
function convertToHandlerTag(handlerTag) {
  if (typeof handlerTag === "Object") {
    return handlerTag;
  } else if (handlerTag instanceof require(5378) /* _isNativeReflectConstruct */.BaseGesture) {
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
  item10007.config.requireToFail = Array.from(new Set(found));
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
  item10007.config.simultaneousWith = Array.from(new Set(found1));
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
  item10007.config.blocksHandlers = Array.from(new Set(found2));
  return { waitFor: item10007.config.requireToFail, simultaneousHandlers: item10007.config.simultaneousWith, blocksHandlers: item10007.config.blocksHandlers };
};
export function checkGestureCallbacksForWorklets(item10022) {

}
export const useForceRender = function useForceRender() {
  const tmp = callback(callback3(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  const items = [first, tmp[1]];
  return callback2(() => {
    tmp3(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  const obj = {
    onGestureHandlerEvent(nativeEvent) {
      const result = callback(5341).onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange: null
  };
  let fn;
  if (obj2.isNewWebImplementationEnabled()) {
    fn = (nativeEvent) => {
      const result = callback(5341).onGestureHandlerEvent(nativeEvent.nativeEvent);
    };
  }
  obj[1] = fn;
  return closure_4(obj);
};