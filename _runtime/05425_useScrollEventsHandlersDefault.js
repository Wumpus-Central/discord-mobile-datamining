// _runtime/05425_useScrollEventsHandlersDefault.js
import { cancelAnimation } from "01634_cancelAnimation.js";
import { GESTURE_SOURCE } from "05399_GESTURE_SOURCE.js";
import { useBottomSheetInternal } from "05406_useBottomSheetInternal.js";
import { Directions } from "05426_Directions.js";
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useScrollEventsHandlersDefaultTs1(){const{_lockableScrollableContentOffsetY}=this.__closure;return _lockableScrollableContentOffsetY.value;}" };
let closure_3 = { code: "function pnpm_useScrollEventsHandlersDefaultTs2(_lockableScrollableContentOffsetY){const{lockableScrollableContentOffsetY}=this.__closure;if(lockableScrollableContentOffsetY){lockableScrollableContentOffsetY.value=_lockableScrollableContentOffsetY;}}" };
let closure_4 = { code: "function pnpm_useScrollEventsHandlersDefaultTs3({contentOffset:{y:y}},context){const{animatedSheetState,SHEET_STATE,animatedHandleGestureState,State,animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY}=this.__closure;if(animatedSheetState.value===SHEET_STATE.EXTENDED||animatedSheetState.value===SHEET_STATE.FILL_PARENT){context.shouldLockInitialPosition=false;}if(animatedHandleGestureState.value===State.ACTIVE){context.shouldLockInitialPosition=true;context.initialContentOffsetY=y;}if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}_lockableScrollableContentOffsetY.value=y;}" };
let closure_5 = { code: "function pnpm_useScrollEventsHandlersDefaultTs4({contentOffset:{y:y}},context){const{scrollableContentOffsetY,_lockableScrollableContentOffsetY,rootScrollableContentOffsetY,animatedSheetState,SHEET_STATE}=this.__closure;scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;context.initialContentOffsetY=y;if(animatedSheetState.value!==SHEET_STATE.EXTENDED&&animatedSheetState.value!==SHEET_STATE.FILL_PARENT&&y>0){context.shouldLockInitialPosition=true;}else{context.shouldLockInitialPosition=false;}}" };
let closure_6 = { code: "function pnpm_useScrollEventsHandlersDefaultTs5({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };
let closure_7 = { code: "function pnpm_useScrollEventsHandlersDefaultTs6({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;scrollTo(scrollableRef,0,lockPosition,false);scrollableContentOffsetY.value=0;_lockableScrollableContentOffsetY.value=0;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };
arg5.useScrollEventsHandlersDefault = (scrollableRef, scrollableContentOffsetY, lockableScrollableContentOffsetY) => {
  const _require = scrollableRef;
  const dependencyMap = scrollableContentOffsetY;
  let closure_2 = lockableScrollableContentOffsetY;
  let obj = _useBottomSheetInternal;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedSheetState = bottomSheetInternal.animatedSheetState;
  const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
  const animatedAnimationState = bottomSheetInternal.animatedAnimationState;
  const animatedHandleGestureState = bottomSheetInternal.animatedHandleGestureState;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  let obj1 = _cancelAnimation;
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = _cancelAnimation;
  const fn = function _() {
    return sharedValue.value;
  };
  fn.__closure = { _lockableScrollableContentOffsetY: sharedValue };
  fn.__workletHash = 4812983890833;
  fn.__initData = closure_2;
  class T {
    constructor(arg0) {
      if (closure_2) {
        tmp2 = scrollableRef;
        tmp.value = scrollableRef;
      }
      return;
    }
  }
  T.__closure = { lockableScrollableContentOffsetY };
  T.__workletHash = 2896583663542;
  T.__initData = animatedSheetState;
  const animatedReaction = obj2.useAnimatedReaction(fn, T);
  obj = { handleOnScroll: null, handleOnBeginDrag: null, handleOnEndDrag: null, handleOnMomentumEnd: null };
  class E {
    constructor(arg0, arg1) {
      y = scrollableRef.contentOffset.y;
      tmp = closure_0;
      tmp2 = closure_1;
      iter = animatedSheetState;
      tmp3 = animatedSheetState.value !== closure_0(closure_1[2]).SHEET_STATE.EXTENDED;
      if (tmp3) {
        tmp3 = iter.value !== tmp(tmp2[2]).SHEET_STATE.FILL_PARENT;
      }
      if (!tmp3) {
        flag = false;
        scrollableContentOffsetY.shouldLockInitialPosition = false;
      }
      if (closure_6.value === tmp(tmp2[3]).State.ACTIVE) {
        flag2 = true;
        scrollableContentOffsetY.shouldLockInitialPosition = true;
        scrollableContentOffsetY.initialContentOffsetY = y;
      }
      if (animatedScrollableState.value === tmp(tmp2[2]).SCROLLABLE_STATE.LOCKED) {
        num = 0;
        if (scrollableContentOffsetY.shouldLockInitialPosition) {
          num2 = scrollableContentOffsetY.initialContentOffsetY;
          tmp5 = null;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        tmpResult = tmp(tmp2[1]);
        tmp6 = closure_0;
        flag3 = false;
        tmp7 = tmpResult;
        num3 = 0;
        tmp8 = num;
        scrollToResult = tmpResult.scrollTo(closure_0, 0, num, false);
        tmp10 = closure_1;
        closure_1.value = num;
        tmp11 = closure_8;
        closure_8.value = num;
        return;
      } else {
        tmp4 = closure_8;
        closure_8.value = y;
        return;
      }
    }
  }
  obj = { animatedSheetState, SHEET_STATE: _GESTURE_SOURCE.SHEET_STATE, animatedHandleGestureState, State: _Directions.State, animatedScrollableState, SCROLLABLE_STATE: _GESTURE_SOURCE.SCROLLABLE_STATE, scrollTo: _cancelAnimation.scrollTo, scrollableRef, scrollableContentOffsetY, _lockableScrollableContentOffsetY: sharedValue };
  E.__closure = obj;
  E.__workletHash = 5039788283731;
  E.__initData = animatedScrollableState;
  const items = [scrollableRef, scrollableContentOffsetY, animatedScrollableState, animatedSheetState];
  obj[0] = _cancelAnimation.useWorkletCallback(E, items);
  const obj5 = _cancelAnimation;
  class O {
    constructor(arg0, arg1) {
      y = scrollableRef.contentOffset.y;
      closure_1.value = y;
      closure_8.value = y;
      closure_7.value = y;
      scrollableContentOffsetY.initialContentOffsetY = y;
      iter = animatedSheetState;
      tmp = closure_0;
      tmp2 = closure_1;
      if (animatedSheetState.value !== closure_0(closure_1[2]).SHEET_STATE.EXTENDED) {
        if (iter.value !== tmp(tmp2[2]).SHEET_STATE.FILL_PARENT) {
          num = 0;
          if (y > 0) {
            flag = true;
            scrollableContentOffsetY.shouldLockInitialPosition = true;
          }
          return;
        }
      }
      scrollableContentOffsetY.shouldLockInitialPosition = false;
      return;
    }
  }
  obj1 = { scrollableContentOffsetY, _lockableScrollableContentOffsetY: sharedValue, rootScrollableContentOffsetY: animatedScrollableContentOffsetY, animatedSheetState, SHEET_STATE: _GESTURE_SOURCE.SHEET_STATE };
  O.__closure = obj1;
  O.__workletHash = 13124284367046;
  O.__initData = animatedAnimationState;
  const items1 = [scrollableContentOffsetY, animatedSheetState, animatedScrollableContentOffsetY];
  obj[1] = _cancelAnimation.useWorkletCallback(O, items1);
  const obj7 = _cancelAnimation;
  const fn2 = function b(contentOffset, shouldLockInitialPosition) {
    const y = contentOffset.contentOffset.y;
    if (animatedScrollableState.value === scrollableRef(scrollableContentOffsetY[2]).SCROLLABLE_STATE.LOCKED) {
      let num = 0;
      if (shouldLockInitialPosition.shouldLockInitialPosition) {
        let num2 = shouldLockInitialPosition.initialContentOffsetY;
        if (num2 == null) {
          num2 = 0;
        }
        num = num2;
      }
      const tmpResult = tmp(tmp2[1]);
      tmpResult.scrollTo(scrollableRef, 0, num, false);
      scrollableContentOffsetY.value = num;
      sharedValue.value = num;
    } else if (animatedAnimationState.value !== tmp(tmp2[2]).ANIMATION_STATE.RUNNING) {
      scrollableContentOffsetY.value = y;
      sharedValue.value = y;
      animatedScrollableContentOffsetY.value = y;
    }
  };
  obj2 = { animatedScrollableState, SCROLLABLE_STATE: _GESTURE_SOURCE.SCROLLABLE_STATE, scrollTo: _cancelAnimation.scrollTo, scrollableRef, scrollableContentOffsetY, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: _GESTURE_SOURCE.ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  fn2.__closure = obj2;
  fn2.__workletHash = 10064727970609;
  fn2.__initData = animatedHandleGestureState;
  const items2 = [scrollableRef, scrollableContentOffsetY, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY];
  obj[2] = _cancelAnimation.useWorkletCallback(fn2, items2);
  const obj9 = _cancelAnimation;
  class C {
    constructor(arg0, arg1) {
      y = scrollableRef.contentOffset.y;
      tmp = closure_0;
      tmp2 = closure_1;
      if (animatedScrollableState.value === closure_0(closure_1[2]).SCROLLABLE_STATE.LOCKED) {
        tmp7 = scrollableContentOffsetY;
        num = 0;
        num2 = 0;
        if (scrollableContentOffsetY.shouldLockInitialPosition) {
          num3 = scrollableContentOffsetY.initialContentOffsetY;
          tmp8 = null;
          if (num3 == null) {
            num3 = 0;
          }
          num2 = num3;
        }
        tmpResult = tmp(tmp2[1]);
        tmp9 = closure_0;
        flag = false;
        tmp10 = tmpResult;
        num4 = 0;
        tmp11 = num2;
        scrollToResult = tmpResult.scrollTo(closure_0, 0, num2, false);
        tmp13 = closure_1;
        closure_1.value = 0;
        tmp14 = closure_8;
        closure_8.value = 0;
        return;
      } else {
        tmp3 = animatedAnimationState;
        if (animatedAnimationState.value !== tmp(tmp2[2]).ANIMATION_STATE.RUNNING) {
          tmp4 = closure_1;
          closure_1.value = y;
          tmp5 = closure_8;
          closure_8.value = y;
          tmp6 = closure_7;
          closure_7.value = y;
        }
        return;
      }
    }
  }
  const obj11 = _cancelAnimation;
  C.__closure = { animatedScrollableState, SCROLLABLE_STATE: _GESTURE_SOURCE.SCROLLABLE_STATE, scrollTo: _cancelAnimation.scrollTo, scrollableRef, scrollableContentOffsetY, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: _GESTURE_SOURCE.ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  C.__workletHash = 15660341750098;
  C.__initData = animatedScrollableContentOffsetY;
  const items3 = [scrollableContentOffsetY, scrollableRef, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY];
  obj[3] = obj11.useWorkletCallback(C, items3);
  return obj;
};