// === Module 6158: RawButton ===

// Module 6158 (RawButton)
import react2 from "react" /* 19 */;
import ButtonComponentDefault from "ButtonComponent" /* 6243 */;
import react_native from "react-native" /* 6245 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createNativeWrapper from "createNativeWrapper" /* 6159 */;

let onActiveStateChange;

let Platform;
let StyleSheet;
let c10;
let c9;
let closure_2 = ["onLongPress", "onPress", "onActiveStateChange", "style"];
let closure_3 = ["children", "style", "activeOpacity", "underlayColor"];
let closure_4 = ["children", "style", "ref"];
const useRef = react2.useRef;
const Animated = react_native2.Animated;
({ Platform, StyleSheet } = react_native2);
({ jsx: c9, jsxs: c10 } = Fragment);
const ButtonComponent = createNativeWrapper(ButtonComponentDefault, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
class RawButton {
  constructor(arg0) {
    const obj = { needsOffscreenAlphaCompositing: true };
    const merged = Object.assign(arg0);
    return React4(ButtonComponent, obj);
  }
}
class BaseButton {
  constructor(delayLongPress) {
    let closure_129_4;
    let closure_129_5;
    let closure_129_6;
    let items;
    let closure_0 = delayLongPress;
    let closure_1 = useRef(false);
    closure_2 = useRef(undefined);
    let num = delayLongPress.delayLongPress;
    if (num == null) {
      num = 600;
    }
    ({ onLongPress: closure_129_4, onPress: closure_129_5, onActiveStateChange: closure_129_6 } = delayLongPress);
    const style = delayLongPress.style;
    const tmp = _objectWithoutProperties(delayLongPress, closure_2);
    function wrappedLongPress() {
      ref.current = true;
      if (closure_1_4 != null) {
        tmp();
      }
    }
    const obj = react_native;
    const tVProps = obj.getTVProps(tmp);
    const obj2 = {
      style: items,
      onBegin(pointerInside) {
        if (pointerInside.pointerInside) {
          if (closure_1_6 != null) {
            tmp(true);
          }
          ref.current = false;
          if (closure_1_4) {
            const _setTimeout = setTimeout;
            ref2.current = setTimeout(wrappedLongPress, num);
          }
          const onBegin = closure_0.onBegin;
          if (onBegin != null) {
            onBegin(pointerInside);
          }
        }
      },
      onActivate(pointerInside) {
        pointerInside = pointerInside.pointerInside || undefined === ref2.current;
        if (!pointerInside) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = undefined;
        }
        const onActivate = closure_0.onActivate;
        if (onActivate != null) {
          onActivate(pointerInside);
        }
      },
      onDeactivate(dependencyMap) {
        const onDeactivate = closure_0.onDeactivate;
        if (onDeactivate != null) {
          onDeactivate(dependencyMap);
        }
      },
      onFinalize(canceled) {
        if (closure_1_6 != null) {
          tmp(false);
        }
        const current = canceled.canceled || ref.current;
        if (!current) {
          if (closure_1_5 != null) {
            tmp4(canceled.pointerInside);
          }
        }
        if (undefined !== ref2.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref2.current);
          ref2.current = undefined;
        }
        const onFinalize = closure_0.onFinalize;
        if (onFinalize != null) {
          onFinalize(canceled);
        }
      }
    };
    items = [style, false];
    const merged = Object.assign(tmp);
    const merged1 = Object.assign(tVProps);
    return React4(RawButton, obj2);
  }
}
let closure_14 = Animated.createAnimatedComponent(BaseButton);
const underlay = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });

export { RawButton };
export { BaseButton };
export const RectButton = (children) => {
  let activeOpacity;
  let items;
  let items1;
  let style;
  let underlayColor;
  let closure_0 = children;
  ({ style, activeOpacity, underlayColor } = children);
  let str = "black";
  children = children.children;
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  const tmp = _objectWithoutProperties(children, closure_3);
  const value = new Animated.Value(0);
  const current = useRef(value).current;
  const flatten = StyleSheet.flatten;
  if (style == null) {
    style = {};
  }
  const flattenResult = flatten(style);
  const obj = {
    style: flattenResult,
    onActiveStateChange(arg0) {
      onActiveStateChange = onActiveStateChange.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    },
    children: items1
  };
  const merged = Object.assign(tmp);
  const obj2 = { style: items };
  items = [underlay.underlay, { opacity: current, backgroundColor: str, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
  items1 = [React4(Animated.View, obj2), children];
  return authStore(BaseButton, obj);
};
export const BorderlessButton = (ref) => {
  let children;
  let items;
  let style;
  let closure_0 = ref;
  const value = new Animated.Value(1);
  const current = useRef(value).current;
  ref = ref.ref;
  ({ children, style } = ref);
  const obj = {
    borderless: true,
    ref,
    onActiveStateChange(arg0) {
      onActiveStateChange = onActiveStateChange.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    },
    style: items,
    children
  };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_4));
  if (ref == null) {
    ref = null;
  }
  items = [style, false];
  return React4(closure_14, obj);
};
export const PureNativeButton = ButtonComponentDefault;