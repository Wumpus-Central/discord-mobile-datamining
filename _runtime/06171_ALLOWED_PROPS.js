// _runtime/06171_ALLOWED_PROPS.js
import _mod6150 from "metro/06150__.js";
import CALLBACK_TYPE from "06168_CALLBACK_TYPE.js";
import baseGestureHandlerProps from "06172_baseGestureHandlerProps.js";
import tapGestureHandlerProps from "06173_tapGestureHandlerProps.js";
import panGestureHandlerProps from "06183_panGestureHandlerProps.js";
import longPressGestureHandlerProps from "06184_longPressGestureHandlerProps.js";
import forceTouchGestureHandlerProps from "06185_forceTouchGestureHandlerProps.js";
import flingGestureHandlerProps from "06187_flingGestureHandlerProps.js";
import HoverEffect from "06188_HoverEffect.js";
import nativeViewGestureHandlerProps from "06189_nativeViewGestureHandlerProps.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";

let c3;
let closure_4;
let hasOwnProperty;
function convertToHandlerTag(handlerTag) {
  let tmp = handlerTag;
  if (typeof handlerTag !== "number") {
    let num;
    if (handlerTag instanceof CALLBACK_TYPE.BaseGesture) {
      num = handlerTag.handlerTag;
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
    tmp = num;
  }
  return tmp;
}
({ useCallback: c3, useRef: closure_4, useState: hasOwnProperty } = react);
let items = [
  ...baseGestureHandlerProps.baseGestureHandlerWithDetectorProps,
  ...tapGestureHandlerProps.tapGestureHandlerProps,
  ...panGestureHandlerProps.panGestureHandlerProps,
  ...panGestureHandlerProps.panGestureHandlerCustomNativeProps,
  ...longPressGestureHandlerProps.longPressGestureHandlerProps,
  ...forceTouchGestureHandlerProps.forceTouchGestureHandlerProps,
  ...flingGestureHandlerProps.flingGestureHandlerProps,
  ...HoverEffect.hoverGestureHandlerProps,
  ...nativeViewGestureHandlerProps.nativeViewGestureHandlerProps,
];
function emptyWorklet() {}
emptyWorklet.__closure = {};
emptyWorklet.__workletHash = 11436428848425;
emptyWorklet.__initData = { code: "function emptyWorklet_Pnpm_utilsTs1(){}" };

export const ALLOWED_PROPS = items;
export const extractGestureRelations = function extractGestureRelations(item10007) {
  let _Set1;
  let _Set21;
  let _Set31;
  let from2;
  let from3;
  const f91645 = (item) => item > 0;
  const requireToFail = item10007.config.requireToFail;
  let found;
  const _Array = Array;
  const _Set = Set;
  if (requireToFail != null) {
    const mapped = requireToFail.map(convertToHandlerTag);
    if (mapped != null) {
      found = mapped.filter(f91645);
    }
  }
  if (found == null) {
    found = [];
  }
  const obj = { waitFor: from(_Set1), simultaneousHandlers: from2(_Set21), blocksHandlers: from3(_Set31) };
  _Set1 = new _Set(found);
  const simultaneousWith = item10007.config.simultaneousWith;
  let found1;
  const _Array2 = Array;
  from2 = Array.from;
  const _Set2 = Set;
  if (simultaneousWith != null) {
    const mapped1 = simultaneousWith.map(convertToHandlerTag);
    if (mapped1 != null) {
      found1 = mapped1.filter(f91645);
    }
  }
  if (found1 == null) {
    found1 = [];
  }
  _Set21 = new _Set2(found1);
  let found2;
  const _Array3 = Array;
  from3 = Array.from;
  const _Set3 = Set;
  if (item10007.config.blocksHandlers != null) {
    const mapped2 = blocksHandlers.map(convertToHandlerTag);
    if (mapped2 != null) {
      found2 = mapped2.filter(f91645);
    }
  }
  if (found2 == null) {
    found2 = [];
  }
  _Set31 = new _Set3(found2);
  return obj;
};
export function checkGestureCallbacksForWorklets(item10022) {}
export const useForceRender = function useForceRender() {
  const tmp = _slicedToArray(hasOwnProperty(false), 2);
  const first = tmp[0];
  let closure_1 = tmp3;
  const items = [first, tmp[1]];
  return _false(() => {
    closure_1(!first);
  }, items);
};
export const useWebEventHandlers = function useWebEventHandlers() {
  let obj = {
    onGestureHandlerEvent(nativeEvent) {
      const obj = _mod6150;
      const result = obj.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerStateChange(nativeEvent) {
      const obj = _mod6150;
      const result = obj.onGestureHandlerEvent(nativeEvent.nativeEvent);
    },
    onGestureHandlerTouchEvent() {},
  };
  return React3(obj);
};
