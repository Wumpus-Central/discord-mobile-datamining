// === Module 6139: ? ===

// Module 6139
import _mod1643 from "module_1643" /* 1643 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;

const require = globalThis.__r;
let _require, dependencyMap;

let __initData = { code: "function pnpm_useScrollEventsHandlersDefaultTs1(){const{_lockableScrollableContentOffsetY}=this.__closure;return _lockableScrollableContentOffsetY.value;}" };
let closure_3 = { code: "function pnpm_useScrollEventsHandlersDefaultTs2(_lockableScrollableContentOffsetY){const{lockableScrollableContentOffsetY}=this.__closure;if(lockableScrollableContentOffsetY){lockableScrollableContentOffsetY.value=_lockableScrollableContentOffsetY;}}" };
let closure_4 = { code: "function pnpm_useScrollEventsHandlersDefaultTs3({contentOffset:{y:y}},context){const{animatedSheetState,SHEET_STATE,animatedHandleGestureState,State,animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY}=this.__closure;if(animatedSheetState.value===SHEET_STATE.EXTENDED||animatedSheetState.value===SHEET_STATE.FILL_PARENT){context.shouldLockInitialPosition=false;}if(animatedHandleGestureState.value===State.ACTIVE){context.shouldLockInitialPosition=true;context.initialContentOffsetY=y;}if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}_lockableScrollableContentOffsetY.value=y;}" };
let closure_5 = { code: "function pnpm_useScrollEventsHandlersDefaultTs4({contentOffset:{y:y}},context){const{scrollableContentOffsetY,_lockableScrollableContentOffsetY,rootScrollableContentOffsetY,animatedSheetState,SHEET_STATE}=this.__closure;scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;context.initialContentOffsetY=y;if(animatedSheetState.value!==SHEET_STATE.EXTENDED&&animatedSheetState.value!==SHEET_STATE.FILL_PARENT&&y>0){context.shouldLockInitialPosition=true;}else{context.shouldLockInitialPosition=false;}}" };
const value = { code: "function pnpm_useScrollEventsHandlersDefaultTs5({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };
let closure_7 = { code: "function pnpm_useScrollEventsHandlersDefaultTs6({contentOffset:{y:y}},context){const{animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY}=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=0;_lockableScrollableContentOffsetY.value=0;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}}" };

export const useScrollEventsHandlersDefault = (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
  let fn2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj12;
  let obj6;
  let obj8;
  _require = animatedRef;
  dependencyMap = sharedValue;
  __initData = lockableScrollableContentOffsetY;
  const obj = require("react");
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const animatedSheetState = bottomSheetInternal.animatedSheetState;
  const animatedScrollableState = bottomSheetInternal.animatedScrollableState;
  const animatedAnimationState = bottomSheetInternal.animatedAnimationState;
  const animatedHandleGestureState = bottomSheetInternal.animatedHandleGestureState;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const obj2 = require("module_1643");
  sharedValue = obj2.useSharedValue(0);
  const obj3 = require("module_1643");
  const sharedValue1 = obj3.useSharedValue(false);
  const fn = function _() {
    return sharedValue.value;
  };
  fn.__closure = { _lockableScrollableContentOffsetY: sharedValue };
  fn.__workletHash = 4812983890833;
  fn.__initData = __initData;
  const obj4 = require("module_1643");
  class T {
    constructor(value) {
      if (lockableScrollableContentOffsetY) {
        tmp.value = value;
      }
    }
  }
  T.__closure = { lockableScrollableContentOffsetY };
  T.__workletHash = 2896583663542;
  T.__initData = animatedSheetState;
  const animatedReaction = obj4.useAnimatedReaction(fn, T);
  const obj5 = { handleOnScroll: obj6.useWorkletCallback(E, items), handleOnBeginDrag: obj8.useWorkletCallback(O, items1), handleOnEndDrag: obj10.useWorkletCallback(fn2, items2), handleOnMomentumEnd: obj12.useWorkletCallback(C, items3) };
  obj6 = require("module_1643");
  class E {
    constructor(contentOffset, shouldLockInitialPosition) {
      const y = contentOffset.contentOffset.y;
      const tmp3 = animatedSheetState.value !== GESTURE_SOURCE.SHEET_STATE.EXTENDED && animatedSheetState.value !== GESTURE_SOURCE.SHEET_STATE.FILL_PARENT;
      if (!tmp3) {
        shouldLockInitialPosition.shouldLockInitialPosition = false;
      }
      if (animatedHandleGestureState.value === LegacyBaseButton.State.ACTIVE) {
        shouldLockInitialPosition.shouldLockInitialPosition = true;
        shouldLockInitialPosition.initialContentOffsetY = y;
      }
      if (animatedScrollableState.value === GESTURE_SOURCE.SCROLLABLE_STATE.LOCKED) {
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
          const tmpResult = _mod1643;
          tmpResult.scrollTo(animatedRef, 0, num, false);
          sharedValue1.value = false;
          closure_1.value = num;
          sharedValue.value = num;
        }
      } else {
        sharedValue.value = y;
      }
    }
  }
  E.__closure = { animatedSheetState, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE, animatedHandleGestureState, State: require("LegacyBaseButton").State, animatedScrollableState, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("module_1643").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue };
  E.__workletHash = 9115820423560;
  E.__initData = animatedScrollableState;
  items = [animatedRef, sharedValue, animatedScrollableState, animatedSheetState, sharedValue1];
  ({ animatedSheetState, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE, animatedHandleGestureState, State: require("LegacyBaseButton").State, animatedScrollableState, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("module_1643").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue });
  obj8 = require("module_1643");
  class O {
    constructor(contentOffset, arg1) {
      const y = contentOffset.contentOffset.y;
      closure_1.value = y;
      sharedValue.value = y;
      animatedScrollableContentOffsetY.value = y;
      arg1.initialContentOffsetY = y;
      if (animatedSheetState.value !== GESTURE_SOURCE.SHEET_STATE.EXTENDED) {
        if (animatedSheetState.value !== GESTURE_SOURCE.SHEET_STATE.FILL_PARENT) {
          if (y > 0) {
            arg1.shouldLockInitialPosition = true;
          }
        }
      }
      arg1.shouldLockInitialPosition = false;
    }
  }
  O.__closure = { scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, rootScrollableContentOffsetY: animatedScrollableContentOffsetY, animatedSheetState, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE };
  O.__workletHash = 13124284367046;
  O.__initData = animatedAnimationState;
  items1 = [sharedValue, animatedSheetState, animatedScrollableContentOffsetY];
  ({ scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, rootScrollableContentOffsetY: animatedScrollableContentOffsetY, animatedSheetState, SHEET_STATE: require("GESTURE_SOURCE").SHEET_STATE });
  fn2 = function b(contentOffset, shouldLockInitialPosition) {
    const y = contentOffset.contentOffset.y;
    if (animatedScrollableState.value === GESTURE_SOURCE.SCROLLABLE_STATE.LOCKED) {
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
        const tmpResult = _mod1643;
        tmpResult.scrollTo(animatedRef, 0, num, false);
        sharedValue1.value = false;
        closure_1.value = num;
        sharedValue.value = num;
      }
    } else if (animatedAnimationState.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
      closure_1.value = y;
      sharedValue.value = y;
      animatedScrollableContentOffsetY.value = y;
    }
  };
  obj10 = require("module_1643");
  fn2.__closure = { animatedScrollableState, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("module_1643").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  fn2.__workletHash = 13045900298602;
  fn2.__initData = animatedHandleGestureState;
  items2 = [animatedRef, sharedValue, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY, sharedValue1];
  ({ animatedScrollableState, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("module_1643").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY });
  obj12 = require("module_1643");
  class C {
    constructor(contentOffset, shouldLockInitialPosition) {
      const y = contentOffset.contentOffset.y;
      if (animatedScrollableState.value === GESTURE_SOURCE.SCROLLABLE_STATE.LOCKED) {
        if (!sharedValue1.value) {
          let num2 = 0;
          if (shouldLockInitialPosition.shouldLockInitialPosition) {
            let num3 = shouldLockInitialPosition.initialContentOffsetY;
            if (num3 == null) {
              num3 = 0;
            }
            num2 = num3;
          }
          sharedValue1.value = true;
          const tmpResult = _mod1643;
          tmpResult.scrollTo(animatedRef, 0, num2, false);
          sharedValue1.value = false;
          closure_1.value = 0;
          sharedValue.value = 0;
        }
      } else if (animatedAnimationState.value !== GESTURE_SOURCE.ANIMATION_STATE.RUNNING) {
        closure_1.value = y;
        sharedValue.value = y;
        animatedScrollableContentOffsetY.value = y;
      }
    }
  }
  C.__closure = { animatedScrollableState, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("module_1643").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY };
  C.__workletHash = 15342705131849;
  C.__initData = animatedScrollableContentOffsetY;
  items3 = [sharedValue, animatedRef, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY, sharedValue1];
  ({ animatedScrollableState, SCROLLABLE_STATE: require("GESTURE_SOURCE").SCROLLABLE_STATE, isLockingScroll: sharedValue1, scrollTo: require("module_1643").scrollTo, scrollableRef: animatedRef, scrollableContentOffsetY: sharedValue, _lockableScrollableContentOffsetY: sharedValue, animatedAnimationState, ANIMATION_STATE: require("GESTURE_SOURCE").ANIMATION_STATE, rootScrollableContentOffsetY: animatedScrollableContentOffsetY });
  return obj5;
};