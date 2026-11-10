// === Module 5421: useScrollEventsHandlersDefault ===

// Module 5421 (useScrollEventsHandlersDefault)
import _mod19 from "module_19" /* 19 */;
import _mod1652 from "module_1652" /* 1652 */;
import value2 from "value2" /* 5395 */;
import _mod5402 from "module_5402" /* 5402 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;

_mod19.useCallback;
let closure_3 = { code: "(function pnpm_useScrollEventsHandlersDefaultTs1(){let[_lockableScrollableContentOffsetY]=this.__closure;return _lockableScrollableContentOffsetY.value;})" };
let closure_4 = { code: "(function pnpm_useScrollEventsHandlersDefaultTs2(_lockableScrollableContentOffsetY){let[lockableScrollableContentOffsetY]=this.__closure;if(lockableScrollableContentOffsetY){lockableScrollableContentOffsetY.value=_lockableScrollableContentOffsetY;}})" };
let closure_5 = { code: "(function pnpm_useScrollEventsHandlersDefaultTs3({contentOffset:{y:y}},context){let[animatedSheetState,SHEET_STATE,animatedHandleGestureState,State,animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY]=this.__closure;if(animatedSheetState.value===SHEET_STATE.EXTENDED||animatedSheetState.value===SHEET_STATE.FILL_PARENT){context.shouldLockInitialPosition=false;}if(animatedHandleGestureState.value===State.ACTIVE){context.shouldLockInitialPosition=true;context.initialContentOffsetY=y;}if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}_lockableScrollableContentOffsetY.value=y;})" };
let closure_6 = { code: "(function pnpm_useScrollEventsHandlersDefaultTs4({contentOffset:{y:y}},context){let[scrollableContentOffsetY,_lockableScrollableContentOffsetY,rootScrollableContentOffsetY,animatedSheetState,SHEET_STATE]=this.__closure;scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;context.initialContentOffsetY=y;if(animatedSheetState.value!==SHEET_STATE.EXTENDED&&animatedSheetState.value!==SHEET_STATE.FILL_PARENT&&y>0){context.shouldLockInitialPosition=true;}else{context.shouldLockInitialPosition=false;}})" };
let closure_7 = { code: "(function pnpm_useScrollEventsHandlersDefaultTs5({contentOffset:{y:y}},context){let[animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY]=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=lockPosition;_lockableScrollableContentOffsetY.value=lockPosition;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}})" };
let closure_8 = { code: "(function pnpm_useScrollEventsHandlersDefaultTs6({contentOffset:{y:y}},context){let[animatedScrollableState,SCROLLABLE_STATE,isLockingScroll,scrollTo,scrollableRef,scrollableContentOffsetY,_lockableScrollableContentOffsetY,animatedAnimationState,ANIMATION_STATE,rootScrollableContentOffsetY]=this.__closure;if(animatedScrollableState.value===SCROLLABLE_STATE.LOCKED){var _context$initialConte;if(isLockingScroll.value){return;}const lockPosition=context.shouldLockInitialPosition?(_context$initialConte=context.initialContentOffsetY)!==null&&_context$initialConte!==void 0?_context$initialConte:0:0;isLockingScroll.value=true;scrollTo(scrollableRef,0,lockPosition,false);isLockingScroll.value=false;scrollableContentOffsetY.value=0;_lockableScrollableContentOffsetY.value=0;return;}if(animatedAnimationState.value!==ANIMATION_STATE.RUNNING){scrollableContentOffsetY.value=y;_lockableScrollableContentOffsetY.value=y;rootScrollableContentOffsetY.value=y;}})" };

export (animatedRef, sharedValue, lockableScrollableContentOffsetY) => {
  const bottomSheetInternal = _mod5402.useBottomSheetInternal();
  ({ animatedSheetState, animatedScrollableState, animatedAnimationState, animatedScrollableContentOffsetY, animatedHandleGestureState } = bottomSheetInternal);
  sharedValue = _mod1652.useSharedValue(0);
  const sharedValue1 = _mod1652.useSharedValue(false);
  items = [_undefined4, sharedValue];
  [tmp6, tmp7] = items;
  function pnpm_useScrollEventsHandlersDefaultTs1() {
    return _undefined.value;
  }
  const items1 = [tmp7];
  pnpm_useScrollEventsHandlersDefaultTs1.__closure = items1;
  pnpm_useScrollEventsHandlersDefaultTs1.__workletHash = 16601384524296;
  pnpm_useScrollEventsHandlersDefaultTs1.__initData = tmp6;
  const items2 = [_undefined5, lockableScrollableContentOffsetY];
  [tmp8, tmp9] = items2;
  function pnpm_useScrollEventsHandlersDefaultTs2(value) {
    if (c0) {
      tmp.value = value;
    }
  }
  const items3 = [tmp9];
  pnpm_useScrollEventsHandlersDefaultTs2.__closure = items3;
  pnpm_useScrollEventsHandlersDefaultTs2.__workletHash = 1889455945103;
  pnpm_useScrollEventsHandlersDefaultTs2.__initData = tmp8;
  const animatedReaction = _mod1652.useAnimatedReaction(pnpm_useScrollEventsHandlersDefaultTs1, pnpm_useScrollEventsHandlersDefaultTs2);
  const items4 = [_undefined6, animatedSheetState, value2.SHEET_STATE, animatedHandleGestureState, LegacyBaseButton.State, animatedScrollableState, value2.SCROLLABLE_STATE, sharedValue1, _mod1652.scrollTo, animatedRef, sharedValue, sharedValue];
  c10 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
  function pnpm_useScrollEventsHandlersDefaultTs3(contentOffset, shouldLockInitialPosition) {
    const y = contentOffset.contentOffset.y;
    if (!tmp2) {
      shouldLockInitialPosition.shouldLockInitialPosition = false;
    }
    if (_undefined3.value === _undefined4.ACTIVE) {
      shouldLockInitialPosition.shouldLockInitialPosition = true;
      shouldLockInitialPosition.initialContentOffsetY = y;
    }
    if (_undefined5.value === _undefined6.LOCKED) {
      if (!_undefined7.value) {
        let num = 0;
        if (shouldLockInitialPosition.shouldLockInitialPosition) {
          let num2 = shouldLockInitialPosition.initialContentOffsetY;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _undefined7.value = true;
        _undefined8(c8, 0, num, false);
        _undefined7.value = false;
        c9.value = num;
        c10.value = num;
      }
    } else {
      c10.value = y;
    }
    tmp2 = _undefined.value !== _undefined2.EXTENDED && _undefined.value !== tmp.FILL_PARENT;
  }
  const items5 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  pnpm_useScrollEventsHandlersDefaultTs3.__closure = items5;
  pnpm_useScrollEventsHandlersDefaultTs3.__workletHash = 3888416079569;
  pnpm_useScrollEventsHandlersDefaultTs3.__initData = tmp12;
  const items6 = [animatedRef, sharedValue, animatedScrollableState, animatedSheetState, sharedValue1];
  const items7 = [_undefined7, sharedValue, sharedValue, animatedScrollableContentOffsetY, animatedSheetState, ];
  items7[5] = value2.SHEET_STATE;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items7;
  function pnpm_useScrollEventsHandlersDefaultTs4(contentOffset, arg1) {
    const y = contentOffset.contentOffset.y;
    c0.value = y;
    c1.value = y;
    c2.value = y;
    arg1.initialContentOffsetY = y;
    if (_undefined4.value !== _undefined5.EXTENDED) {
      if (_undefined4.value !== tmp.FILL_PARENT) {
        if (y > 0) {
          arg1.shouldLockInitialPosition = true;
        }
      }
    }
    arg1.shouldLockInitialPosition = false;
  }
  const items8 = [tmp26, tmp27, tmp28, tmp29, tmp30];
  pnpm_useScrollEventsHandlersDefaultTs4.__closure = items8;
  pnpm_useScrollEventsHandlersDefaultTs4.__workletHash = 5061050210175;
  pnpm_useScrollEventsHandlersDefaultTs4.__initData = tmp25;
  const items9 = [sharedValue, animatedSheetState, animatedScrollableContentOffsetY];
  const items10 = [_undefined8, animatedScrollableState, , , , , , , , , ];
  const tmp11Result = useCallback(pnpm_useScrollEventsHandlersDefaultTs3, items6);
  items10[2] = value2.SCROLLABLE_STATE;
  items10[3] = sharedValue1;
  items10[4] = _mod1652.scrollTo;
  items10[5] = animatedRef;
  items10[6] = sharedValue;
  items10[7] = sharedValue;
  items10[8] = animatedAnimationState;
  items10[9] = value2.ANIMATION_STATE;
  items10[10] = animatedScrollableContentOffsetY;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items10;
  function pnpm_useScrollEventsHandlersDefaultTs5(contentOffset, shouldLockInitialPosition) {
    const y = contentOffset.contentOffset.y;
    if (_undefined.value === _undefined2.LOCKED) {
      if (!_undefined3.value) {
        let num = 0;
        if (shouldLockInitialPosition.shouldLockInitialPosition) {
          let num2 = shouldLockInitialPosition.initialContentOffsetY;
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        }
        _undefined3.value = true;
        _undefined4(c4, 0, num, false);
        _undefined3.value = false;
        c5.value = num;
        c6.value = num;
      }
    } else if (_undefined8.value !== _undefined9.RUNNING) {
      c5.value = y;
      c6.value = y;
      c9.value = y;
    }
  }
  const items11 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
  pnpm_useScrollEventsHandlersDefaultTs5.__closure = items11;
  pnpm_useScrollEventsHandlersDefaultTs5.__workletHash = 6888707908115;
  pnpm_useScrollEventsHandlersDefaultTs5.__initData = tmp32;
  const items12 = [animatedRef, sharedValue, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY, sharedValue1];
  const items13 = [_undefined9, animatedScrollableState, , , , , , , , , ];
  const tmp11Result3 = useCallback(pnpm_useScrollEventsHandlersDefaultTs4, items9);
  items13[2] = value2.SCROLLABLE_STATE;
  items13[3] = sharedValue1;
  items13[4] = _mod1652.scrollTo;
  items13[5] = animatedRef;
  items13[6] = sharedValue;
  items13[7] = sharedValue;
  items13[8] = animatedAnimationState;
  items13[9] = value2.ANIMATION_STATE;
  items13[10] = animatedScrollableContentOffsetY;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items13;
  function pnpm_useScrollEventsHandlersDefaultTs6(contentOffset, shouldLockInitialPosition) {
    const y = contentOffset.contentOffset.y;
    if (_undefined.value === _undefined2.LOCKED) {
      if (!_undefined3.value) {
        let num2 = 0;
        if (shouldLockInitialPosition.shouldLockInitialPosition) {
          let num3 = shouldLockInitialPosition.initialContentOffsetY;
          if (num3 == null) {
            num3 = 0;
          }
          num2 = num3;
        }
        _undefined3.value = true;
        _undefined4(c4, 0, num2, false);
        _undefined3.value = false;
        c5.value = 0;
        c6.value = 0;
      }
    } else if (_undefined8.value !== _undefined9.RUNNING) {
      c5.value = y;
      c6.value = y;
      c9.value = y;
    }
  }
  const items14 = [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
  pnpm_useScrollEventsHandlersDefaultTs6.__closure = items14;
  pnpm_useScrollEventsHandlersDefaultTs6.__workletHash = 10448200868688;
  pnpm_useScrollEventsHandlersDefaultTs6.__initData = tmp44;
  const items15 = [sharedValue, animatedRef, animatedAnimationState, animatedScrollableState, animatedScrollableContentOffsetY, sharedValue1];
  const tmp11Result4 = useCallback(pnpm_useScrollEventsHandlersDefaultTs5, items12);
  return { handleOnScroll: tmp11Result, handleOnBeginDrag: tmp11Result3, handleOnEndDrag: useCallback(pnpm_useScrollEventsHandlersDefaultTs5, items12), handleOnMomentumEnd: useCallback(pnpm_useScrollEventsHandlersDefaultTs6, items15) };
}