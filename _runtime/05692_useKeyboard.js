// _runtime/05692_useKeyboard.js
import noop from "metro/00019__.js";
import get_ActivityIndicator from "metro/00017__.js";

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3 } = noop);
({ Keyboard: closure_4, Platform } = get_ActivityIndicator);
const keyboardDidShow = "keyboardDidShow";
const keyboardDidHide = "keyboardDidHide";
let closure_7 = { code: "(function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){let[KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState]=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];})" };
let closure_8 = { code: "(function pnpm_useKeyboardTs2(){let[shouldHandleKeyboardEvents]=this.__closure;return shouldHandleKeyboardEvents.value;})" };
let closure_9 = { code: "(function pnpm_useKeyboardTs3(result){let[temporaryCachedKeyboardEvent,handleKeyboardEvent]=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}})" };

export (includeBottomOffset) => {
  _require = undefined;
  const shouldHandleKeyboardEvents = require("metro/01652__.js").useSharedValue(false);
  let obj = require("metro/01652__.js");
  let tmp = _require;
  state = require("metro/01652__.js").useSharedValue(require("value2").KEYBOARD_STATE.UNDETERMINED);
  const obj2 = require("metro/01652__.js");
  const height = require("metro/01652__.js").useSharedValue(0);
  const obj3 = require("metro/01652__.js");
  const animationEasing = require("metro/01652__.js").useSharedValue("keyboard");
  const obj4 = require("metro/01652__.js");
  const animationDuration = require("metro/01652__.js").useSharedValue(500);
  const obj5 = require("metro/01652__.js");
  const sharedValue5 = require("metro/01652__.js").useSharedValue([]);
  items = [c7, require("value2").KEYBOARD_STATE, shouldHandleKeyboardEvents, sharedValue5, height, includeBottomOffset.includeBottomOffset, animationDuration, animationEasing, state];
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  function pnpm_useKeyboardTs1(value, arg1, value2, value3, arg4) {
    value = arg1;
    if (value === _undefined.SHOWN) {
      if (!_undefined2.value) {
        items = [value, value, value2, value3];
        c2.value = items;
      }
    }
    if (value !== _undefined.SHOWN) {
      value = _undefined.value;
    }
    _undefined.value = value;
    let tmp4 = arg4;
    if (arg4) {
      tmp4 = c4;
    }
    if (tmp4) {
      _undefined.value = _undefined.value + arg4;
    }
    c5.value = value2;
    c6.value = value3;
    c7.value = value;
    c2.value = [];
  }
  const items1 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  pnpm_useKeyboardTs1.__closure = items1;
  pnpm_useKeyboardTs1.__workletHash = 1523822461565;
  pnpm_useKeyboardTs1.__initData = tmp10;
  const tmp9Result = c2(pnpm_useKeyboardTs1, []);
  _require = tmp9Result;
  const items2 = [tmp9Result];
  c3(() => {
    closure_0 = _undefined3.addListener(c5, (endCoordinates) => {
      const obj = c0(c1[2]);
      ({ duration, easing } = endCoordinates);
      c0(c1[2]).runOnUI(closure_0)(c0(c1[3]).KEYBOARD_STATE.SHOWN, endCoordinates.endCoordinates.height, duration, easing, c0(c1[3]).SCREEN_HEIGHT - endCoordinates.endCoordinates.height - endCoordinates.endCoordinates.screenY);
    });
    closure_1 = _undefined3.addListener(c6, (endCoordinates) => {
      const obj = c0(c1[2]);
      c0(c1[2]).runOnUI(closure_0)(c0(c1[3]).KEYBOARD_STATE.HIDDEN, endCoordinates.endCoordinates.height, endCoordinates.duration, endCoordinates.easing);
    });
    return () => {
      closure_0.remove();
      closure_1.remove();
    };
  }, items2);
  const obj6 = require("metro/01652__.js");
  const items3 = [closure_8, shouldHandleKeyboardEvents];
  [tmp21, tmp22] = items3;
  function pnpm_useKeyboardTs2() {
    return _undefined.value;
  }
  const items4 = [tmp22];
  pnpm_useKeyboardTs2.__closure = items4;
  pnpm_useKeyboardTs2.__workletHash = 4678267351412;
  pnpm_useKeyboardTs2.__initData = tmp21;
  const items5 = [closure_9, sharedValue5, tmp9Result];
  _require = undefined;
  dependencyMap = undefined;
  [tmp23, tmp24, tmp25] = items5;
  function pnpm_useKeyboardTs3(arg0) {
    let tmp = arg0;
    value = _undefined.value;
    if (arg0) {
      tmp = value.length > 0;
    }
    if (tmp) {
      _undefined2(value[0], value[1], value[2], value[3]);
    }
  }
  const items6 = [tmp24, tmp25];
  pnpm_useKeyboardTs3.__closure = items6;
  pnpm_useKeyboardTs3.__workletHash = 12737213295497;
  pnpm_useKeyboardTs3.__initData = tmp23;
  const animatedReaction = tmp(1652).useAnimatedReaction(pnpm_useKeyboardTs2, pnpm_useKeyboardTs3, []);
  return { state, height, animationEasing, animationDuration, shouldHandleKeyboardEvents };
}