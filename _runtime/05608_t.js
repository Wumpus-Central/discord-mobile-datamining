// _runtime/05608_t.js
import get_ActivityIndicator from "get ActivityIndicator";

const Platform = get_ActivityIndicator.Platform;
let obj = { initialPosition: 0, initialKeyboardState: require("GESTURE_SOURCE").KEYBOARD_STATE.UNDETERMINED, isScrollablePositionLocked: false };
const dismiss = get_ActivityIndicator.Keyboard.dismiss;
const fn = function t(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((arg0) => {
    closure_0[arg0] = undefined;
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
  let obj = animatedPosition(animatedSnapPoints[2]);
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
  let obj1 = animatedPosition(animatedSnapPoints[3]);
  obj = {};
  let merged = Object.assign(animatedContainerHeight);
  const sharedValue = obj1.useSharedValue(obj);
  obj = { handleOnStart: null, handleOnChange: null, handleOnEnd: null, handleOnFinalize: null };
  let obj4 = animatedPosition(animatedSnapPoints[3]);
  function handleOnStart(arg0, arg1) {
    stopAnimation();
    let tmp3 = enableBlurKeyboardOnGesture;
    if (enableBlurKeyboardOnGesture) {
      tmp3 = tmp2 === animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.SHOWN;
    }
    if (tmp3) {
      const HIDDEN = animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.HIDDEN;
      let obj = animatedPosition(animatedSnapPoints[3]);
      obj.runOnJS(animatedScrollableType)();
    }
    obj = {};
    const merged = Object.assign(sharedValue.value);
    obj.initialPosition = animatedPosition.value;
    obj.initialKeyboardState = animatedKeyboardState.value;
    sharedValue.value = obj;
    if (animatedScrollableContentOffsetY.value > 0) {
      obj = {};
      const merged1 = Object.assign(iter2.value);
      obj.isScrollablePositionLocked = true;
      iter2.value = obj;
    }
  }
  obj1 = { stopAnimation, animatedKeyboardState, enableBlurKeyboardOnGesture, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, context: sharedValue, animatedPosition, animatedScrollableContentOffsetY };
  handleOnStart.__closure = obj1;
  handleOnStart.__workletHash = 9400766587341;
  handleOnStart.__initData = animatedClosedPosition;
  const items = [stopAnimation, enableBlurKeyboardOnGesture, animatedPosition, animatedKeyboardState, animatedScrollableContentOffsetY];
  obj[0] = obj4.useWorkletCallback(handleOnStart, items);
  function handleOnChange(arg0, translationY) {
    let initialPosition = animatedHighestSnapPoint.value;
    let value = isInTemporaryPosition.value;
    if (value) {
      value = sharedValue.value.initialKeyboardState === animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE.SHOWN;
    }
    if (value) {
      initialPosition = sharedValue.value.initialPosition;
    }
    value = isInTemporaryPosition.value;
    if (value) {
      value = sharedValue.value.initialPosition < initialPosition;
    }
    if (value) {
      initialPosition = sharedValue.value.initialPosition;
    }
    if (enablePanDownToClose) {
      value = animatedContainerHeight.value;
    } else {
      value = animatedSnapPoints.value[0];
    }
    if (sharedValue.value.initialPosition !== initialPosition) {
      let num = 0;
      const sum = iter2.value.initialPosition + translationY.translationY;
      const sum1 = sum + num;
      let obj = animatedPosition(animatedSnapPoints[4]);
      let isScrollablePositionLocked = iter2.value.isScrollablePositionLocked;
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.CONTENT;
      }
      if (isScrollablePositionLocked) {
        isScrollablePositionLocked = animatedPosition.value === initialPosition;
      }
      if (isScrollablePositionLocked) {
        obj = {};
        const merged = Object.assign(iter2.value);
        obj.isScrollablePositionLocked = false;
        iter2.value = obj;
      }
      if (enableOverDrag) {
        if (arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.HANDLE) {
          if (sum < initialPosition) {
            const _Math3 = Math;
            animatedPosition.value = initialPosition - Math.sqrt(initialPosition - sum + 1) * overDragResistanceFactor;
          }
        }
        if (arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.HANDLE) {
          if (sum > value) {
            const _Math2 = Math;
            animatedPosition.value = value + Math.sqrt(sum - value + 1) * overDragResistanceFactor;
          }
        }
        if (arg0 === animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE.CONTENT) {
          if (sum + num > value) {
            const _Math = Math;
            animatedPosition.value = value + Math.sqrt(sum + num - value + 1) * overDragResistanceFactor;
          }
        }
      }
      animatedPosition.value = obj.clamp(sum1, initialPosition, value);
      const clampResult = obj.clamp(sum1, initialPosition, value);
    }
    num = -1 * animatedScrollableContentOffsetY.value;
  }
  const obj7 = animatedPosition(animatedSnapPoints[3]);
  handleOnChange.__closure = { animatedHighestSnapPoint, isInTemporaryPosition, context: sharedValue, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, enablePanDownToClose, animatedContainerHeight, animatedSnapPoints, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, animatedPosition, animatedScrollableContentOffsetY, clamp: animatedPosition(animatedSnapPoints[4]).clamp, enableOverDrag, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, overDragResistanceFactor };
  handleOnChange.__workletHash = 6221237616078;
  handleOnChange.__initData = animatedScrollableContentOffsetY;
  const items1 = [enableOverDrag, enablePanDownToClose, overDragResistanceFactor, isInTemporaryPosition, isScrollableRefreshable, animatedHighestSnapPoint, animatedContainerHeight, animatedSnapPoints, animatedPosition, animatedScrollableType, animatedScrollableContentOffsetY];
  obj[1] = obj7.useWorkletCallback(handleOnChange, items1);
  const obj2 = { animatedHighestSnapPoint, isInTemporaryPosition, context: sharedValue, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, enablePanDownToClose, animatedContainerHeight, animatedSnapPoints, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, animatedPosition, animatedScrollableContentOffsetY, clamp: animatedPosition(animatedSnapPoints[4]).clamp, enableOverDrag, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, overDragResistanceFactor };
  function handleOnEnd(arg0, translationY) {
    let absoluteY;
    let velocityY;
    ({ absoluteY, velocityY } = translationY);
    if (isInTemporaryPosition.value) {
      if (sharedValue.value.initialPosition >= iter.value) {
        if (iter3.value.initialPosition > iter.value) {
          animateToPosition(iter3.value.initialPosition, tmp2(tmp3[1]).ANIMATION_SOURCE.GESTURE, velocityY / 2);
        }
      }
    }
    if (animatedScrollableType.value !== animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE.UNDETERMINED) {
      let value = animatedScrollableType.value;
      const VIEW = tmp2(tmp3[1]).SCROLLABLE_TYPE.VIEW;
    }
    if (tmp5) {
      let tmp2Result = tmp2(tmp3[3]);
      tmp2Result.runOnJS(animatedScrollableType)();
    }
    if (isInTemporaryPosition.value) {
      iter2.value = false;
    }
    value = animatedSnapPoints.value;
    const substr = value.slice();
    if (enablePanDownToClose) {
      substr.unshift(animatedClosedPosition.value);
    }
    tmp2Result = tmp2(tmp3[5]);
    const snapPointResult = tmp2Result.snapPoint(translationY.translationY + sharedValue.value.initialPosition, velocityY, substr);
    if (snapPointResult !== animatedPosition.value) {
      let tmp12 = arg0 === tmp2(tmp3[1]).GESTURE_SOURCE.CONTENT;
      if (tmp12) {
        tmp12 = animatedScrollableContentOffsetY.value > 0;
      }
      if (tmp12) {
        tmp12 = tmp;
      }
      if (!tmp12) {
        animateToPosition(snapPointResult, tmp2(tmp3[1]).ANIMATION_SOURCE.GESTURE, velocityY / 2);
      }
    }
  }
  const obj9 = animatedPosition(animatedSnapPoints[3]);
  handleOnEnd.__closure = { animatedHighestSnapPoint, animatedPosition, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, isInTemporaryPosition, context: sharedValue, animateToPosition, ANIMATION_SOURCE: animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, Platform: animatedKeyboardState, WINDOW_HEIGHT: animatedPosition(animatedSnapPoints[1]).WINDOW_HEIGHT, animatedKeyboardHeight, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, animatedSnapPoints, enablePanDownToClose, animatedClosedPosition, snapPoint: animatedPosition(animatedSnapPoints[5]).snapPoint, animatedScrollableContentOffsetY };
  handleOnEnd.__workletHash = 8667894097210;
  handleOnEnd.__initData = enableOverDrag;
  const items2 = [enablePanDownToClose, isInTemporaryPosition, isScrollableRefreshable, animatedClosedPosition, animatedHighestSnapPoint, animatedKeyboardHeight, animatedPosition, animatedScrollableType, animatedSnapPoints, animatedScrollableContentOffsetY, animateToPosition];
  obj[2] = obj9.useWorkletCallback(handleOnEnd, items2);
  const obj3 = { animatedHighestSnapPoint, animatedPosition, GESTURE_SOURCE: animatedPosition(animatedSnapPoints[1]).GESTURE_SOURCE, isScrollableRefreshable, isInTemporaryPosition, context: sharedValue, animateToPosition, ANIMATION_SOURCE: animatedPosition(animatedSnapPoints[1]).ANIMATION_SOURCE, animatedScrollableType, SCROLLABLE_TYPE: animatedPosition(animatedSnapPoints[1]).SCROLLABLE_TYPE, KEYBOARD_STATE: animatedPosition(animatedSnapPoints[1]).KEYBOARD_STATE, Platform: animatedKeyboardState, WINDOW_HEIGHT: animatedPosition(animatedSnapPoints[1]).WINDOW_HEIGHT, animatedKeyboardHeight, runOnJS: animatedPosition(animatedSnapPoints[3]).runOnJS, dismissKeyboard: animatedScrollableType, animatedSnapPoints, enablePanDownToClose, animatedClosedPosition, snapPoint: animatedPosition(animatedSnapPoints[5]).snapPoint, animatedScrollableContentOffsetY };
  function handleOnFinalize() {
    if (typeof animatedHighestSnapPoint !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const animatedPosition = tmp;
    const keys = Object.keys(tmp);
    const mapped = keys.map((arg0) => {
      closure_0[arg0] = undefined;
    });
  }
  obj4 = { resetContext: animatedHighestSnapPoint, context: sharedValue };
  handleOnFinalize.__closure = obj4;
  handleOnFinalize.__workletHash = 8824211868683;
  handleOnFinalize.__initData = enablePanDownToClose;
  const items3 = [sharedValue];
  obj[3] = animatedPosition(animatedSnapPoints[3]).useWorkletCallback(handleOnFinalize, items3);
  return obj;
};