// _runtime/06755_hitSlop.js
import _mod6727 from "metro/06727__.js";
import touchDataToPressEvent from "06756_touchDataToPressEvent.js";
import StateMachineEvent2 from "06759_StateMachineEvent.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

require = fn;
let closure_2 = [
  "testOnly_pressed",
  "hitSlop",
  "pressRetentionOffset",
  "delayHoverIn",
  "delayHoverOut",
  "delayLongPress",
  "unstable_pressDelay",
  "onHoverIn",
  "onHoverOut",
  "onPress",
  "onPressIn",
  "onPressOut",
  "onLongPress",
  "onLayout",
  "style",
  "children",
  "android_disableSound",
  "android_ripple",
  "disabled",
  "accessible",
  "simultaneousWith",
  "requireToFail",
  "block",
];
let noop = fn(19);
({
  use: hasOwnProperty,
  useCallback: metroRequire,
  useEffect: closure_7,
  useMemo: closure_8,
  useRef: closure_9,
  useState: c10,
} = noop);
const Platform = fn(17).Platform;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const tagMessage = fn(6660);
let closure_14 = tagMessage.isTestEnv();

export default function _default(pressRetentionOffset) {
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
  [tmp4, closure_14] = _slicedToArray(onPressOut(testOnly_pressed), 2);
  onPressIn(null);
  onPressIn(null);
  onPressIn(true);
  const tmp7 = unstable_pressDelay(hitSlop(pressRetentionOffset[6]).JSResponderContext);
  closure_18 = tmp7;
  onPressIn(false);
  closure_20 = onPressIn({ width: 0, height: 0 });
  onPressIn(null);
  const items = [hitSlop];
  let tmp9 = onPress(() => {
    if (typeof hitSlop === "number") {
      let numberAsInsetResult = touchDataToPressEvent.numberAsInset(hitSlop);
    } else {
      numberAsInsetResult = hitSlop;
      if (hitSlop == null) {
        numberAsInsetResult = touchDataToPressEvent.numberAsInset(0);
      }
    }
    return numberAsInsetResult;
  }, items);
  closure_22 = tmp9;
  const items1 = [pressRetentionOffset];
  const tmp3 = _slicedToArray(onPressOut(testOnly_pressed), 2);
  let obj = hitSlop(pressRetentionOffset[7]);
  const addInsetsResult = obj.addInsets(
    tmp9,
    onPress(() => {
      if (typeof pressRetentionOffset === "number") {
        let numberAsInsetResult = touchDataToPressEvent.numberAsInset(pressRetentionOffset);
      } else {
        numberAsInsetResult = pressRetentionOffset;
        if (pressRetentionOffset == null) {
          numberAsInsetResult = {};
        }
      }
      return numberAsInsetResult;
    }, items1),
  );
  const tmp13 = closure_6(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      closure_17.current = true;
    }
  }, []);
  closure_23 = tmp13;
  const tmp14 = closure_6(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  closure_24 = tmp14;
  const items2 = [onLongPress, tmp13, delayLongPress];
  const tmp15 = closure_6((arg0) => {
    closure_0 = arg0;
    if (onLongPress) {
      closure_23();
      let num = delayLongPress;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_15.current = setTimeout(() => {
        closure_17.current = false;
        onLongPress(closure_0);
      }, num);
    }
  }, items2);
  closure_25 = tmp15;
  const items3 = [onPressIn, tmp15];
  const tmp16 = closure_6((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    closure_25(arg0);
    closure_1_14(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  closure_26 = tmp16;
  const items4 = [tmp14, tmp13];
  const tmp17 = closure_6(() => {
    closure_19.current = false;
    closure_21.current = null;
    closure_23();
    closure_24();
    closure_1_14(false);
  }, items4);
  closure_27 = tmp17;
  const items5 = [tmp7];
  closure_28 = closure_6(() => {
    if (ref5.current == null) {
      tmp.current = _mod6727.isKeyboardDismissingTap(closure_18);
    }
  }, items5);
  const items6 = [tmp16, tmp9, unstable_pressDelay];
  const tmp18 = closure_6((nativeEvent) => {
    closure_0 = nativeEvent;
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
          closure_26(closure_0);
        }, tmp6);
      } else {
        closure_26(nativeEvent);
      }
    }
  }, items6);
  closure_29 = tmp18;
  const items7 = [tmp17, tmp16, onPress, onPressOut];
  const tmp19 = closure_6((arg0) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref4.current) {
      tmp.current = false;
      if (ref2.current) {
        closure_26(arg0);
      }
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      closure_27();
      tmp9 = ref3.current && flag;
    }
  }, items7);
  closure_30 = tmp19;
  const tmp20 = onPress(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[8]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  const navigation = tmp20;
  let obj1 = hitSlop(pressRetentionOffset[9]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const items8 = [tmp18, tmp19, tmp20, isScreenReaderEnabled];
  closure_7(() => {
    navigation.setStates(StateMachineEvent2.getStatesConfig(closure_29, closure_30, isScreenReaderEnabled));
  }, items8);
  onPressIn(null);
  onPressIn(null);
  let obj2 = hitSlop(pressRetentionOffset[11]);
  obj = {
    manualActivation: true,
    cancelsTouchesInView: false,
    onBegin(handlerTag) {
      closure_0 = handlerTag;
      if (ref7.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        closure_33.current = setTimeout(() => {
          let tmpResult;
          if (closure_2_6 != null) {
            tmpResult = tmp(touchDataToPressEvent.gestureToPressableEvent(closure_0));
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_6 != null) {
        tmp5(hitSlop(pressRetentionOffset[7]).gestureToPressableEvent(handlerTag));
        let obj = hitSlop(pressRetentionOffset[7]);
      }
    },
    onFinalize(handlerTag) {
      closure_0 = handlerTag;
      if (ref6.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_3) {
        const _setTimeout = setTimeout;
        closure_34.current = setTimeout(() => {
          let tmpResult;
          if (closure_2_7 != null) {
            tmpResult = tmp(touchDataToPressEvent.gestureToPressableEvent(closure_0));
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_7 != null) {
        tmp5(hitSlop(pressRetentionOffset[7]).gestureToPressableEvent(handlerTag));
        let obj = hitSlop(pressRetentionOffset[7]);
      }
    },
    enabled: true !== disabled,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
  };
  const hoverGesture = obj2.useHoverGesture(obj);
  let obj4 = hitSlop(pressRetentionOffset[11]);
  obj = {
    minDuration: hitSlop(pressRetentionOffset[5]).INT32_MAX,
    maxDistance: hitSlop(pressRetentionOffset[5]).INT32_MAX,
    cancelsTouchesInView: false,
    onTouchesDown(handlerTag) {
      closure_28();
      if (!ref5.current) {
        const result = touchDataToPressEvent.gestureTouchToPressableEvent(handlerTag);
        navigation.handleEvent(StateMachineEvent2.StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
      }
    },
    onTouchesUp() {
      if (!isScreenReaderEnabled) {
        navigation.reset();
        closure_27();
      }
    },
    onTouchesCancel(handlerTag) {
      const result = touchDataToPressEvent.gestureTouchToPressableEvent(handlerTag);
      navigation.reset();
      closure_30(result, false);
    },
    onFinalize(arg0) {},
    enabled: tmp23,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
  };
  const longPressGesture = obj4.useLongPressGesture(obj);
  const tmp10 = onPress(() => {
    if (typeof pressRetentionOffset === "number") {
      let numberAsInsetResult = touchDataToPressEvent.numberAsInset(pressRetentionOffset);
    } else {
      numberAsInsetResult = pressRetentionOffset;
      if (pressRetentionOffset == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  obj1 = {
    onTouchesCancel(handlerTag) {
      const result = touchDataToPressEvent.gestureTouchToPressableEvent(handlerTag);
      navigation.reset();
      closure_30(result, false);
    },
    onBegin() {
      closure_28();
      if (!ref5.current) {
        if (Platform.isTV) {
          closure_29(touchDataToPressEvent.viewCenterToPressableEvent(closure_20.current), true);
        } else {
          const handleEvent = navigation.handleEvent;
          const NATIVE_BEGIN = StateMachineEvent2.StateMachineEvent.NATIVE_BEGIN;
          if (isScreenReaderEnabled) {
            handleEvent(NATIVE_BEGIN, touchDataToPressEvent.viewCenterToPressableEvent(closure_20.current));
            const tmp5Result = touchDataToPressEvent;
          } else {
            handleEvent(NATIVE_BEGIN);
          }
        }
      }
    },
    onActivate() {},
    onFinalize(canceled) {
      if (Platform.isTV) {
        closure_30(touchDataToPressEvent.viewCenterToPressableEvent(closure_20.current), !canceled.canceled);
        closure_27();
      } else {
        const StateMachineEvent = StateMachineEvent2.StateMachineEvent;
        navigation.handleEvent(canceled.canceled ? StateMachineEvent.CANCEL : StateMachineEvent.FINALIZE);
        closure_27();
      }
    },
    enabled: tmp23,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
    shouldActivateOnStart: false,
  };
  const nativeGesture = hitSlop(pressRetentionOffset[11]).useNativeGesture(obj1);
  const obj7 = hitSlop(pressRetentionOffset[11]);
  const simultaneousGestures = hitSlop(pressRetentionOffset[11]).useSimultaneousGestures(
    nativeGesture,
    longPressGesture,
    hoverGesture,
  );
  if (typeof style === "function") {
    obj2 = { pressed: tmp4 };
    style = style(obj2);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj3 = { pressed: tmp4 };
    childrenResult = children(obj3);
  }
  const items9 = [android_ripple];
  const items10 = [onLayout];
  const obj9 = hitSlop(pressRetentionOffset[11]);
  const tmp8Result = onPress(() => {
    let color;
    if (android_ripple != null) {
      color = android_ripple.color;
    }
    if (color == null) {
      color = str;
    }
    return color;
  }, items9);
  const tmp12Result = closure_6((nativeEvent) => {
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
  if (closure_14) {
    tmp39 = onPress;
  }
  obj5.testOnly_onPress = tmp39;
  let tmp40;
  if (closure_14) {
    tmp40 = onPressIn;
  }
  obj5.testOnly_onPressIn = tmp40;
  let tmp41;
  if (closure_14) {
    tmp41 = onPressOut;
  }
  obj5.testOnly_onPressOut = tmp41;
  let tmp42;
  if (closure_14) {
    tmp42 = onLongPress;
  }
  obj5.testOnly_onLongPress = tmp42;
  const items12 = [childrenResult, null];
  obj5.children = items12;
  obj4.children = android_ripple(hitSlop(pressRetentionOffset[14]).PureNativeButton, obj5);
  return onLayout(hitSlop(pressRetentionOffset[13]).GestureDetector, obj4);
}
