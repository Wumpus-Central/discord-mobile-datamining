// _runtime/05455_useKeyboard.js
import { useEffect } from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let c3;
({ Keyboard: c3, Platform } = get_ActivityIndicator);
const keyboardDidShow = "keyboardDidShow";
const keyboardDidHide = "keyboardDidHide";
let closure_6 = { code: "function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){const{KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState}=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];}" };
let closure_7 = { code: "function pnpm_useKeyboardTs2(){const{shouldHandleKeyboardEvents}=this.__closure;return shouldHandleKeyboardEvents.value;}" };
let closure_8 = { code: "function pnpm_useKeyboardTs3(result){const{temporaryCachedKeyboardEvent,handleKeyboardEvent}=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}}" };

export const useKeyboard = (includeBottomOffset) => {
  includeBottomOffset = includeBottomOffset.includeBottomOffset;
  let shouldHandleKeyboardEvents;
  let state;
  let height;
  let animationEasing;
  let animationDuration;
  let sharedValue5;
  let workletCallback;
  let obj = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  shouldHandleKeyboardEvents = obj.useSharedValue(false);
  state = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue(includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE.UNDETERMINED);
  const obj2 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  height = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue(0);
  const obj3 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  animationEasing = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue("keyboard");
  const obj4 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  animationDuration = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue(500);
  const obj5 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  sharedValue5 = includeBottomOffset(shouldHandleKeyboardEvents[2]).useSharedValue([]);
  const obj6 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  const fn = function v(value, arg1, value2, value3) {
    value = arg1;
    if (value === includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE.SHOWN) {
      if (!shouldHandleKeyboardEvents.value) {
        const items = [value, value, value2, value3];
        sharedValue5.value = items;
      }
    }
    if (value !== includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE.SHOWN) {
      value = iter.value;
    }
    height.value = value;
    let tmp5 = arg4;
    if (arg4) {
      tmp5 = includeBottomOffset;
    }
    if (tmp5) {
      iter.value = iter.value + arg4;
    }
    animationDuration.value = value2;
    animationEasing.value = value3;
    state.value = value;
    sharedValue5.value = [];
  };
  obj = { KEYBOARD_STATE: includeBottomOffset(shouldHandleKeyboardEvents[3]).KEYBOARD_STATE, shouldHandleKeyboardEvents, temporaryCachedKeyboardEvent: sharedValue5, keyboardHeight: height, includeBottomOffset, keyboardAnimationDuration: animationDuration, keyboardAnimationEasing: animationEasing, keyboardState: state };
  fn.__closure = obj;
  fn.__workletHash = 7905199978020;
  fn.__initData = sharedValue5;
  workletCallback = includeBottomOffset(shouldHandleKeyboardEvents[2]).useWorkletCallback(fn, []);
  let items = [workletCallback];
  state(() => {
    let closure_0 = height.addListener(animationEasing, (endCoordinates) => {
      let duration;
      let easing;
      const obj = lib(closure_1[2]);
      ({ duration, easing } = endCoordinates);
      lib(closure_1[2]).runOnUI(closure_7)(lib(closure_1[3]).KEYBOARD_STATE.SHOWN, endCoordinates.endCoordinates.height, duration, easing, lib(closure_1[3]).SCREEN_HEIGHT - endCoordinates.endCoordinates.height - endCoordinates.endCoordinates.screenY);
    });
    let closure_1 = height.addListener(animationDuration, (endCoordinates) => {
      const obj = lib(closure_1[2]);
      lib(closure_1[2]).runOnUI(closure_7)(lib(closure_1[3]).KEYBOARD_STATE.HIDDEN, endCoordinates.endCoordinates.height, endCoordinates.duration, endCoordinates.easing);
    });
    return () => {
      lib.remove();
      closure_1.remove();
    };
  }, items);
  const obj7 = includeBottomOffset(shouldHandleKeyboardEvents[2]);
  const fn2 = function b() {
    return shouldHandleKeyboardEvents.value;
  };
  fn2.__closure = { shouldHandleKeyboardEvents };
  fn2.__workletHash = 11615500623565;
  fn2.__initData = workletCallback;
  const fn3 = function y(arg0) {
    let tmp = arg0;
    const value = sharedValue5.value;
    if (arg0) {
      tmp = value.length > 0;
    }
    if (tmp) {
      workletCallback(value[0], value[1], value[2], value[3]);
    }
  };
  fn3.__closure = { temporaryCachedKeyboardEvent: sharedValue5, handleKeyboardEvent: workletCallback };
  fn3.__workletHash = 16636741173520;
  fn3.__initData = closure_8;
  const animatedReaction = includeBottomOffset(shouldHandleKeyboardEvents[2]).useAnimatedReaction(fn2, fn3, []);
  return { state, height, animationEasing, animationDuration, shouldHandleKeyboardEvents };
};