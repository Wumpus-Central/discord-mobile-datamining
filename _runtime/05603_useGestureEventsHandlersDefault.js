// _runtime/05603_useGestureEventsHandlersDefault.js
import _mod19 from "metro/00019__.js";
import _mod1652 from "metro/01652__.js";
import value22 from "05423_value2.js";
import _mod5430 from "metro/05430__.js";
import clamp from "05604_clamp.js";
import snapPoint from "05605_snapPoint.js";
import get_ActivityIndicator from "metro/00017__.js";

_mod19.useCallback;
const Platform = get_ActivityIndicator.Platform;
let value = { initialPosition: 0, initialKeyboardState: value22.KEYBOARD_STATE.UNDETERMINED, isScrollablePositionLocked: false };
const dismiss = get_ActivityIndicator.Keyboard.dismiss;
let items = [{ code: "(function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});})" }];
[tmp3] = items;
function pnpm_useGestureEventsHandlersDefaultTsx1(arg0) {
  closure_0 = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    closure_0[item] = undefined;
  });
}
pnpm_useGestureEventsHandlersDefaultTsx1.__workletHash = 5400395038012;
pnpm_useGestureEventsHandlersDefaultTsx1.__initData = tmp3;
let closure_7 = { code: "(function handleOnStart_Pnpm_useGestureEventsHandlersDefaultTsx2(__,_){let[stopAnimation,animatedKeyboardState,enableBlurKeyboardOnGesture,KEYBOARD_STATE,runOnJS,dismissKeyboard,context,animatedPosition,animatedScrollableContentOffsetY]=this.__closure;stopAnimation();let initialKeyboardState=animatedKeyboardState.value;if(enableBlurKeyboardOnGesture&&initialKeyboardState===KEYBOARD_STATE.SHOWN){initialKeyboardState=KEYBOARD_STATE.HIDDEN;runOnJS(dismissKeyboard)();}context.value={...context.value,initialPosition:animatedPosition.value,initialKeyboardState:animatedKeyboardState.value};if(animatedScrollableContentOffsetY.value>0){context.value={...context.value,isScrollablePositionLocked:true};}})" };
let closure_8 = { code: "(function handleOnChange_Pnpm_useGestureEventsHandlersDefaultTsx3(source,{translationY:translationY}){let[animatedHighestSnapPoint,isInTemporaryPosition,context,KEYBOARD_STATE,enablePanDownToClose,animatedContainerHeight,animatedSnapPoints,GESTURE_SOURCE,isScrollableRefreshable,animatedPosition,animatedScrollableContentOffsetY,clamp,enableOverDrag,animatedScrollableType,SCROLLABLE_TYPE,overDragResistanceFactor]=this.__closure;let highestSnapPoint=animatedHighestSnapPoint.value;if(isInTemporaryPosition.value&&context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN){highestSnapPoint=context.value.initialPosition;}if(isInTemporaryPosition.value&&context.value.initialPosition<highestSnapPoint){highestSnapPoint=context.value.initialPosition;}const lowestSnapPoint=enablePanDownToClose?animatedContainerHeight.value:animatedSnapPoints.value[0];if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&animatedPosition.value===highestSnapPoint){return;}const negativeScrollableContentOffset=context.value.initialPosition===highestSnapPoint&&source===GESTURE_SOURCE.CONTENT||!context.value.isScrollablePositionLocked?animatedScrollableContentOffsetY.value*-1:0;const draggedPosition=context.value.initialPosition+translationY;const accumulatedDraggedPosition=draggedPosition+negativeScrollableContentOffset;const clampedPosition=clamp(accumulatedDraggedPosition,highestSnapPoint,lowestSnapPoint);if(context.value.isScrollablePositionLocked&&source===GESTURE_SOURCE.CONTENT&&animatedPosition.value===highestSnapPoint){context.value={...context.value,isScrollablePositionLocked:false};}if(enableOverDrag){if((source===GESTURE_SOURCE.HANDLE||animatedScrollableType.value===SCROLLABLE_TYPE.VIEW)&&draggedPosition<highestSnapPoint){const resistedPosition=highestSnapPoint-Math.sqrt(1+(highestSnapPoint-draggedPosition))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.HANDLE&&draggedPosition>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.CONTENT&&draggedPosition+negativeScrollableContentOffset>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition+negativeScrollableContentOffset-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}}animatedPosition.value=clampedPosition;})" };
let closure_9 = { code: "(function handleOnEnd_Pnpm_useGestureEventsHandlersDefaultTsx4(source,{translationY:translationY,absoluteY:absoluteY,velocityY:velocityY}){let[animatedHighestSnapPoint,animatedPosition,GESTURE_SOURCE,isScrollableRefreshable,isInTemporaryPosition,context,animateToPosition,ANIMATION_SOURCE,animatedScrollableType,SCROLLABLE_TYPE,KEYBOARD_STATE,Platform,WINDOW_HEIGHT,animatedKeyboardHeight,runOnJS,dismissKeyboard,animatedSnapPoints,enablePanDownToClose,animatedClosedPosition,snapPoint,animatedScrollableContentOffsetY]=this.__closure;const highestSnapPoint=animatedHighestSnapPoint.value;const isSheetAtHighestSnapPoint=animatedPosition.value===highestSnapPoint;if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&isSheetAtHighestSnapPoint){return;}if(isInTemporaryPosition.value&&context.value.initialPosition>=animatedPosition.value){if(context.value.initialPosition>animatedPosition.value){animateToPosition(context.value.initialPosition,ANIMATION_SOURCE.GESTURE,velocityY/2);}return;}const isScrollable=animatedScrollableType.value!==SCROLLABLE_TYPE.UNDETERMINED&&animatedScrollableType.value!==SCROLLABLE_TYPE.VIEW;if(context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN&&animatedPosition.value>context.value.initialPosition){if(!(Platform.OS==='ios'&&isScrollable&&absoluteY>WINDOW_HEIGHT-animatedKeyboardHeight.value)){runOnJS(dismissKeyboard)();}}if(isInTemporaryPosition.value){isInTemporaryPosition.value=false;}const snapPoints=animatedSnapPoints.value.slice();if(enablePanDownToClose){snapPoints.unshift(animatedClosedPosition.value);}const destinationPoint=snapPoint(translationY+context.value.initialPosition,velocityY,snapPoints);if(destinationPoint===animatedPosition.value){return;}const wasGestureHandledByScrollView=source===GESTURE_SOURCE.CONTENT&&animatedScrollableContentOffsetY.value>0;if(wasGestureHandledByScrollView&&isSheetAtHighestSnapPoint){return;}animateToPosition(destinationPoint,ANIMATION_SOURCE.GESTURE,velocityY/2);})" };
let closure_10 = { code: "(function handleOnFinalize_Pnpm_useGestureEventsHandlersDefaultTsx5(){let[resetContext,context]=this.__closure;resetContext(context);})" };

