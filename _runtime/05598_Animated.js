import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let Pressable;
let c5;
const require = arg1;
const Animated = get_ActivityIndicator.Animated;
({ Easing: c5, Platform, Pressable } = get_ActivityIndicator);
let closure_7 = Animated.createAnimatedComponent(Pressable);
let closure_8 = Platform.Version >= 21;

export default function PlatformPressable(style) {
  let android_ripple;
  let dependencyMap;
  let pressColor;
  let pressOpacity;
  let require;
  ({ onPressIn: require, onPressOut: dependencyMap, android_ripple, pressColor, pressOpacity } = style);
  if (pressOpacity === undefined) {
    pressOpacity = 0.3;
  }
  const merged = Object.assign(style, Object.create(null));
  let first;
  let animateTo;
  let obj = require(1481) /* Link */;
  first = pressOpacity(first.useState(() => {
    const value = new animateTo.Value(1);
    return value;
  }), 1)[0];
  animateTo = function animateTo(arg0, arg1) {

  };
  obj = {
    onPressIn(arg0) {
      if (typeof animateTo !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      if (!outer1_8) {
        const obj = { toValue: null, duration: 0, easing: null, useNativeDriver: true };
        obj[0] = pressOpacity;
        obj[2] = outer1_5.inOut(outer1_5.quad);
        animateTo.timing(first, obj).start();
        const timingResult = animateTo.timing(first, obj);
      }
      if (closure_0 != null) {
        tmp6(arg0);
      }
    },
    onPressOut(arg0) {
      if (typeof animateTo !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      if (!outer1_8) {
        const obj = { toValue: 1, duration: 200, easing: null, useNativeDriver: true };
        obj[2] = outer1_5.inOut(outer1_5.quad);
        animateTo.timing(first, obj).start();
        const timingResult = animateTo.timing(first, obj);
      }
      if (closure_1 != null) {
        tmp5(arg0);
      }
    },
    android_ripple: null,
    style: null
  };
  let tmp6;
  if (closure_8) {
    if (undefined === pressColor) {
      let str = "rgba(0, 0, 0, .32)";
      if (obj.useTheme().dark) {
        str = "rgba(255, 255, 255, .32)";
      }
      pressColor = str;
    }
    obj = { color: null };
    obj[0] = pressColor;
    const merged1 = Object.assign(android_ripple);
    tmp6 = obj;
  }
  obj[2] = tmp6;
  let num = 1;
  if (!closure_8) {
    num = first;
  }
  const items = [{ opacity: num }, style.style];
  obj[3] = items;
  const merged2 = Object.assign(merged);
  return <closure_7 onPressIn={function onPressIn(arg0) {
    if (typeof animateTo !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    if (!outer1_8) {
      const obj = { toValue: null, duration: 0, easing: null, useNativeDriver: true };
      obj[0] = pressOpacity;
      obj[2] = outer1_5.inOut(outer1_5.quad);
      animateTo.timing(first, obj).start();
      const timingResult = animateTo.timing(first, obj);
    }
    if (closure_0 != null) {
      tmp6(arg0);
    }
  }} onPressOut={function onPressOut(arg0) {
    if (typeof animateTo !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    if (!outer1_8) {
      const obj = { toValue: 1, duration: 200, easing: null, useNativeDriver: true };
      obj[2] = outer1_5.inOut(outer1_5.quad);
      animateTo.timing(first, obj).start();
      const timingResult = animateTo.timing(first, obj);
    }
    if (closure_1 != null) {
      tmp5(arg0);
    }
  }} android_ripple={null} style={null} />;
};