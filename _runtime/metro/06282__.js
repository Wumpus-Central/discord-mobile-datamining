// === Module 6282: ? ===

// Module 6282
import _mod1643 from "module_1643" /* 1643 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;
import _mod6283 from "module_6283" /* 6283 */;
import snapPoint from "snapPoint" /* 6284 */;
import react_native from "react-native" /* 17 */;

const Platform = react_native.Platform;
let obj = { initialPosition: 0, initialKeyboardState: GESTURE_SOURCE.KEYBOARD_STATE.UNDETERMINED, isScrollablePositionLocked: false };
const dismiss = react_native.Keyboard.dismiss;
const fn = function t(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    closure_0[item] = undefined;
  });
};
fn.__closure = {};
fn.__workletHash = 16627033127293;
fn.__initData = { code: "function pnpm_useGestureEventsHandlersDefaultTsx1(context){Object.keys(context).map(function(key){context[key]=undefined;});}" };
let closure_6 = { code: "function handleOnStart_Pnpm_useGestureEventsHandlersDefaultTsx2(__,_){const{stopAnimation,animatedKeyboardState,enableBlurKeyboardOnGesture,KEYBOARD_STATE,runOnJS,dismissKeyboard,context,animatedPosition,animatedScrollableContentOffsetY}=this.__closure;stopAnimation();let initialKeyboardState=animatedKeyboardState.value;if(enableBlurKeyboardOnGesture&&initialKeyboardState===KEYBOARD_STATE.SHOWN){initialKeyboardState=KEYBOARD_STATE.HIDDEN;runOnJS(dismissKeyboard)();}context.value={...context.value,initialPosition:animatedPosition.value,initialKeyboardState:animatedKeyboardState.value};if(animatedScrollableContentOffsetY.value>0){context.value={...context.value,isScrollablePositionLocked:true};}}" };
let closure_7 = { code: "function handleOnChange_Pnpm_useGestureEventsHandlersDefaultTsx3(source,{translationY:translationY}){const{animatedHighestSnapPoint,isInTemporaryPosition,context,KEYBOARD_STATE,enablePanDownToClose,animatedContainerHeight,animatedSnapPoints,GESTURE_SOURCE,isScrollableRefreshable,animatedPosition,animatedScrollableContentOffsetY,clamp,enableOverDrag,animatedScrollableType,SCROLLABLE_TYPE,overDragResistanceFactor}=this.__closure;let highestSnapPoint=animatedHighestSnapPoint.value;if(isInTemporaryPosition.value&&context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN){highestSnapPoint=context.value.initialPosition;}if(isInTemporaryPosition.value&&context.value.initialPosition<highestSnapPoint){highestSnapPoint=context.value.initialPosition;}const lowestSnapPoint=enablePanDownToClose?animatedContainerHeight.value:animatedSnapPoints.value[0];if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&animatedPosition.value===highestSnapPoint){return;}const negativeScrollableContentOffset=context.value.initialPosition===highestSnapPoint&&source===GESTURE_SOURCE.CONTENT||!context.value.isScrollablePositionLocked?animatedScrollableContentOffsetY.value*-1:0;const draggedPosition=context.value.initialPosition+translationY;const accumulatedDraggedPosition=draggedPosition+negativeScrollableContentOffset;const clampedPosition=clamp(accumulatedDraggedPosition,highestSnapPoint,lowestSnapPoint);if(context.value.isScrollablePositionLocked&&source===GESTURE_SOURCE.CONTENT&&animatedPosition.value===highestSnapPoint){context.value={...context.value,isScrollablePositionLocked:false};}if(enableOverDrag){if((source===GESTURE_SOURCE.HANDLE||animatedScrollableType.value===SCROLLABLE_TYPE.VIEW)&&draggedPosition<highestSnapPoint){const resistedPosition=highestSnapPoint-Math.sqrt(1+(highestSnapPoint-draggedPosition))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.HANDLE&&draggedPosition>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}if(source===GESTURE_SOURCE.CONTENT&&draggedPosition+negativeScrollableContentOffset>lowestSnapPoint){const resistedPosition=lowestSnapPoint+Math.sqrt(1+(draggedPosition+negativeScrollableContentOffset-lowestSnapPoint))*overDragResistanceFactor;animatedPosition.value=resistedPosition;return;}}animatedPosition.value=clampedPosition;}" };
let closure_8 = { code: "function handleOnEnd_Pnpm_useGestureEventsHandlersDefaultTsx4(source,{translationY:translationY,absoluteY:absoluteY,velocityY:velocityY}){const{animatedHighestSnapPoint,animatedPosition,GESTURE_SOURCE,isScrollableRefreshable,isInTemporaryPosition,context,animateToPosition,ANIMATION_SOURCE,animatedScrollableType,SCROLLABLE_TYPE,KEYBOARD_STATE,Platform,WINDOW_HEIGHT,animatedKeyboardHeight,runOnJS,dismissKeyboard,animatedSnapPoints,enablePanDownToClose,animatedClosedPosition,snapPoint,animatedScrollableContentOffsetY}=this.__closure;const highestSnapPoint=animatedHighestSnapPoint.value;const isSheetAtHighestSnapPoint=animatedPosition.value===highestSnapPoint;if(source===GESTURE_SOURCE.CONTENT&&isScrollableRefreshable.value&&isSheetAtHighestSnapPoint){return;}if(isInTemporaryPosition.value&&context.value.initialPosition>=animatedPosition.value){if(context.value.initialPosition>animatedPosition.value){animateToPosition(context.value.initialPosition,ANIMATION_SOURCE.GESTURE,velocityY/2);}return;}const isScrollable=animatedScrollableType.value!==SCROLLABLE_TYPE.UNDETERMINED&&animatedScrollableType.value!==SCROLLABLE_TYPE.VIEW;if(context.value.initialKeyboardState===KEYBOARD_STATE.SHOWN&&animatedPosition.value>context.value.initialPosition){if(!(Platform.OS==='ios'&&isScrollable&&absoluteY>WINDOW_HEIGHT-animatedKeyboardHeight.value)){runOnJS(dismissKeyboard)();}}if(isInTemporaryPosition.value){isInTemporaryPosition.value=false;}const snapPoints=animatedSnapPoints.value.slice();if(enablePanDownToClose){snapPoints.unshift(animatedClosedPosition.value);}const destinationPoint=snapPoint(translationY+context.value.initialPosition,velocityY,snapPoints);if(destinationPoint===animatedPosition.value){return;}const wasGestureHandledByScrollView=source===GESTURE_SOURCE.CONTENT&&animatedScrollableContentOffsetY.value>0;if(wasGestureHandledByScrollView&&isSheetAtHighestSnapPoint){return;}animateToPosition(destinationPoint,ANIMATION_SOURCE.GESTURE,velocityY/2);}" };
let closure_9 = { code: "function handleOnFinalize_Pnpm_useGestureEventsHandlersDefaultTsx5(){const{resetContext,context}=this.__closure;resetContext(context);}" };

