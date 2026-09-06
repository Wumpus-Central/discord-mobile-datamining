// _runtime/metro/06666__.js
import ButtonComponentDefault from "../06751_ButtonComponent.js";
import _mod6753 from "06753__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";
import 06667__ from "06667__.js";

require = fn;
let closure_2 = ["onLongPress", "onPress", "onActiveStateChange", "style"];
let closure_3 = ["children", "style", "activeOpacity", "underlayColor"];
let closure_4 = ["children", "style", "ref"];
const useRef = fn(19).useRef;
get_ActivityIndicator = fn(17);
const Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ButtonComponent = module_6667(ButtonComponentDefault, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
class RawButton {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj.needsOffscreenAlphaCompositing = true;
    return jsx(closure_11, obj);
  }
}
class BaseButton {
  constructor(arg0) {
    closure_0 = global;
    closure_1 = useRef(false);
    closure_2 = useRef(undefined);
    num = global.delayLongPress;
    if (num == null) {
      num = 600;
    }
    c3 = num;
    ({ onLongPress, onPress, onActiveStateChange } = global);
    tmp = closure_5(global, closure_2);
    wrappedLongPress = function wrappedLongPress() {
      closure_1.current = true;
      if (closure_1_4 != null) {
        tmp();
      }
    };
    obj = closure_0(closure_1[6]);
    tVProps = obj.getTVProps(tmp);
    obj = { style: null };
    items = [, ];
    items[0] = global.style;
    items[1] = false;
    obj.style = items;
    merged = Object.assign(tmp);
    merged1 = Object.assign(tVProps);
    obj.onBegin = function onBegin(pointerInside) {
      if (pointerInside.pointerInside) {
        if (useRef != null) {
          tmp(true);
        }
        closure_1.current = false;
        if (closure_1_4) {
          const _setTimeout = setTimeout;
          closure_2.current = setTimeout(wrappedLongPress, num);
        }
        const onBegin = delayLongPress.onBegin;
        if (onBegin != null) {
          onBegin(pointerInside);
        }
      }
    };
    obj.onActivate = function onActivate(pointerInside) {
      pointerInside = pointerInside.pointerInside;
      if (!pointerInside) {
        pointerInside = undefined === ref2.current;
      }
      if (!pointerInside) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = undefined;
      }
      const onActivate = delayLongPress.onActivate;
      if (onActivate != null) {
        onActivate(pointerInside);
      }
    };
    obj.onDeactivate = function onDeactivate(arg0) {
      const onDeactivate = delayLongPress.onDeactivate;
      if (onDeactivate != null) {
        onDeactivate(arg0);
      }
    };
    obj.onFinalize = function onFinalize(canceled) {
      if (useRef != null) {
        tmp(false);
      }
      let current = canceled.canceled;
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        if (_objectWithoutProperties != null) {
          tmp4(canceled.pointerInside);
        }
      }
      if (undefined !== ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp6.current);
        tmp6.current = undefined;
      }
      const onFinalize = delayLongPress.onFinalize;
      if (onFinalize != null) {
        onFinalize(canceled);
      }
    };
    return jsx(RawButton, obj);
  }
}
let closure_14 = Animated.createAnimatedComponent(BaseButton);
const underlay = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });

export { RawButton };
export { BaseButton };
export const RectButton = (children) => {
  let onActiveStateChange = children;
  ({ style, activeOpacity, underlayColor } = children);
  let str = "black";
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  value = new Animated.Value(0);
  if (style == null) {
    style = {};
  }
  const flattenResult = StyleSheet.flatten(style);
  let obj = {};
  const merged = Object.assign(_objectWithoutProperties(children, closure_3));
  obj.style = flattenResult;
  obj.onActiveStateChange = function onActiveStateChange(arg0) {
    onActiveStateChange = onActiveStateChange.onActiveStateChange;
    if (onActiveStateChange != null) {
      onActiveStateChange(arg0);
    }
  };
  obj = { style: null };
  const items = [underlay.underlay, { opacity: useRef(value).current, backgroundColor: str, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
  obj.style = items;
  const items1 = [React7(Animated.View, obj), children.children];
  obj.children = items1;
  return closure_1_10(BaseButton, obj);
};
export const BorderlessButton = (ref) => {
  let onActiveStateChange = ref;
  value = new Animated.Value(1);
  const current = useRef(value).current;
  ref = ref.ref;
  ({ children, style } = ref);
  const obj = { borderless: true };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_4));
  if (ref == null) {
    ref = null;
  }
  obj.ref = ref;
  obj.onActiveStateChange = function onActiveStateChange(arg0) {
    onActiveStateChange = onActiveStateChange.onActiveStateChange;
    if (onActiveStateChange != null) {
      onActiveStateChange(arg0);
    }
  };
  const items = [style, false];
  obj.style = items;
  obj.children = children;
  return React7(closure_14, obj);
};
export const PureNativeButton = ButtonComponentDefault;