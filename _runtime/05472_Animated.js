// _runtime/05472_Animated.js
import closure_2 from "metro/00032__slicedToArray.js";
import importAllResult from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const Animated = get_ActivityIndicator.Animated;
({ Easing: c5, Platform, Pressable } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment } = jsxProd);
let closure_8 = Animated.createAnimatedComponent(Pressable);
let closure_9 = Platform.Version >= 21;
const forwardRefResult = importAllResult.forwardRef(function PlatformPressableInternal(disabled) {
  disabled = disabled.disabled;
  ({ onPress: dependencyMap, onPressIn: closure_2, onPressOut: closure_3, android_ripple, pressColor, pressOpacity } = disabled);
  if (pressOpacity === undefined) {
    pressOpacity = 0.3;
  }
  const hoverEffect = disabled.hoverEffect;
  ({ style, children } = disabled);
  const merged = Object.assign(disabled, Object.create(null));
  const callback2 = arg1;
  let first;
  let animateTo;
  closure_9 = undefined;
  let obj = disabled(1501);
  first = callback(importAllResult.useState(() => {
    const value = new pressOpacity.Value(1);
    return value;
  }), 1)[0];
  animateTo = function animateTo(arg0, arg1) {

  };
  closure_9 = importAllResult.useRef(null);
  const items = [arg1];
  const items1 = [disabled, merged.href];
  callback = importAllResult.useCallback((current) => {
    closure_9.current = null;
    if (typeof closure_6 === "function") {
      return tmp(current);
    } else if (null != tmp) {
      tmp.current = current;
    }
  }, items);
  const effect = importAllResult.useEffect(() => {
    const current = ref.current;
    if (null != merged.href) {
      if (null != current) {
        if (current) {
          function preventNavigation(preventDefault) {
            preventDefault.preventDefault();
            preventDefault.stopPropagation();
          }
          const listener = current.addEventListener("click", preventNavigation, true);
          const listener1 = current.addEventListener("auxclick", preventNavigation, true);
          return () => {
            const removed = current.removeEventListener("click", preventNavigation, true);
            const removed1 = current.removeEventListener("auxclick", preventNavigation, true);
          };
        }
      }
    }
  }, items1);
  obj = { ref: callback, accessible: true, role: "button", onPress: null, onPressIn: null, onPressOut: null, android_ripple: null, style: null };
  let fn;
  if (!disabled) {
    fn = (arg0) => {
      if (closure_1 != null) {
        tmp(arg0);
      }
    };
  }
  obj[3] = fn;
  let fn2;
  if (!disabled) {
    fn2 = (arg0) => {
      if (typeof animateTo !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (!closure_9) {
        const obj = { toValue: null, duration: 0, easing: null, useNativeDriver: true };
        obj[0] = pressOpacity;
        obj[2] = merged.inOut(merged.quad);
        pressOpacity.timing(first, obj).start();
        const timingResult = pressOpacity.timing(first, obj);
      }
      if (closure_2 != null) {
        tmp6(arg0);
      }
    };
  }
  obj[4] = fn2;
  let fn3;
  if (!disabled) {
    fn3 = (arg0) => {
      if (typeof animateTo !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (!closure_9) {
        const obj = { toValue: 1, duration: 200, easing: null, useNativeDriver: true };
        obj[2] = merged.inOut(merged.quad);
        pressOpacity.timing(first, obj).start();
        const timingResult = pressOpacity.timing(first, obj);
      }
      if (closure_3 != null) {
        tmp5(arg0);
      }
    };
  }
  obj[5] = fn3;
  let tmp8;
  if (closure_9) {
    if (!disabled) {
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
      tmp8 = obj;
    }
  }
  obj[6] = tmp8;
  let num = 1;
  if (!closure_9) {
    num = 1;
    if (!disabled) {
      num = first;
    }
  }
  const items2 = [{ cursor: "auto", opacity: num }, style];
  obj[7] = items2;
  const merged2 = Object.assign(merged);
  let tmp13 = null;
  if (!disabled) {
    obj1 = {};
    const merged3 = Object.assign(hoverEffect);
    tmp13 = callback2(f36076, obj1);
  }
  const items3 = [tmp13, children];
  obj.children = items3;
  return first(animateTo, obj);
});
forwardRefResult.displayName = "PlatformPressable";
String.raw(HermesBuiltin.getTemplateObject(true, "\n  .", " {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n    background-color: var(--overlay-color);\n    opacity: 0;\n    transition: opacity 0.15s;\n    pointer-events: none;\n  }\n\n  a:hover > .", ", button:hover > .", " {\n    opacity: var(--overlay-hover-opacity);\n  }\n\n  a:active > .", ", button:active > .", " {\n    opacity: var(--overlay-active-opacity);\n  }\n"), "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover");
const f36076 = (arg0) => {
  ({ color, hoverOpacity, activeOpacity } = arg0);
  return null;
};

export const PlatformPressable = forwardRefResult;