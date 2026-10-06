// _runtime/metro/06247__.js
import react_native from "../00017_react-native.js";
import _mod6219 from "06219__.js";
import _mod6248 from "06248__.js";
import react_native2 from "../06251_react-native.js";
import _slicedToArray from "00032__slicedToArray.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import react_mod from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import module_6152 from "../06152_tagMessage.js";

let navigation;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
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
let react = react_mod;
({
  use: hasOwnProperty,
  useCallback: metroRequire,
  useEffect: metroImportDefault,
  useMemo: metroImportAll,
  useRef: c9,
  useState: c10,
} = react);
react = react_mod;
const Platform = react_native.Platform;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = module_6152.isTestEnv();

export default function _default(pressRetentionOffset) {
  let PureNativeButton;
  let accessible;
  let android_disableSound;
  let android_ripple;
  let block;
  let children;
  let closure_6;
  let closure_7;
  let delayLongPress;
  let disabled;
  let hitSlop;
  let items11;
  let items12;
  let obj13;
  let onPress;
  let radius;
  let requireToFail;
  let simultaneousWith;
  let style;
  let testOnly_pressed;
  let tmp39;
  let tmp4;
  let tmp40;
  let tmp41;
  let tmp42;
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
  const tmp2 = onPressOut;
  if (testOnly_pressed == null) {
    testOnly_pressed = false;
  }
  [tmp4, closure_14] = _slicedToArray(tmp2(testOnly_pressed), 2);
  const tmp3 = _slicedToArray(tmp2(testOnly_pressed), 2);
  const ref = onPressIn(null);
  const ref2 = onPressIn(null);
  const ref3 = onPressIn(true);
  const tmp6 = pressRetentionOffset;
  const tmp7 = unstable_pressDelay(hitSlop(pressRetentionOffset[6]).JSResponderContext);
  let closure_18 = tmp7;
  const ref4 = onPressIn(false);
  let closure_20 = onPressIn({ width: 0, height: 0 });
  const ref5 = onPressIn(null);
  const items = [hitSlop];
  let tmp9 = onPress(() => {
    let numberAsInsetResult;
    if (typeof hitSlop === "number") {
      const obj2 = _mod6248;
      numberAsInsetResult = obj2.numberAsInset(hitSlop);
    } else {
      numberAsInsetResult = hitSlop;
      if (hitSlop == null) {
        const obj = _mod6248;
        numberAsInsetResult = obj.numberAsInset(0);
      }
    }
    return numberAsInsetResult;
  }, items);
  let closure_22 = tmp9;
  const items1 = [pressRetentionOffset];
  const tmp10 = onPress(() => {
    let numberAsInsetResult;
    if (typeof pressRetentionOffset === "number") {
      const obj2 = _mod6248;
      numberAsInsetResult = obj2.numberAsInset(pressRetentionOffset);
    } else {
      numberAsInsetResult = pressRetentionOffset;
      if (pressRetentionOffset == null) {
        numberAsInsetResult = {};
      }
    }
    return numberAsInsetResult;
  }, items1);
  let obj = hitSlop(pressRetentionOffset[7]);
  const addInsetsResult = obj.addInsets(tmp9, tmp10);
  const tmp13 = closure_6(() => {
    if (ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
      ref3.current = true;
    }
  }, []);
  let closure_23 = tmp13;
  const tmp14 = closure_6(() => {
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, []);
  let closure_24 = tmp14;
  const items2 = [onLongPress, tmp13, delayLongPress];
  const tmp15 = closure_6((arg0) => {
    let closure_0 = arg0;
    if (onLongPress) {
      closure_23();
      let num = delayLongPress;
      const _setTimeout = setTimeout;
      if (delayLongPress == null) {
        num = 500;
      }
      closure_15.current = _setTimeout(() => {
        ref3.current = false;
        onLongPress(closure_0);
      }, num);
    }
  }, items2);
  let closure_25 = tmp15;
  const items3 = [onPressIn, tmp15];
  const tmp16 = closure_6((arg0) => {
    if (onPressIn != null) {
      tmp(arg0);
    }
    closure_25(arg0);
    closure_14(true);
    if (ref2.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items3);
  let closure_26 = tmp16;
  const items4 = [tmp14, tmp13];
  const tmp17 = closure_6(() => {
    ref4.current = false;
    ref5.current = null;
    closure_23();
    closure_24();
    closure_14(false);
  }, items4);
  let closure_27 = tmp17;
  const items5 = [tmp7];
  let closure_28 = closure_6(() => {
    if (ref5.current == null) {
      const obj = _mod6219;
      tmp.current = obj.isKeyboardDismissingTap(closure_18);
    }
  }, items5);
  const items6 = [tmp16, tmp9, unstable_pressDelay];
  const tmp18 = closure_6((nativeEvent) => {
    let closure_0 = nativeEvent;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (!flag) {
      const changedTouches = nativeEvent.nativeEvent.changedTouches;
      const obj = hitSlop(pressRetentionOffset[7]);
      flag = obj.isTouchWithinInset(closure_20.current, closure_22, changedTouches.at(-1));
    }
    if (flag) {
      closure_19.current = true;
      if (unstable_pressDelay) {
        const _setTimeout = setTimeout;
        closure_16.current = setTimeout(() => {
          closure_26(nativeEvent);
        }, tmp6);
      } else {
        closure_26(nativeEvent);
      }
    }
  }, items6);
  let closure_29 = tmp18;
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
      const tmp9 = ref3.current && flag;
      if (tmp9) {
        if (onPress != null) {
          onPress(arg0);
        }
      }
      closure_27();
    }
  }, items7);
  let closure_30 = tmp19;
  const tmp20 = onPress(() => {
    const pressableStateMachine = new hitSlop(pressRetentionOffset[8]).PressableStateMachine();
    return pressableStateMachine;
  }, []);
  navigation = tmp20;
  let obj2 = hitSlop(pressRetentionOffset[9]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items8 = [tmp18, tmp19, tmp20, isScreenReaderEnabled];
  closure_7(() => {
    const obj = react_native2;
    navigation.setStates(obj.getStatesConfig(closure_29, closure_30, isScreenReaderEnabled));
  }, items8);
  const ref6 = onPressIn(null);
  const ref7 = onPressIn(null);
  const obj4 = {
    manualActivation: true,
    cancelsTouchesInView: false,
    onBegin(handlerTag) {
      let closure_0 = handlerTag;
      if (ref7.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_2) {
        const _setTimeout = setTimeout;
        closure_33.current = setTimeout(() => {
          let tmpResult;
          if (closure_6 != null) {
            const obj = _mod6248;
            tmpResult = tmp(obj.gestureToPressableEvent(handlerTag));
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_6 != null) {
        let obj = hitSlop(pressRetentionOffset[7]);
        tmp5(obj.gestureToPressableEvent(handlerTag));
      }
    },
    onFinalize(handlerTag) {
      let closure_0 = handlerTag;
      if (ref6.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      if (closure_3) {
        const _setTimeout = setTimeout;
        closure_34.current = setTimeout(() => {
          let tmpResult;
          if (closure_7 != null) {
            const obj = _mod6248;
            tmpResult = tmp(obj.gestureToPressableEvent(handlerTag));
          }
          return tmpResult;
        }, tmp4);
      } else if (closure_7 != null) {
        let obj = hitSlop(pressRetentionOffset[7]);
        tmp5(obj.gestureToPressableEvent(handlerTag));
      }
    },
    enabled: true !== disabled,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
  };
  const obj3 = hitSlop(pressRetentionOffset[11]);
  const hoverGesture = obj3.useHoverGesture(obj4);
  const obj5 = hitSlop(pressRetentionOffset[11]);
  const obj6 = {
    minDuration: hitSlop(pressRetentionOffset[5]).INT32_MAX,
    maxDistance: hitSlop(pressRetentionOffset[5]).INT32_MAX,
    cancelsTouchesInView: false,
    onTouchesDown(handlerTag) {
      closure_28();
      if (!ref5.current) {
        const obj = _mod6248;
        const result = obj.gestureTouchToPressableEvent(handlerTag);
        navigation.handleEvent(react_native2.StateMachineEvent.LONG_PRESS_TOUCHES_DOWN, result);
      }
    },
    onTouchesUp() {
      if (!isScreenReaderEnabled) {
        navigation.reset();
        closure_27();
      }
    },
    onTouchesCancel(handlerTag) {
      const obj = _mod6248;
      const result = obj.gestureTouchToPressableEvent(handlerTag);
      navigation.reset();
      closure_30(result, false);
    },
    onFinalize(arg0) {},
    enabled: true !== disabled,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
  };
  const longPressGesture = obj5.useLongPressGesture(obj6);
  const obj7 = hitSlop(pressRetentionOffset[11]);
  const obj8 = {
    onTouchesCancel(handlerTag) {
      const obj = _mod6248;
      const result = obj.gestureTouchToPressableEvent(handlerTag);
      navigation.reset();
      closure_30(result, false);
    },
    onBegin() {
      closure_28();
      if (!ref5.current) {
        if (Platform.isTV) {
          const obj2 = _mod6248;
          closure_29(obj2.viewCenterToPressableEvent(closure_20.current), true);
        } else {
          const handleEvent = navigation.handleEvent;
          const NATIVE_BEGIN = react_native2.StateMachineEvent.NATIVE_BEGIN;
          if (isScreenReaderEnabled) {
            const tmp5Result = _mod6248;
            handleEvent(NATIVE_BEGIN, tmp5Result.viewCenterToPressableEvent(closure_20.current));
          } else {
            handleEvent(NATIVE_BEGIN);
          }
        }
      }
    },
    onActivate() {},
    onFinalize(canceled) {
      if (Platform.isTV) {
        const obj = _mod6248;
        closure_30(obj.viewCenterToPressableEvent(closure_20.current), !canceled.canceled);
        closure_27();
      } else {
        const handleEvent = navigation.handleEvent;
        canceled = canceled.canceled;
        const StateMachineEvent = react_native2.StateMachineEvent;
        handleEvent(canceled ? StateMachineEvent.CANCEL : StateMachineEvent.FINALIZE);
        closure_27();
      }
    },
    enabled: true !== disabled,
    disableReanimated: true,
    simultaneousWith,
    block,
    requireToFail,
    hitSlop: addInsetsResult,
    shouldActivateOnStart: false,
  };
  const nativeGesture = obj7.useNativeGesture(obj8);
  let style1 = style;
  const obj9 = hitSlop(pressRetentionOffset[11]);
  const simultaneousGestures = obj9.useSimultaneousGestures(nativeGesture, longPressGesture, hoverGesture);
  if (typeof style === "function") {
    const obj10 = { pressed: tmp4 };
    style1 = style(obj10);
  }
  let childrenResult = children;
  if (typeof children === "function") {
    const obj11 = { pressed: tmp4 };
    childrenResult = children(obj11);
  }
  const items9 = [android_ripple];
  const items10 = [onLayout];
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
  let tmp5Result = hitSlop(tmp6[12]);
  const tVProps = tmp5Result.getTVProps(tmp);
  const obj12 = { gesture: simultaneousGestures, children: android_ripple(PureNativeButton, obj13) };
  const GestureDetector = hitSlop(tmp6[13]).GestureDetector;
  obj13 = {
    onLayout: tmp12Result,
    accessible: false !== accessible,
    hitSlop: addInsetsResult,
    enabled: true !== disabled,
    touchSoundDisabled: android_disableSound,
    rippleColor: tmp8Result,
    rippleRadius: radius,
    style: items11,
    testOnly_onPress: tmp39,
    testOnly_onPressIn: tmp40,
    testOnly_onPressOut: tmp41,
    testOnly_onLongPress: tmp42,
    children: items12,
  };
  PureNativeButton = hitSlop(tmp6[14]).PureNativeButton;
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(tVProps);
  radius = undefined;
  const tmp33 = onLayout;
  if (android_ripple != null) {
    radius = android_ripple.radius;
  }
  items11 = [{}, style1];
  tmp39 = undefined;
  if (closure_14) {
    tmp39 = onPress;
  }
  tmp40 = undefined;
  if (closure_14) {
    tmp40 = onPressIn;
  }
  tmp41 = undefined;
  if (closure_14) {
    tmp41 = onPressOut;
  }
  tmp42 = undefined;
  if (closure_14) {
    tmp42 = onLongPress;
  }
  items12 = [childrenResult, null];
  return tmp33(GestureDetector, obj12);
}
