// _runtime/05527_hitSlop.js
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import "noop";
import { Platform } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import tagMessage from "tagMessage";

let c10;
let c5;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
let closure_2 = ["testOnly_pressed", "hitSlop", "pressRetentionOffset", "delayHoverIn", "delayHoverOut", "delayLongPress", "unstable_pressDelay", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "onLongPress", "onLayout", "style", "children", "android_disableSound", "android_ripple", "disabled", "accessible", "simultaneousWith", "requireToFail", "block"];
({ use: c5, useCallback: closure_6, useEffect: error, useMemo: metroImportAll, useRef: c9, useState: c10 } = noop);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
tagMessage = tagMessage.isTestEnv();

export default function _default(pressRetentionOffset) {
  let accessible;
  let android_disableSound;
  let android_ripple;
  let block;
  let children;
  let closure_2;
  let _slicedToArray;
  let closure_6;
  let closure_7;
  let delayLongPress;
  let disabled;
  let hitSlop;
  let onPress;
  let requireToFail;
  let simultaneousWith;
  let style;
  let tagMessage;
  let testOnly_pressed;
  let tmp4;
  ({ testOnly_pressed, hitSlop } = pressRetentionOffset);
  pressRetentionOffset = pressRetentionOffset.pressRetentionOffset;
  ({ delayHoverIn: closure_2, delayHoverOut: _slicedToArray, delayLongPress } = pressRetentionOffset);
  const unstable_pressDelay = pressRetentionOffset.unstable_pressDelay;
  ({ onHoverIn: closure_6, onHoverOut: closure_7, onPress } = pressRetentionOffset);
  const onPressIn = pressRetentionOffset.onPressIn;
  const onPressOut = pressRetentionOffset.onPressOut;
  const onLongPress = pressRetentionOffset.onLongPress;
  const onLayout = pressRetentionOffset.onLayout;
  ({ style, children, android_disableSound, android_ripple } = pressRetentionOffset);
  ({ simultaneousWith, requireToFail, block } = pressRetentionOffset);
  ({ disabled, accessible } = pressRetentionOffset);
  const tmp = delayLongPress(pressRetentionOffset, closure_2);
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  [tmp4, tagMessage] = callback(onPressOut(testOnly_pressed), 2);
  let closure_15 = onPressIn(null);
  let closure_16 = onPressIn(null);
  let closure_17 = onPressIn(true);
  const tmp7 = unstable_pressDelay(hitSlop(pressRetentionOffset[6]).JSResponderContext);
  let closure_18 = tmp7;
  let closure_19 = onPressIn(false);
  let closure_20 = onPressIn({ width: 0, height: 0 });
  let closure_21 = onPressIn(null);
  const items = [hitSlop];
  let tmp9 = onPress(() => {
    if (typeof hitSlop === "number") {
      let numberAsInsetResult = hitSlop(pressRetentionOffset[7]).numberAsInset(tmp);
      const obj2 = hitSlop(pressRetentionOffset[7]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = hitSlop(pressRetentionOffset[7]).numberAsInset(0);
        const obj = hitSlop(pressRetentionOffset[7]);
      }
    }
    return numberAsInsetResult;
  }, items);
  let closure_22 = tmp9;
  const items1 = [pressRetentionOffset];
  const tmp2 = onPressOut;
  let tmp3 = callback(onPressOut(testOnly_pressed), 2);
  const tmp8 = onPress;
  let obj = hitSlop(pressRetentionOffset[7]);
  const addInsetsResult = obj.addInsets(tmp9, onPress(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = hitSlop(pressRetentionOffset[7]).numberAsInset(tmp);
      const obj2 = hitSlop(pressRetentionOffset[7]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1));
  const tmp13 = callback2(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
      closure_17.current = true;
    }
  }, []);
  let closure_23 = tmp13;
  const tmp14 = callback2(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  let closure_24 = tmp14;
  const items2 = [onLongPress, tmp13, delayLongPress];
  const tmp15 = callback2((arg0) => {
    let closure_0 = arg0;
    if (onLongPress) {
      tmp13();
      let num = delayLongPress;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_15.current = setTimeout(() => {
        outer1_17.current = false;
        outer1_11(closure_0);
      }, num);
      const tmp3 = closure_15;
    }
  }, items2);
  let closure_25 = tmp15;
  const items3 = [onPressIn, tmp15];
  const tmp16 = callback2((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    tmp15(arg0);
    callback(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp5.current);
      tmp5.current = null;
    }
  }, items3);
  let closure_26 = tmp16;
  const items4 = [tmp14, tmp13];
  const tmp17 = callback2(() => {
    closure_19.current = false;
    closure_21.current = null;
    tmp13();
    tmp14();
    callback(false);
  }, items4);
  let closure_27 = tmp17;
  const items5 = [tmp7];
  let closure_28 = callback2(() => {
    if (ref5.current == null) {
      tmp.current = hitSlop(pressRetentionOffset[6]).isKeyboardDismissingTap(closure_18);
      const obj = hitSlop(pressRetentionOffset[6]);
    }
  }, items5);
  const items6 = [tmp16, tmp9, unstable_pressDelay];
  const tmp18 = callback2((nativeEvent) => {
    let closure_0 = nativeEvent;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (!flag) {
      const changedTouches = nativeEvent.nativeEvent.changedTouches;
      flag = hitSlop(pressRetentionOffset[7]).isTouchWithinInset(closure_20.current, closure_22, changedTouches.at(-1));
      const obj = hitSlop(pressRetentionOffset[7]);
    }
    if (flag) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_16.current = setTimeout(() => {
          outer1_26(closure_0);
        }, tmp6);
      } else {
        tmp16(nativeEvent);
      }
    }
  }, items6);
  let closure_29 = tmp18;
  const items7 = [tmp17, tmp16, onPress, onPressOut];
  const tmp19 = callback2((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        tmp16(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      tmp17();
      tmp9 = ref3.current && flag;
    }
  }, items7);
  let closure_30 = tmp19;
  const tmp20 = onPress(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[8]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  let closure_31 = tmp20;
  let obj1 = hitSlop(pressRetentionOffset[9]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const items8 = [tmp18, tmp19, tmp20, isScreenReaderEnabled];
  callback3(() => {
    tmp20.setStates(hitSlop(pressRetentionOffset[10]).getStatesConfig(closure_29, closure_30, isScreenReaderEnabled));
  }, items8);
  let closure_33 = onPressIn(null);
  let closure_34 = onPressIn(null);
  let obj2 = hitSlop(pressRetentionOffset[11]);
  obj = {
    manualActivation: true,
    cancelsTouchesInView: false,
    onBegin(arg0) {
      let closure_0 = arg0;
      if (ref7.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        closure_33.current = setTimeout(() => {
          let tmpResult;
          if (outer1_6 != null) {
            tmpResult = tmp(hitSlop(pressRetentionOffset[7]).gestureToPressableEvent(closure_0));
            const obj = hitSlop(pressRetentionOffset[7]);
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_6 != null) {
        tmp5(hitSlop(pressRetentionOffset[7]).gestureToPressableEvent(arg0));
        let obj = hitSlop(pressRetentionOffset[7]);
      }
    },
    onFinalize(arg0) {
      let closure_0 = arg0;
      if (ref6.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (_slicedToArray) {
        const _setTimeout = setTimeout;
        closure_34.current = setTimeout(() => {
          let tmpResult;
          if (outer1_7 != null) {
            tmpResult = tmp(hitSlop(pressRetentionOffset[7]).gestureToPressableEvent(closure_0));
            const obj = hitSlop(pressRetentionOffset[7]);
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_7 != null) {
        tmp5(hitSlop(pressRetentionOffset[7]).gestureToPressableEvent(arg0));
        let obj = hitSlop(pressRetentionOffset[7]);
      }
    },
    enabled: tmp23,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult
  };
  const hoverGesture = obj2.useHoverGesture(obj);
  let obj4 = hitSlop(pressRetentionOffset[11]);
  obj = {
    minDuration: hitSlop(pressRetentionOffset[5]).INT32_MAX,
    maxDistance: hitSlop(pressRetentionOffset[5]).INT32_MAX,
    cancelsTouchesInView: false,
    onTouchesDown(arg0) {
      callback2();
      if (!ref5.current) {
        const result = hitSlop(pressRetentionOffset[7]).gestureTouchToPressableEvent(arg0);
        tmp20.handleEvent(hitSlop(pressRetentionOffset[10]).StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
        const obj = hitSlop(pressRetentionOffset[7]);
      }
    },
    onTouchesUp() {
      if (!isScreenReaderEnabled) {
        tmp20.reset();
        tmp17();
      }
    },
    onTouchesCancel(arg0) {
      const result = hitSlop(pressRetentionOffset[7]).gestureTouchToPressableEvent(arg0);
      tmp20.reset();
      tmp19(result, false);
    },
    onFinalize(arg0) {

    },
    enabled: tmp23,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult
  };
  const longPressGesture = obj4.useLongPressGesture(obj);
  const tmp10 = onPress(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = hitSlop(pressRetentionOffset[7]).numberAsInset(tmp);
      const obj2 = hitSlop(pressRetentionOffset[7]);
    } else {
      numberAsInsetResult = tmp;
      if (tmp == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  const tmp12 = callback2;
  obj1 = {
    onTouchesCancel(arg0) {
      const result = hitSlop(pressRetentionOffset[7]).gestureTouchToPressableEvent(arg0);
      tmp20.reset();
      tmp19(result, false);
    },
    onBegin() {
      callback2();
      if (!ref5.current) {
        if (onLongPress.isTV) {
          tmp18(hitSlop(pressRetentionOffset[7]).viewCenterToPressableEvent(closure_20.current), true);
          const obj2 = hitSlop(pressRetentionOffset[7]);
        } else {
          const handleEvent = tmp20.handleEvent;
          const NATIVE_BEGIN = hitSlop(pressRetentionOffset[10]).StateMachineEvent.NATIVE_BEGIN;
          if (isScreenReaderEnabled) {
            handleEvent(NATIVE_BEGIN, tmp5(tmp6[7]).viewCenterToPressableEvent(closure_20.current));
            const tmp5Result = tmp5(tmp6[7]);
          } else {
            handleEvent(NATIVE_BEGIN);
          }
          tmp5 = hitSlop;
          tmp6 = pressRetentionOffset;
        }
      }
    },
    onActivate() {

    },
    onFinalize(canceled) {
      if (onLongPress.isTV) {
        tmp19(hitSlop(pressRetentionOffset[7]).viewCenterToPressableEvent(closure_20.current), !canceled.canceled);
        tmp17();
      } else {
        const StateMachineEvent = hitSlop(pressRetentionOffset[10]).StateMachineEvent;
        tmp20.handleEvent(canceled.canceled ? StateMachineEvent.CANCEL : StateMachineEvent.FINALIZE);
        tmp17();
      }
    },
    enabled: tmp23,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
    shouldActivateOnStart: false
  };
  const nativeGesture = hitSlop(pressRetentionOffset[11]).useNativeGesture(obj1);
  const obj7 = hitSlop(pressRetentionOffset[11]);
  const simultaneousGestures = hitSlop(pressRetentionOffset[11]).useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture);
  if (typeof style === "function") {
    obj2 = { pressed: null };
    obj2[0] = tmp4;
    style = style(obj2);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj3 = { pressed: null };
    obj3[0] = tmp4;
    childrenResult = children(obj3);
  }
  const items9 = [android_ripple];
  const items10 = [onLayout];
  const obj9 = hitSlop(pressRetentionOffset[11]);
  const tmp8Result = tmp8(() => {
    let color;
    if (android_ripple != null) {
      color = tmp.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items9);
  const tmp12Result = tmp12((nativeEvent) => {
    if (onLayout != null) {
      tmp(nativeEvent);
    }
    closure_20.current = nativeEvent.nativeEvent.layout;
  }, items10);
  const tVProps = hitSlop(pressRetentionOffset[12]).getTVProps(tmp);
  obj4 = { gesture: simultaneousGestures, children: null };
  const obj5 = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(tVProps);
  obj5.onLayout = tmp12Result;
  obj5.accessible = false !== accessible;
  obj5.hitSlop = addInsetsResult;
  obj5.enabled = true !== disabled;
  obj5.touchSoundDisabled = android_disableSound;
  obj5.rippleColor = tmp8Result;
  let radius;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  obj5.rippleRadius = radius;
  const items11 = [{}, style];
  obj5.style = items11;
  let tmp39;
  if (tagMessage) {
    tmp39 = onPress;
  }
  obj5.testOnly_onPress = tmp39;
  let tmp40;
  if (tagMessage) {
    tmp40 = onPressIn;
  }
  obj5.testOnly_onPressIn = tmp40;
  let tmp41;
  if (tagMessage) {
    tmp41 = onPressOut;
  }
  obj5.testOnly_onPressOut = tmp41;
  let tmp42;
  if (tagMessage) {
    tmp42 = onLongPress;
  }
  obj5.testOnly_onLongPress = tmp42;
  const items12 = [childrenResult, null];
  obj5.children = items12;
  obj4[1] = android_ripple(hitSlop(pressRetentionOffset[14]).PureNativeButton, obj5);
  return onLayout(hitSlop(pressRetentionOffset[13]).GestureDetector, obj4);
};