export () => {
  const obj = _mod5430;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  ({ animatedPosition, animatedSnapPoints, animatedKeyboardState, animatedKeyboardHeight, animatedContainerHeight, animatedScrollableType, animatedHighestSnapPoint, animatedClosedPosition, animatedScrollableContentOffsetY, enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, enableBlurKeyboardOnGesture, animateToPosition, stopAnimation } = bottomSheetInternal);
  let merged = Object.assign(obj);
  const sharedValue = _mod1652.useSharedValue({});
  items = [_undefined8, stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, value22.KEYBOARD_STATE, _mod1652.runOnJS, dismiss, sharedValue, animatedPosition, animatedScrollableContentOffsetY];
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  function handleOnStart(arg0, arg1) {
    _undefined();
    let tmp3 = c2;
    if (c2) {
      tmp3 = tmp2 === _undefined4.SHOWN;
    }
    if (tmp3) {
      const HIDDEN = _undefined4.HIDDEN;
      _undefined5(c5)();
    }
    value = {};
    const merged = Object.assign(_undefined7.value);
    value.initialPosition = _undefined8.value;
    value.initialKeyboardState = value.value;
    _undefined7.value = value;
    if (_undefined9.value > 0) {
      const obj2 = {};
      const merged1 = Object.assign(_undefined7.value);
      obj2.isScrollablePositionLocked = true;
      _undefined7.value = obj2;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  handleOnStart.__closure = items1;
  handleOnStart.__workletHash = 11124672703668;
  handleOnStart.__initData = tmp8;
  const items2 = [stopAnimation, enableBlurKeyboardOnGesture, animatedPosition, animatedKeyboardState, animatedScrollableContentOffsetY];
  const items3 = [_undefined9, animatedHighestSnapPoint, isInTemporaryPosition, sharedValue, , , , , , , , , , , , , ];
  const obj3 = {};
  items3[4] = value22.KEYBOARD_STATE;
  items3[5] = enablePanDownToClose;
  items3[6] = animatedContainerHeight;
  items3[7] = animatedSnapPoints;
  items3[8] = value22.GESTURE_SOURCE;
  items3[9] = isScrollableRefreshable;
  items3[10] = animatedPosition;
  items3[11] = animatedScrollableContentOffsetY;
  items3[12] = clamp.clamp;
  items3[13] = enableOverDrag;
  items3[14] = animatedScrollableType;
  items3[15] = value22.SCROLLABLE_TYPE;
  items3[16] = overDragResistanceFactor;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items3;
  function handleOnChange(arg0, translationY) {
    let initialPosition = _undefined.value;
    value = _undefined2.value;
    if (value) {
      value = _undefined3.value.initialKeyboardState === _undefined4.SHOWN;
    }
    if (value) {
      initialPosition = _undefined3.value.initialPosition;
    }
    value2 = _undefined2.value;
    if (value2) {
      value2 = _undefined3.value.initialPosition < initialPosition;
    }
    if (value2) {
      initialPosition = _undefined3.value.initialPosition;
    }
    if (c4) {
      let value3 = _undefined6.value;
    } else {
      value3 = _undefined7.value[0];
    }
    if (_undefined3.value.initialPosition !== initialPosition) {
      let num = 0;
      const sum = _undefined3.value.initialPosition + translationY.translationY;
      let isScrollablePositionLocked = _undefined3.value.isScrollablePositionLocked;
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = arg0 === _undefined8.CONTENT;
      }
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = _undefined10.value === initialPosition;
      }
      if (isScrollablePositionLocked) {
        value = {};
        const merged = Object.assign(_undefined3.value);
        value.isScrollablePositionLocked = false;
        _undefined3.value = value;
      }
      if (c12) {
        if (arg0 === _undefined8.HANDLE) {
          if (sum < initialPosition) {
            const _Math3 = Math;
            _undefined10.value = initialPosition - Math.sqrt(initialPosition - sum + 1) * c15;
          }
        }
        if (arg0 === _undefined8.HANDLE) {
          if (sum > value3) {
            const _Math2 = Math;
            _undefined10.value = value3 + Math.sqrt(sum - value3 + 1) * c15;
          }
        }
        if (arg0 === _undefined8.CONTENT) {
          if (sum + num > value3) {
            const _Math = Math;
            _undefined10.value = value3 + Math.sqrt(sum + num - value3 + 1) * c15;
          }
        }
      }
      _undefined10.value = _undefined12(sum + num, initialPosition, value3);
      const tmp13 = _undefined12(sum + num, initialPosition, value3);
    }
    num = -1 * _undefined11.value;
  }
  const items4 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  handleOnChange.__closure = items4;
  handleOnChange.__workletHash = 1824625743703;
  handleOnChange.__initData = tmp19;
  const items5 = [enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, animatedHighestSnapPoint, animatedContainerHeight, animatedSnapPoints, animatedPosition, animatedScrollableType, animatedScrollableContentOffsetY];
  const items6 = [_undefined10, animatedHighestSnapPoint, animatedPosition, , , , , , , , , , , , , , , , , , , ];
  const tmp6Result = useCallback(handleOnStart, items2);
  items6[3] = value22.GESTURE_SOURCE;
  items6[4] = isScrollableRefreshable;
  items6[5] = isInTemporaryPosition;
  items6[6] = sharedValue;
  items6[7] = animateToPosition;
  items6[8] = value22.ANIMATION_SOURCE;
  items6[9] = animatedScrollableType;
  items6[10] = value22.SCROLLABLE_TYPE;
  items6[11] = value22.KEYBOARD_STATE;
  items6[12] = Platform;
  items6[13] = value22.WINDOW_HEIGHT;
  items6[14] = animatedKeyboardHeight;
  items6[15] = _mod1652.runOnJS;
  items6[16] = dismiss;
  items6[17] = animatedSnapPoints;
  items6[18] = enablePanDownToClose;
  items6[19] = animatedClosedPosition;
  items6[20] = snapPoint.snapPoint;
  items6[21] = animatedScrollableContentOffsetY;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58] = items6;
  function handleOnEnd(arg0, velocityY) {
    velocityY = velocityY.velocityY;
    ({ translationY, absoluteY } = velocityY);
    if (_undefined5.value) {
      if (_undefined6.value.initialPosition >= _undefined2.value) {
        if (_undefined6.value.initialPosition > _undefined2.value) {
          _undefined7(_undefined6.value.initialPosition, _undefined8.GESTURE, velocityY / 2);
        }
      }
    }
    if (tmp6) {
      let tmp8 = "ios" === _undefined12.OS && tmp5;
      if (tmp8) {
        tmp8 = absoluteY > c12 - _undefined13.value;
      }
      if (!tmp8) {
        _undefined14(c15)();
      }
    }
    if (_undefined5.value) {
      _undefined5.value = false;
    }
    value = _undefined15.value;
    const substr = value.slice();
    if (c17) {
      substr.unshift(_undefined16.value);
    }
    const tmp16 = _undefined17(translationY + _undefined6.value.initialPosition, velocityY, substr);
    if (tmp16 !== _undefined2.value) {
      let tmp18 = arg0 === _undefined3.CONTENT;
      if (tmp18) {
        tmp18 = _undefined18.value > 0;
      }
      if (tmp18) {
        tmp18 = tmp;
      }
      if (!tmp18) {
        _undefined7(tmp16, _undefined8.GESTURE, velocityY / 2);
      }
    }
    tmp = _undefined2.value === _undefined.value;
    tmp5 = _undefined9.value !== _undefined10.UNDETERMINED && _undefined9.value !== tmp4.VIEW;
    tmp6 = _undefined6.value.initialKeyboardState === _undefined11.SHOWN && _undefined2.value > _undefined6.value.initialPosition;
  }
  const items7 = [tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58];
  handleOnEnd.__closure = items7;
  handleOnEnd.__workletHash = 11436673332739;
  handleOnEnd.__initData = tmp37;
  const items8 = [enablePanDownToClose, isInTemporaryPosition, isScrollableRefreshable, animatedClosedPosition, animatedHighestSnapPoint, animatedKeyboardHeight, animatedPosition, animatedScrollableType, animatedSnapPoints, animatedScrollableContentOffsetY, animateToPosition];
  const items9 = [_undefined11, pnpm_useGestureEventsHandlersDefaultTsx1, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp60, tmp61, tmp62] = items9;
  function handleOnFinalize() {
    _undefined(c1);
  }
  const items10 = [tmp61, tmp62];
  handleOnFinalize.__closure = items10;
  handleOnFinalize.__workletHash = 14844205376690;
  handleOnFinalize.__initData = tmp60;
  const items11 = [sharedValue];
  const tmp6Result3 = useCallback(handleOnChange, items5);
  const tmp6Result4 = useCallback(handleOnEnd, items8);
  return { handleOnStart: tmp6Result, handleOnChange: tmp6Result3, handleOnEnd: useCallback(handleOnEnd, items8), handleOnFinalize: useCallback(handleOnFinalize, items11) };
}