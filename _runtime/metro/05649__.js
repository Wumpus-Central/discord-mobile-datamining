// === Module 5649: ? ===

// Module 5649
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
const Animated = get_ActivityIndicator.Animated;
({ Easing: hasOwnProperty, Platform, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment } = jsxProd);
let closure_8 = Animated.createAnimatedComponent(Pressable);
let closure_9 = Platform.Version >= 21;
const forwardRefResult = noop.forwardRef(function PlatformPressableInternal(disabled, arg1) {
  disabled = disabled.disabled;
  ({ onPress: dependencyMap, onPressIn: _slicedToArray, onPressOut: noop, android_ripple, pressColor, pressOpacity } = disabled);
  if (pressOpacity === undefined) {
    pressOpacity = 0.3;
  }
  const hoverEffect = disabled.hoverEffect;
  ({ style, children } = disabled);
  const merged = Object.assign(disabled, Object.assign({ disabled: 0, onPress: 0, onPressIn: 0, onPressOut: 0, android_ripple: 0, pressColor: 0, pressOpacity: 0, hoverEffect: 0, style: 0, children: 0 }));
  closure_6 = arg1;
  disabled(1484);
  const first = _slicedToArray(noop.useState(() => {
    value = new pressOpacity.Value(1);
    return value;
  }), 1)[0];
  function animateTo(arg0, arg1) {

  }
  const ref = noop.useRef(null);
  const items = [arg1];
  const items1 = [disabled, merged.href];
  const callback = noop.useCallback((current) => {
    closure_9.current = null;
    if (typeof closure_6 === "function") {
      return closure_6(current);
    } else if (null != closure_6) {
      closure_6.current = current;
    }
  }, items);
  const effect = noop.useEffect(() => {
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
  let obj = { ref: callback, accessible: true, role: "button", onPress: null, onPressIn: null, onPressOut: null, android_ripple: null, style: null };
  let fn;
  if (!disabled) {
    fn = (arg0) => {
      if (dependencyMap != null) {
        tmp(arg0);
      }
    };
  }
  obj.onPress = fn;
  let fn2;
  if (!disabled) {
    fn2 = (arg0) => {
      if (typeof animateTo === "function") {
        if (!closure_9) {
          const obj = { toValue: tmp, duration: 0, easing: hasOwnProperty.inOut(hasOwnProperty.quad), useNativeDriver: true };
          Animated.timing(first, obj).start();
          const timingResult = Animated.timing(first, obj);
        }
        if (_slicedToArray != null) {
          tmp7(arg0);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }
  obj.onPressIn = fn2;
  let fn3;
  if (!disabled) {
    fn3 = (arg0) => {
      if (typeof animateTo === "function") {
        if (!closure_9) {
          const obj = { toValue: 1, duration: 200, easing: hasOwnProperty.inOut(hasOwnProperty.quad), useNativeDriver: true };
          Animated.timing(first, obj).start();
          const timingResult = Animated.timing(first, obj);
        }
        if (noop != null) {
          tmp6(arg0);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  }
  obj.onPressOut = fn3;
  let tmp8;
  if (ref) {
    if (!disabled) {
      if (undefined === pressColor) {
        let str = "rgba(0, 0, 0, .32)";
        if (obj.useTheme().dark) {
          str = "rgba(255, 255, 255, .32)";
        }
        pressColor = str;
      }
      obj = { color: pressColor };
      const merged1 = Object.assign(android_ripple);
      tmp8 = obj;
    }
  }
  obj.android_ripple = tmp8;
  let num = 1;
  if (!ref) {
    num = 1;
    if (!disabled) {
      num = first;
    }
  }
  const items2 = [{ cursor: "auto", opacity: num }, style];
  obj.style = items2;
  const merged2 = Object.assign(merged);
  let tmp13 = null;
  if (!disabled) {
    const obj1 = {};
    const merged3 = Object.assign(hoverEffect);
    tmp13 = closure_6(f36956, obj1);
  }
  const items3 = [tmp13, children];
  obj.children = items3;
  return first(animateTo, obj);
});
forwardRefResult.displayName = "PlatformPressable";
String.raw(HermesBuiltin.getTemplateObject(true, "\n  .", " {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n    background-color: var(--overlay-color);\n    opacity: 0;\n    transition: opacity 0.15s;\n    pointer-events: none;\n  }\n\n  a:hover > .", ", button:hover > .", " {\n    opacity: var(--overlay-hover-opacity);\n  }\n\n  a:active > .", ", button:active > .", " {\n    opacity: var(--overlay-active-opacity);\n  }\n"), "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover", "__react-navigation_elements_Pressable_hover");
const f36956 = (arg0) => {
  ({ color, hoverOpacity, activeOpacity } = arg0);
  return null;
};

export const PlatformPressable = forwardRefResult;