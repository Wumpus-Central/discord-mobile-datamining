// _runtime/06388_Animated.js
import _objectWithoutProperties from "_objectWithoutProperties";
import "noop";
import { useRef } from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import ButtonComponent from "ButtonComponent";

let Platform;
let StyleSheet;
let c10;
let c9;
const require = arg1;
let closure_2 = ["onLongPress", "onPress", "onActiveStateChange", "style"];
let closure_3 = ["children", "style", "activeOpacity", "underlayColor"];
let closure_4 = ["children", "style", "ref"];
const Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
class RawButton {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj.needsOffscreenAlphaCompositing = true;
    return jsx(jsxs, obj);
  }
}
class BaseButton {
  constructor(arg0) {
    closure_0 = global;
    closure_1 = onActiveStateChange(false);
    closure_2 = onActiveStateChange(undefined);
    num = global.delayLongPress;
    if (num == null) {
      num = 600;
    }
    c3 = num;
    ({ onLongPress, onPress, onActiveStateChange } = global);
    tmp = onPress(global, closure_2);
    wrappedLongPress = function wrappedLongPress() {
      closure_1.current = true;
      if (closure_4 != null) {
        tmp();
      }
    };
    obj = require("getTVProps");
    tVProps = obj.getTVProps(tmp);
    obj = { style: items };
    items = [, ];
    items[0] = global.style;
    items[1] = false;
    merged = Object.assign(tmp);
    merged1 = Object.assign(tVProps);
    obj.onBegin = function onBegin(pointerInside) {
      if (pointerInside.pointerInside) {
        if (closure_6 != null) {
          tmp(true);
        }
        closure_1.current = false;
        if (closure_4) {
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
      if (closure_6 != null) {
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
const styles = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });

export { RawButton };
export { BaseButton };
export const RectButton = (children) => {
  let activeOpacity;
  let style;
  let underlayColor;
  let closure_0 = children;
  ({ style, activeOpacity, underlayColor } = children);
  let str = "black";
  if (undefined !== underlayColor) {
    str = underlayColor;
  }
  const value = new Animated.Value(0);
  if (style == null) {
    style = {};
  }
  const flattenResult = StyleSheet.flatten(style);
  const obj = {};
  const merged = Object.assign(callback(children, closure_3));
  obj.style = flattenResult;
  obj.onActiveStateChange = function onActiveStateChange(arg0) {
    onActiveStateChange = onActiveStateChange.onActiveStateChange;
    if (onActiveStateChange != null) {
      onActiveStateChange(arg0);
    }
  };
  const items = [underlay.underlay, { opacity: useRef(value).current, backgroundColor: str, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
  const items1 = [callback2(Animated.View, { style: items }), children.children];
  obj.children = items1;
  return callback3(BaseButton, obj);
};
export const BorderlessButton = (ref) => {
  let children;
  let style;
  let closure_0 = ref;
  const value = new Animated.Value(1);
  const current = useRef(value).current;
  ref = ref.ref;
  ({ children, style } = ref);
  const obj = { borderless: true };
  const merged = Object.assign(callback(ref, closure_4));
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
  return closure_9(closure_14, obj);
};
export const PureNativeButton = require("ButtonComponent");