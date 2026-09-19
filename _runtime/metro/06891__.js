// === Module 6891: ? ===

// Module 6891
import cancelAnimation from "cancelAnimation" /* 1637 */;
import value2 from "value2" /* 6865 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6892 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
let __initData = { code: "function pnpm_useScrollEventsHandlersDefaultTs1(){const{_lockableScrollableContentOffsetY}=this.__closure;return _lockableScrollableContentOffsetY.value;}" };
let closure_3 = { code: "function pnpm_useScrollEventsHandlersDefaultTs2(_lockableScrollableContentOffsetY){const{lockableScrollableContentOffsetY}=this.__closure;if(lockableScrollableContentOffsetY){lockableScrollableContentOffsetY.value=_lockableScrollableContentOffsetY;}}" };
let closure_4 = { code: "function pnpm_useScrollEventsHandlersDefaultTs3({contentOffset:{y:y}},context){const{animatedSheetState,SHEET_STATE,animatedHandleGestureState,State,animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY}=this.__closure;if(animatedSheetState.value===SHEET_STATE.EXTENDED||animatedSheetState.value===SHEET_STATE.FILL_PARENT){context.shouldLockInitialPosition=false;}if(animatedHandleGestureState.value===State.ACTIVE){context.shouldLockInitialPosition=true;context.initialContentOffsetY=y;}if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}_lockableScrollableContentOffsetY.value=y;}" };
let closure_5 = { code: "function pnpm_useScrollEventsHandlersDefaultTs4({contentOffset:{y:y}},context){const{scrollableContentOffsetY,_lockableScrollableContentOffsetY,rootScrollableContentOffsetY,animatedSheetState,SHEET_STATE}=this.__closure;scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;context.initialContentOffsetY=y;if(animatedSheetState.value!==SHEET_STATE.EXTENDED&&animatedSheetState.value!==SHEET_STATE.FILL_PARENT&&y>0){context.shouldLockInitialPosition=true;}else{context.shouldLockInitialPosition=false;}}" };
const value = { code: "function pnpm_useScrollEventsHandlersDefaultTs5({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };
let closure_7 = { code: "function pnpm_useScrollEventsHandlersDefaultTs6({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=0;_lockableScrollableContentOffsetY.value=0;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };

export const useScrollEventsHandlersDefault = (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
  _require = animatedRef;
  dependencyMap = sharedValue;
  __initData = lockableScrollableContentOffsetY;
  const bottomSheetInternal = require("module_6872").useBottomSheetInternal();
  const animatedSheetState = bottomSheetInternal.animatedSheetState;
  const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
  const animatedAnimationState = bottomSheetInternal.animatedAnimationState;
  const animatedHandleGestureState = bottomSheetInternal.animatedHandleGestureState;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const obj = require("module_6872");
  sharedValue = require("cancelAnimation").useSharedValue(0);
  const obj2 = require("cancelAnimation");
  const sharedValue1 = require("cancelAnimation").useSharedValue(false);
  const obj3 = require("cancelAnimation");
  const fn = function _() {
    return sharedValue.value;
  };
  fn.__closure = { _lockableScrollableContentOffsetY: sharedValue };
  fn.__workletHash = 4812983890833;
  fn.__initData = __initData;
  class T {
    constructor(arg0) {
      if (closure_2) {
        tmp2 = animatedRef;
        tmp.value = animatedRef;
      }
      return;
    }
  }
  T.__closure = { lockableScrollableContentOffsetY };
  T.__workletHash = 2896583663542;
  T.__initData = animatedSheetState;
  const animatedReaction = require("cancelAnimation").useAnimatedReaction(fn, T);
  const obj5 = { handleOnScroll: null, handleOnBeginDrag: null, handleOnEndDrag: null, handleOnMomentumEnd: null };
  const obj4 = require("cancelAnimation");
  class E {
    constructor(arg0, arg1) {
      y = animatedRef.contentOffset.y;
      tmp = closure_0;
      tmp2 = closure_1;
      iter = animatedSheetState;
      tmp3 = animatedSheetState.value !== closure_0(closure_1[2]).SHEET_STATE.EXTENDED;
      if (tmp3) {
        tmp3 = iter.value !== tmp(tmp2[2]).SHEET_STATE.FILL_PARENT;
      }
      if (!tmp3) {
        flag = false;
        sharedValue.shouldLockInitialPosition = false;
      }
      if (closure_6.value === tmp(tmp2[3]).State.ACTIVE) {
        flag2 = true;
        sharedValue.shouldLockInitialPosition = true;
        sharedValue.initialContentOffsetY = y;
      }
      if (animatedScrollableState.value === tmp(tmp2[2]).SCROLLABLE_STATE.LOCKED) {
        tmp5 = closure_9;
        if (closure_9.value) {
          return;
        } else {
          num = 0;
          if (sharedValue.shouldLockInitialPosition) {
            num2 = sharedValue.initialContentOffsetY;
            tmp6 = null;
            if (num2 == null) {
              num2 = 0;
            }
            num = num2;
          }
          flag3 = true;
          tmp5.value = true;
          tmpResult = tmp(tmp2[1]);
          tmp7 = closure_0;
          flag4 = false;
          tmp8 = tmpResult;
          num3 = 0;
          tmp9 = num;
          flag5 = false;
          scrollToResult = tmpResult.scrollTo(closure_0, 0, num, false);
          tmp5.value = false;
          tmp11 = closure_1;
          closure_1.value = num;
          tmp12 = closure_8;
          closure_8.value = num;
          return;
        }
      } else {
        tmp4 = closure_8;
        closure_8.value = y;
        return;
      }
    }
  }
  const obj6 = require("cancelAnimation");
  E.__closure = { animatedSheetState, SHEET_STATE: require("value2").SHEET_STATE, animatedHandleGestureState, State: require("LegacyBaseButton").State, animatedScrollableState, SCROLLABLE_STATE: require("value2").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("cancelAnimation").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue };
  E.__workletHash = 9115820423560;
  E.__initData = animatedScrollableState;
  const items = [animatedRef, sharedValue, animatedScrollableState, animatedSheetState, sharedValue1];
  obj5.handleOnScroll = obj6.useWorkletCallback(E, items);
  const obj7 = { animatedSheetState, SHEET_STATE: require("value2").SHEET_STATE, animatedHandleGestureState, State: require("LegacyBaseButton").State, animatedScrollableState, SCROLLABLE_STATE: require("value2").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("cancelAnimation").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue };
  class O {
    constructor(arg0, arg1) {
      y = animatedRef.contentOffset.y;
      closure_1.value = y;
      closure_8.value = y;
      closure_7.value = y;
      sharedValue.initialContentOffsetY = y;
      iter = animatedSheetState;
      tmp = closure_0;
      tmp2 = closure_1;
      if (animatedSheetState.value !== closure_0(closure_1[2]).SHEET_STATE.EXTENDED) {
        if (iter.value !== tmp(tmp2[2]).SHEET_STATE.FILL_PARENT) {
          num = 0;
          if (y > 0) {
            flag = true;
            sharedValue.shouldLockInitialPosition = true;
          }
          return;
        }
      }
      sharedValue.shouldLockInitialPosition = false;
      return;
    }
  }
  const obj8 = require("cancelAnimation");
  O.__closure = { scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, rootScrollableContentOffsetY: animatedScrollableContentOffsetY, animatedSheetState, SHEET_STATE: require("value2").SHEET_STATE };
  O.__workletHash = 13124284367046;
  O.__initData = animatedAnimationState;
  const items1 = [sharedValue, animatedSheetState, animatedScrollableContentOffsetY];
  obj5.handleOnBeginDrag = obj8.useWorkletCallback(O, items1);
  const obj9 = { scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, rootScrollableContentOffsetY: animatedScrollableContentOffsetY, animatedSheetState, SHEET_STATE: require("value2").SHEET_STATE };
  const fn2 = function b(contentOffset, shouldLockInitialPosition) {
    const y = contentOffset.contentOffset.y;
    if (animatedScrollableState.value === value2.SCROLLABLE_STATE.LOCKED) {
      if (!sharedValue1.value) {
        let num = 0;
        if (shouldLockInitialPosition.shouldLockInitialPosition) {
          let num2 = shouldLockInitialPosition.initialContentOffsetY;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        sharedValue1.value = true;
        const tmpResult = cancelAnimation;
        tmpResult.scrollTo(closure_0, 0, num, false);
        sharedValue1.value = false;
        closure_1.value = num;
        sharedValue.value = num;
      }
    } else if (animatedAnimationState.value !== value2.ANIMATION_STATE.RUNNING) {
      closure_1.value = y;
      sharedValue.value = y;
      animatedScrollableContentOffsetY.value = y;
    }
  };
  const obj10 = require("cancelAnimation");
  fn2.__closure = { animatedScrollableState, SCROLLABLE_STATE: require("value2").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("cancelAnimation").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("value2").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  fn2.__workletHash = 13045900298602;
  fn2.__initData = animatedHandleGestureState;
  const items2 = [animatedRef, sharedValue, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY, sharedValue1];
  obj5.handleOnEndDrag = obj10.useWorkletCallback(fn2, items2);
  const obj11 = { animatedScrollableState, SCROLLABLE_STATE: require("value2").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("cancelAnimation").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("value2").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  class C {
    constructor(arg0, arg1) {
      y = animatedRef.contentOffset.y;
      tmp = closure_0;
      tmp2 = closure_1;
      if (animatedScrollableState.value === closure_0(closure_1[2]).SCROLLABLE_STATE.LOCKED) {
        tmp7 = closure_9;
        if (closure_9.value) {
          return;
        } else {
          tmp8 = sharedValue;
          num = 0;
          num2 = 0;
          if (sharedValue.shouldLockInitialPosition) {
            num3 = sharedValue.initialContentOffsetY;
            tmp9 = null;
            if (num3 == null) {
              num3 = 0;
            }
            num2 = num3;
          }
          flag = true;
          tmp7.value = true;
          tmpResult = tmp(tmp2[1]);
          tmp10 = closure_0;
          flag2 = false;
          tmp11 = tmpResult;
          num4 = 0;
          tmp12 = num2;
          flag3 = false;
          scrollToResult = tmpResult.scrollTo(closure_0, 0, num2, false);
          tmp7.value = false;
          tmp14 = closure_1;
          closure_1.value = 0;
          tmp15 = closure_8;
          closure_8.value = 0;
          return;
        }
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
  const obj12 = require("cancelAnimation");
  C.__closure = { animatedScrollableState, SCROLLABLE_STATE: require("value2").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("cancelAnimation").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("value2").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  C.__workletHash = 15342705131849;
  C.__initData = animatedScrollableContentOffsetY;
  const items3 = [sharedValue, animatedRef, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY, sharedValue1];
  obj5.handleOnMomentumEnd = obj12.useWorkletCallback(C, items3);
  return obj5;
};