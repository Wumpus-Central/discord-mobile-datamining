// _runtime/06044_PlatformPressable.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";
import Fragment_mod from "react/00021_Fragment.js";

let Fragment;
let Platform;
let Pressable;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const Animated = react_native.Animated;
({ Easing: hasOwnProperty, Platform, Pressable } = react_native);
Fragment = Fragment_mod;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment } = Fragment);
let closure_8 = Animated.createAnimatedComponent(Pressable);
let closure_9 = Platform.Version >= 21;
const forwardRefResult = react.forwardRef(function PlatformPressableInternal(disabled, arg1) {
  let android_ripple;
  let children;
  let fn;
  let fn2;
  let fn3;
  let items2;
  let items3;
  let pressColor;
  let pressOpacity;
  let style;
  let tmp8;
  disabled = disabled.disabled;
  ({
    onPress: dependencyMap,
    onPressIn: _slicedToArray,
    onPressOut: react,
    android_ripple,
    pressColor,
    pressOpacity,
  } = disabled);
  if (pressOpacity === undefined) {
    pressOpacity = 0.3;
  }
  const hoverEffect = disabled.hoverEffect;
  ({ style, children } = disabled);
  const merged = Object.assign(
    disabled,
    Object.assign({
      disabled: 0,
      onPress: 0,
      onPressIn: 0,
      onPressOut: 0,
      android_ripple: 0,
      pressColor: 0,
      pressOpacity: 0,
      hoverEffect: 0,
      style: 0,
      children: 0,
    }),
  );
  let closure_6 = arg1;
  let obj = disabled(1491);
  const dark = obj.useTheme().dark;
  const first = _slicedToArray(
    react.useState(() => {
      const value = new pressOpacity.Value(1);
      return value;
    }),
    1,
  )[0];
  function animateTo(arg0, arg1) {}
  const ref = react.useRef(null);
  const items = [arg1];
  const items1 = [disabled, merged.href];
  const callback = react.useCallback((current) => {
    ref.current = null;
    if (typeof closure_6 === "function") {
      return closure_6(current);
    } else if (null != closure_6) {
      closure_6.current = current;
    }
  }, items);
  const effect = react.useEffect(() => {
    const current = ref.current;
    if (null != merged.href) {
      if (null != current) {
        if (disabled) {
          function preventNavigation(event) {
            event.preventDefault();
            event.stopPropagation();
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
  const obj2 = {
    ref: callback,
    accessible: true,
    role: "button",
    onPress: fn,
    onPressIn: fn2,
    onPressOut: fn3,
    android_ripple: tmp8,
    style: items2,
    children: items3,
  };
  fn = undefined;
  const tmp6 = animateTo;
  const tmp5 = first;
  if (!disabled) {
    fn = (arg0) => {
      if (dependencyMap != null) {
        tmp(arg0);
      }
    };
  }
  fn2 = undefined;
  if (!disabled) {
    fn2 = (arg0) => {
      if (typeof animateTo === "function") {
        if (!closure_9) {
          const timing = Animated.timing;
          const obj = {
            toValue: tmp,
            duration: 0,
            easing: hasOwnProperty.inOut(hasOwnProperty.quad),
            useNativeDriver: true,
          };
          const timingResult = timing(first, obj);
          timingResult.start();
        }
        if (_slicedToArray != null) {
          tmp7(arg0);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }
  fn3 = undefined;
  if (!disabled) {
    fn3 = (arg0) => {
      if (typeof animateTo === "function") {
        if (!closure_9) {
          const timing = Animated.timing;
          const obj = {
            toValue: 1,
            duration: 200,
            easing: hasOwnProperty.inOut(hasOwnProperty.quad),
            useNativeDriver: true,
          };
          const timingResult = timing(first, obj);
          timingResult.start();
        }
        if (react != null) {
          tmp6(arg0);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }
  tmp8 = undefined;
  const tmp7 = ref;
  if (tmp7) {
    if (!disabled) {
      if (undefined === pressColor) {
        let str = "rgba(0, 0, 0, .32)";
        if (dark) {
          str = "rgba(255, 255, 255, .32)";
        }
        pressColor = str;
      }
      const obj3 = { color: pressColor };
      const merged1 = Object.assign(android_ripple);
      tmp8 = obj3;
    }
  }
  let num = 1;
  if (!tmp7) {
    num = 1;
    if (!disabled) {
      num = first;
    }
  }
  items2 = [{ cursor: "auto", opacity: num }, style];
  const merged2 = Object.assign(merged);
  let tmp13 = null;
  if (!disabled) {
    const obj4 = {};
    const merged3 = Object.assign(hoverEffect);
    tmp13 = closure_6(f37416, obj4);
  }
  items3 = [tmp13, children];
  return tmp5(tmp6, obj2);
});
forwardRefResult.displayName = "PlatformPressable";
String.raw(
  HermesBuiltin.getTemplateObject(
    true,
    "\n  .",
    " {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n    background-color: var(--overlay-color);\n    opacity: 0;\n    transition: opacity 0.15s;\n    pointer-events: none;\n  }\n\n  a:hover > .",
    ", button:hover > .",
    " {\n    opacity: var(--overlay-hover-opacity);\n  }\n\n  a:active > .",
    ", button:active > .",
    " {\n    opacity: var(--overlay-active-opacity);\n  }\n",
  ),
  "__react-navigation_elements_Pressable_hover",
  "__react-navigation_elements_Pressable_hover",
  "__react-navigation_elements_Pressable_hover",
  "__react-navigation_elements_Pressable_hover",
  "__react-navigation_elements_Pressable_hover",
);
const f37416 = (arg0) => {
  let activeOpacity;
  let color;
  let hoverOpacity;
  ({ color, hoverOpacity, activeOpacity } = arg0);
  return null;
};

export const PlatformPressable = forwardRefResult;