export const useGestureEventsHandlersDefault = () => {
  let animatedContainerHeight;
  let animatedKeyboardHeight;
  let animatedPosition;
  let animatedSnapPoints;
  let handleOnChange;
  let handleOnEnd;
  let handleOnFinalize;
  let handleOnStart;
  let items;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj4;
  let obj6;
  let obj8;
  obj = animatedPosition(animatedSnapPoints[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedPosition = bottomSheetInternal.animatedPosition;
  animatedSnapPoints = bottomSheetInternal.animatedSnapPoints;
  const animatedKeyboardState = bottomSheetInternal.animatedKeyboardState;
  ({ animatedKeyboardHeight, animatedContainerHeight } = bottomSheetInternal);
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedHighestSnapPoint = bottomSheetInternal.animatedHighestSnapPoint;
  const animatedClosedPosition = bottomSheetInternal.animatedClosedPosition;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const enableOverDrag = bottomSheetInternal.enableOverDrag;
  const enablePanDownToClose = bottomSheetInternal.enablePanDownToClose;
  const overDragResistanceFactor = bottomSheetInternal.overDragResistanceFactor;
  const isInTemporaryPosition = bottomSheetInternal.isInTemporaryPosition;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const enableBlurKeyboardOnGesture = bottomSheetInternal.enableBlurKeyboardOnGesture;
  const animateToPosition = bottomSheetInternal.animateToPosition;
  const stopAnimation = bottomSheetInternal.stopAnimation;
  const tmp2 = animatedPosition(animatedSnapPoints[3]);
  let obj2 = {};
  const useSharedValue = tmp2.useSharedValue;
  let merged = Object.assign(animatedContainerHeight);
  const sharedValue = useSharedValue(obj2);
  let obj3 = { handleOnStart: obj4.useWorkletCallback(handleOnStart, items), handleOnChange: obj6.useWorkletCallback(handleOnChange, items1), handleOnEnd: obj8.useWorkletCallback(handleOnEnd, items2), handleOnFinalize: obj10.useWorkletCallback(handleOnFinalize, items3) };
  handleOnStart = function handleOnStart(value, arg1) {
    stopAnimation();
    const tmp3 = enableBlurKeyboardOnGesture && tmp2 === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN;
    if (tmp3) {
      const HIDDEN = GESTURE_SOURCE.KEYBOARD_STATE.HIDDEN;
      obj = _mod1643;
      obj.runOnJS(dismiss)();
    }
    const obj2 = { initialPosition: animatedPosition.value, initialKeyboardState: animatedKeyboardState.value };
    const merged = Object.assign(sharedValue.value);
    sharedValue.value = obj2;
    if (animatedScrollableContentOffsetY.value > 0) {
      const obj3 = { isScrollablePositionLocked: true };
      const merged1 = Object.assign(sharedValue.value);
      sharedValue.value = obj3;
    }
  };
  obj4 = animatedPosition(animatedSnapPoints[3]);
  handleOnStart.__closure = { stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, context: sharedValue, animatedPosition, animatedScrollableContentOffsetY };
  handleOnStart.__workletHash = 9400766587341;
  handleOnStart.__initData = animatedClosedPosition;
  items = [stopAnimation, enableBlurKeyboardOnGesture, animatedPosition, animatedKeyboardState, animatedScrollableContentOffsetY];
  ({ stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, context: sharedValue, animatedPosition, animatedScrollableContentOffsetY });
  handleOnChange = function handleOnChange(arg0, translationY) {
    let value3;
    let initialPosition = animatedHighestSnapPoint.value;
    let value = isInTemporaryPosition.value;
    translationY = translationY.translationY;
    if (value) {
      value = sharedValue.value.initialKeyboardState === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN;
    }
    if (value) {
      initialPosition = sharedValue.value.initialPosition;
    }
    const value2 = isInTemporaryPosition.value && sharedValue.value.initialPosition < initialPosition;
    if (value2) {
      initialPosition = sharedValue.value.initialPosition;
    }
    if (enablePanDownToClose) {
      value3 = animatedContainerHeight.value;
    } else {
      value3 = animatedSnapPoints.value[0];
    }
    if (sharedValue.value.initialPosition !== initialPosition) {
      let num = 0;
      const sum = sharedValue.value.initialPosition + translationY;
      const sum1 = sum + num;
      let isScrollablePositionLocked = sharedValue.value.isScrollablePositionLocked;
      obj = _mod6283;
      const clampResult = obj.clamp(sum1, initialPosition, value3);
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = arg0 === GESTURE_SOURCE.GESTURE_SOURCE.CONTENT;
      }
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = animatedPosition.value === initialPosition;
      }
      if (isScrollablePositionLocked) {
        const obj2 = { isScrollablePositionLocked: false };
        const merged = Object.assign(sharedValue.value);
        sharedValue.value = obj2;
      }
      if (enableOverDrag) {
        if (arg0 === GESTURE_SOURCE.GESTURE_SOURCE.HANDLE) {
          if (sum < initialPosition) {
            const _Math3 = Math;
            animatedPosition.value = initialPosition - Math.sqrt(initialPosition - sum + 1) * overDragResistanceFactor;
          }
        }
        if (arg0 === GESTURE_SOURCE.GESTURE_SOURCE.HANDLE) {
          if (sum > value3) {
            const _Math2 = Math;
            animatedPosition.value = value3 + Math.sqrt(sum - value3 + 1) * overDragResistanceFactor;
          }
        }
        if (arg0 === GESTURE_SOURCE.GESTURE_SOURCE.CONTENT) {
          if (sum + num > value3) {
            const _Math = Math;
            animatedPosition.value = value3 + Math.sqrt(sum + num - value3 + 1) * overDragResistanceFactor;
          }
        }
      }
      animatedPosition.value = clampResult;
    }
    num = -1 * animatedScrollableContentOffsetY.value;
  };
  obj6 = animatedPosition(animatedSnapPoints[3]);
  handleOnChange.__closure = { animatedHighestSnapPoint, isInTemporaryPosition, context: sharedValue, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, enablePanDownToClose, animatedContainerHeight, animatedSnapPoints, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, animatedPosition, animatedScrollableContentOffsetY, clamp: animatedPosition(animatedSnapPoints[4]).clamp, enableOverDrag, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, overDragResistanceFactor };
  handleOnChange.__workletHash = 6221237616078;
  handleOnChange.__initData = animatedScrollableContentOffsetY;
  items1 = [enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, animatedHighestSnapPoint, animatedContainerHeight, animatedSnapPoints, animatedPosition, animatedScrollableType, animatedScrollableContentOffsetY];
  ({ animatedHighestSnapPoint, isInTemporaryPosition, context: sharedValue, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, enablePanDownToClose, animatedContainerHeight, animatedSnapPoints, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, animatedPosition, animatedScrollableContentOffsetY, clamp: animatedPosition(animatedSnapPoints[4]).clamp, enableOverDrag, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, overDragResistanceFactor });
  handleOnEnd = function handleOnEnd(arg0, translationY) {
    let absoluteY;
    let velocityY;
    ({ absoluteY, velocityY } = translationY);
    translationY = translationY.translationY;
    const tmp = animatedPosition.value === animatedHighestSnapPoint.value;
    if (isInTemporaryPosition.value) {
      if (sharedValue.value.initialPosition >= animatedPosition.value) {
        if (sharedValue.value.initialPosition > animatedPosition.value) {
          animateToPosition(sharedValue.value.initialPosition, GESTURE_SOURCE.ANIMATION_SOURCE.GESTURE, velocityY / 2);
        }
      }
    }
    if (animatedScrollableType.value !== GESTURE_SOURCE.SCROLLABLE_TYPE.UNDETERMINED) {
      const value = animatedScrollableType.value;
      const VIEW = GESTURE_SOURCE.SCROLLABLE_TYPE.VIEW;
    }
    const tmp5 = sharedValue.value.initialKeyboardState === GESTURE_SOURCE.KEYBOARD_STATE.SHOWN && animatedPosition.value > sharedValue.value.initialPosition;
    if (tmp5) {
      const tmp2Result = _mod1643;
      tmp2Result.runOnJS(dismiss)();
    }
    if (isInTemporaryPosition.value) {
      isInTemporaryPosition.value = false;
    }
    const value2 = animatedSnapPoints.value;
    const substr = value2.slice();
    if (enablePanDownToClose) {
      substr.unshift(animatedClosedPosition.value);
    }
    const tmp2Result2 = snapPoint;
    const snapPointResult = tmp2Result2.snapPoint(translationY + sharedValue.value.initialPosition, velocityY, substr);
    if (snapPointResult !== animatedPosition.value) {
      const tmp13 = arg0 === GESTURE_SOURCE.GESTURE_SOURCE.CONTENT && animatedScrollableContentOffsetY.value > 0 && tmp;
      if (!tmp13) {
        animateToPosition(snapPointResult, GESTURE_SOURCE.ANIMATION_SOURCE.GESTURE, velocityY / 2);
      }
    }
  };
  obj8 = animatedPosition(animatedSnapPoints[3]);
  handleOnEnd.__closure = { animatedHighestSnapPoint, animatedPosition, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, isInTemporaryPosition, context: sharedValue, animateToPosition, ANIMATION_SOURCE: animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, Platform: animatedKeyboardState, WINDOW_HEIGHT: animatedPosition(animatedSnapPoints[1]).WINDOW_HEIGHT, animatedKeyboardHeight, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, animatedSnapPoints, enablePanDownToClose, animatedClosedPosition, snapPoint: animatedPosition(animatedSnapPoints[5]).snapPoint, animatedScrollableContentOffsetY };
  handleOnEnd.__workletHash = 8667894097210;
  handleOnEnd.__initData = enableOverDrag;
  items2 = [enablePanDownToClose, isInTemporaryPosition, isScrollableRefreshable, animatedClosedPosition, animatedHighestSnapPoint, animatedKeyboardHeight, animatedPosition, animatedScrollableType, animatedSnapPoints, animatedScrollableContentOffsetY, animateToPosition];
  ({ animatedHighestSnapPoint, animatedPosition, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, isInTemporaryPosition, context: sharedValue, animateToPosition, ANIMATION_SOURCE: animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, Platform: animatedKeyboardState, WINDOW_HEIGHT: animatedPosition(animatedSnapPoints[1]).WINDOW_HEIGHT, animatedKeyboardHeight, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, animatedSnapPoints, enablePanDownToClose, animatedClosedPosition, snapPoint: animatedPosition(animatedSnapPoints[5]).snapPoint, animatedScrollableContentOffsetY });
  handleOnFinalize = function handleOnFinalize() {
    if (typeof fn === "function") {
      let closure_0 = sharedValue;
      const _Object = Object;
      const keys = Object.keys(sharedValue);
      const mapped = keys.map((item) => {
        closure_0[item] = undefined;
      });
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  const obj11 = { resetContext: animatedHighestSnapPoint, context: sharedValue };
  handleOnFinalize.__closure = obj11;
  handleOnFinalize.__workletHash = 8824211868683;
  handleOnFinalize.__initData = enablePanDownToClose;
  items3 = [sharedValue];
  obj10 = animatedPosition(animatedSnapPoints[3]);
  return obj3;
};