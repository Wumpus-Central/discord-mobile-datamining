// === Module 5747: BottomSheetRotationResync ===

// Module 5747 (BottomSheetRotationResync)
import BottomSheetSnapPoints from "BottomSheetSnapPoints" /* 5399 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = { code: "(function BottomSheetRotationResyncNativeTsx1(){let[animatedIndex,animatedAnimationState,ANIMATION_STATE,isResyncPending]=this.__closure;return{index:animatedIndex.get(),isAnimating:animatedAnimationState.get()===ANIMATION_STATE.RUNNING,isPending:isResyncPending.get()};})" };
let closure_4 = { code: "(function BottomSheetRotationResyncNativeTsx2({index:index,isAnimating:isAnimating,isPending:isPending}){let[settledIndex,wasAtHighestSnapPoint,animatedSnapPoints]=this.__closure;if(isPending||isAnimating){return;}const roundedIndex=Math.round(index);if(roundedIndex<0||Math.abs(index-roundedIndex)>0.01){return;}settledIndex.set(roundedIndex);wasAtHighestSnapPoint.set(roundedIndex===animatedSnapPoints.get().length-1);})" };
let closure_5 = { code: "(function BottomSheetRotationResyncNativeTsx3(){let[animatedContainerHeight]=this.__closure;return animatedContainerHeight.get();})" };
let closure_6 = { code: "(function BottomSheetRotationResyncNativeTsx4(height,previousHeight){let[isResyncPending,runOnJS,scheduleResync]=this.__closure;if(previousHeight==null||previousHeight<=0||height<=0||height===previousHeight){return;}isResyncPending.set(true);runOnJS(scheduleResync)(true);})" };
let closure_7 = { code: "(function BottomSheetRotationResyncNativeTsx5(){let[animatedSnapPoints]=this.__closure;return animatedSnapPoints.get();})" };
let closure_8 = { code: "(function BottomSheetRotationResyncNativeTsx6(_snapPoints,previousSnapPoints){let[isResyncPending,runOnJS,scheduleResync]=this.__closure;if(previousSnapPoints==null||!isResyncPending.get()){return;}runOnJS(scheduleResync)(false);})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetRotationResync.native.tsx");

export function BottomSheetRotationResync(bottomSheetRef) {
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  _require = bottomSheetRef;
  const isExitingRef = bottomSheetRef.isExitingRef;
  const bottomSheetInternal = require("BottomSheetModal").useBottomSheetInternal();
  const animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  noop = animatedSnapPoints;
  const animatedContentGestureState = bottomSheetInternal.animatedContentGestureState;
  c3 = animatedContentGestureState;
  const animatedHandleGestureState = bottomSheetInternal.animatedHandleGestureState;
  ({ animatedContainerHeight, animatedIndex, animatedAnimationState } = bottomSheetInternal);
  let obj = require("BottomSheetModal");
  const sharedValue = require("module_1652").useSharedValue(-1);
  const obj2 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(false);
  const obj3 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(false);
  const ref = noop.useRef(null);
  noop.useRef(null);
  items = [animatedContentGestureState, animatedHandleGestureState, animatedSnapPoints, bottomSheetRef, isExitingRef, sharedValue2, sharedValue, sharedValue1];
  const callback = noop.useCallback(() => {
    closure_8.current = null;
    if (!_undefined2.current) {
      value = _undefined4.get();
      if (value !== LegacyBaseButton.State.ACTIVE) {
        value2 = animatedHandleGestureState.get();
        if (value2 !== LegacyBaseButton.State.ACTIVE) {
          const obj = { settledIndex: sharedValue.get(), wasAtHighestSnapPoint: sharedValue1.get(), snapPointCount: _undefined3.get().length };
          const rotationResyncIndex = BottomSheetSnapPoints.getRotationResyncIndex(obj);
          if (null != rotationResyncIndex) {
            const current = _undefined.current;
            if (current != null) {
              current.setToIndex(rotationResyncIndex);
            }
          }
          const tmp3Result = BottomSheetSnapPoints;
        }
      }
      const result = sharedValue2.set(false);
    }
  }, items);
  const items1 = [callback, sharedValue2];
  const callback1 = noop.useCallback((arg0) => {
    if (null != ref.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(ref.current);
    }
    ref.current = requestAnimationFrame(callback);
    if (arg0) {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
      }
      const _setTimeout = setTimeout;
      ref2.current = setTimeout(() => {
        ref2.current = null;
        const result = sharedValue2.set(false);
      }, 500);
    }
  }, items1);
  const effect = noop.useEffect(() => () => {
    if (null != ref.current) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(tmp.current);
    }
    if (null != ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp4.current);
    }
  }, []);
  const obj4 = require("module_1652");
  const items2 = [c3, animatedIndex, animatedAnimationState, require("BottomSheetModal").ANIMATION_STATE, sharedValue2];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class BottomSheetRotationResyncNativeTsx1 {
    constructor() {
      obj = { index: closure_0.get(), isAnimating: closure_1.get() === closure_2.RUNNING, isPending: closure_3.get() };
      return obj;
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14];
  BottomSheetRotationResyncNativeTsx1.__closure = items3;
  BottomSheetRotationResyncNativeTsx1.__workletHash = 332265499455;
  BottomSheetRotationResyncNativeTsx1.__initData = tmp10;
  const items4 = [animatedHandleGestureState, sharedValue, sharedValue1, animatedSnapPoints];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items4;
  class BottomSheetRotationResyncNativeTsx2 {
    constructor(arg0) {
      index = bottomSheetRef.index;
      if (!bottomSheetRef.isPending) {
        if (!bottomSheetRef.isAnimating) {
          tmp = globalThis;
          _Math = Math;
          rounded = Math.round(index);
          num = 0;
          tmp3 = rounded < 0;
          if (!tmp3) {
            _Math2 = Math;
            num2 = 0.01;
            tmp3 = Math.abs(index - rounded) > 0.01;
          }
          if (!tmp3) {
            tmp4 = closure_0;
            result = closure_0.set(rounded);
            tmp6 = closure_1;
            tmp7 = closure_2;
            num3 = 1;
            result1 = closure_1.set(rounded === closure_2.get().length - 1);
          }
        }
      }
      return;
    }
  }
  const items5 = [tmp16, tmp17, tmp18];
  BottomSheetRotationResyncNativeTsx2.__closure = items5;
  BottomSheetRotationResyncNativeTsx2.__workletHash = 5550662404596;
  BottomSheetRotationResyncNativeTsx2.__initData = tmp15;
  const animatedReaction = require("module_1652").useAnimatedReaction(BottomSheetRotationResyncNativeTsx1, BottomSheetRotationResyncNativeTsx2);
  const obj5 = require("module_1652");
  const items6 = [sharedValue, animatedContainerHeight];
  _require = undefined;
  [tmp20, tmp21] = items6;
  class BottomSheetRotationResyncNativeTsx3 {
    constructor() {
      return closure_0.get();
    }
  }
  const items7 = [tmp21];
  BottomSheetRotationResyncNativeTsx3.__closure = items7;
  BottomSheetRotationResyncNativeTsx3.__workletHash = 91405314278;
  BottomSheetRotationResyncNativeTsx3.__initData = tmp20;
  const items8 = [sharedValue1, sharedValue2, require("module_1652").runOnJS, callback1];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp22, tmp23, tmp24, tmp25] = items8;
  class BottomSheetRotationResyncNativeTsx4 {
    constructor(arg0, arg1) {
      tmp = null == arg1;
      if (!tmp) {
        num = 0;
        tmp = arg1 <= 0;
      }
      if (!tmp) {
        num2 = 0;
        tmp = bottomSheetRef <= 0;
      }
      if (!tmp) {
        tmp = bottomSheetRef === arg1;
      }
      if (!tmp) {
        tmp2 = closure_0;
        flag = true;
        result = closure_0.set(true);
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_1(closure_2)(true);
      }
      return;
    }
  }
  const items9 = [tmp23, tmp24, tmp25];
  BottomSheetRotationResyncNativeTsx4.__closure = items9;
  BottomSheetRotationResyncNativeTsx4.__workletHash = 10618511840168;
  BottomSheetRotationResyncNativeTsx4.__initData = tmp22;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(BottomSheetRotationResyncNativeTsx3, BottomSheetRotationResyncNativeTsx4);
  const tmpResult = require("module_1652");
  const items10 = [sharedValue2, animatedSnapPoints];
  _require = undefined;
  [tmp27, tmp28] = items10;
  class BottomSheetRotationResyncNativeTsx5 {
    constructor() {
      return closure_0.get();
    }
  }
  const items11 = [tmp28];
  BottomSheetRotationResyncNativeTsx5.__closure = items11;
  BottomSheetRotationResyncNativeTsx5.__workletHash = 8125636855552;
  BottomSheetRotationResyncNativeTsx5.__initData = tmp27;
  const items12 = [ref, sharedValue2, require("module_1652").runOnJS, callback1];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp29, tmp30, tmp31, tmp32] = items12;
  class BottomSheetRotationResyncNativeTsx6 {
    constructor(arg0, arg1) {
      value = null != arg1;
      if (value) {
        tmp2 = closure_0;
        value = closure_0.get();
      }
      if (value) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        flag = false;
        tmp5 = closure_1(closure_2)(false);
      }
      return;
    }
  }
  const items13 = [tmp30, tmp31, tmp32];
  BottomSheetRotationResyncNativeTsx6.__closure = items13;
  BottomSheetRotationResyncNativeTsx6.__workletHash = 16028021278103;
  BottomSheetRotationResyncNativeTsx6.__initData = tmp29;
  const animatedReaction2 = require("module_1652").useAnimatedReaction(BottomSheetRotationResyncNativeTsx5, BottomSheetRotationResyncNativeTsx6);
  return null;
}