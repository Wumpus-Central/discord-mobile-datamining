// === Module 6768: ? ===

// Module 6768
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import ButtonComponentDefault from "ButtonComponent" /* 6751 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;
import module_6769 from "module_6769" /* 6769 */;

let InnerBorderlessButton = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["rippleColor", "style"];
let closure_4 = ["children", "style", "activeOpacity"];
let closure_5 = ["children", "style", "innerRef", "activeOpacity"];
_possibleConstructorReturnDefault;
get_ActivityIndicator = fn(17);
const Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ButtonComponent = module_6769(ButtonComponentDefault, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
class LegacyRawButton {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj.needsOffscreenAlphaCompositing = true;
    return jsx(closure_15, obj);
  }
}
class InnerBaseButton {
  constructor(arg0) {
    self = this;
    tmp = closure_7(this, InnerBorderlessButton);
    items = [];
    items[0] = global;
    tmp2 = closure_9;
    obj = closure_9(InnerBorderlessButton);
    tmp3 = closure_8;
    if (closure_2_14()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.handleEvent = (nativeEvent) => {
      nativeEvent = nativeEvent.nativeEvent;
      ({ state, pointerInside } = nativeEvent);
      let tmp = pointerInside;
      if (pointerInside) {
        let tmp4 = state === InnerBorderlessButton(6661).State.BEGAN;
        if (!tmp4) {
          tmp4 = state === InnerBorderlessButton(6661).State.ACTIVE;
        }
        tmp = tmp4;
      }
      if (tmp8) {
        const props = closure_0.props;
        props.onActiveStateChange(tmp);
      }
      const longPressDetected = closure_0.longPressDetected;
      let onPress = !longPressDetected;
      if (!longPressDetected) {
        onPress = nativeEvent.oldState === InnerBorderlessButton(6661).State.ACTIVE;
      }
      if (onPress) {
        onPress = state !== InnerBorderlessButton(6661).State.CANCELLED;
      }
      if (onPress) {
        onPress = closure_0.lastIsPressed;
      }
      if (onPress) {
        onPress = closure_0.props.onPress;
      }
      if (onPress) {
        const props2 = closure_0.props;
        props2.onPress(pointerInside);
      }
      if (!closure_0.lastIsPressed) {
        if (state === InnerBorderlessButton(6661).State.BEGAN) {
          if (pointerInside) {
            closure_0.longPressDetected = false;
            if (closure_0.props.onLongPress) {
              const _setTimeout = setTimeout;
              closure_0.longPressTimeout = setTimeout(closure_0.onLongPress, closure_0.props.delayLongPress);
            }
          }
          closure_0.lastIsPressed = tmp;
        }
      }
      let tmp18 = state !== InnerBorderlessButton(6661).State.ACTIVE || pointerInside || undefined === closure_0.longPressTimeout;
      if (tmp18) {
        let tmp19 = undefined === closure_0.longPressTimeout;
        if (!tmp19) {
          let tmp22 = state !== InnerBorderlessButton(6661).State.END;
          if (tmp22) {
            tmp22 = state !== InnerBorderlessButton(6661).State.CANCELLED;
          }
          if (tmp22) {
            tmp22 = state !== InnerBorderlessButton(6661).State.FAILED;
          }
          tmp19 = tmp22;
        }
        tmp18 = tmp19;
      }
      if (!tmp18) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_0.longPressTimeout);
        closure_0.longPressTimeout = undefined;
      }
      tmp8 = tmp !== closure_0.lastIsPressed && closure_0.props.onActiveStateChange;
    };
    tmp3Result.onLongPress = () => {
      closure_0.longPressDetected = true;
      const props = closure_0.props;
      const onLongPress = props.onLongPress;
      if (onLongPress != null) {
        onLongPress();
      }
    };
    tmp3Result.onHandlerStateChange = (arg0) => {
      const props = closure_0.props;
      if (props.onHandlerStateChange != null) {
        onHandlerStateChange(arg0);
      }
      closure_0.handleEvent(arg0);
    };
    tmp3Result.onGestureEvent = (arg0) => {
      const props = closure_0.props;
      const onGestureEvent = props.onGestureEvent;
      if (onGestureEvent != null) {
        onGestureEvent(arg0);
      }
      closure_0.handleEvent(arg0);
    };
    tmp3Result.lastIsPressed = false;
    tmp3Result.longPressDetected = false;
    return tmp3Result;
  }
}
InnerBorderlessButton = InnerBaseButton;
_inherits(InnerBaseButton, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    ({ rippleColor, style } = props);
    const obj = { ref: this.props.innerRef, rippleColor, style: null };
    const items = [style, false];
    obj.style = items;
    const merged = Object.assign(_objectWithoutProperties(props, closure_3));
    ({ onGestureEvent: obj.onGestureEvent, onHandlerStateChange: obj.onHandlerStateChange } = this);
    return closure_1_12(LegacyRawButton, obj);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(InnerBaseButton, items);
importDefaultResultResult.defaultProps = { delayLongPress: 600 };
let closure_18 = Animated.createAnimatedComponent(importDefaultResultResult);
class LegacyBaseButton {
  constructor(arg0) {
    obj = { innerRef: global.ref };
    merged = Object.assign(Object.assign(global, Object.assign({ ref: 0 })));
    return jsx(closure_17, obj);
  }
}
function AnimatedBaseButton(innerRef) {
  const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
  return closure_1_12(closure_18, { innerRef: innerRef.ref });
}
const underlay = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });
class InnerRectButton {
  constructor(arg0) {
    self = this;
    tmp = closure_7(this, InnerBorderlessButton);
    items = [];
    items[0] = global;
    tmp2 = closure_9;
    obj = closure_9(InnerBorderlessButton);
    tmp3 = closure_8;
    if (closure_2_14()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.onActiveStateChange = (arg0) => {
      props = props.props;
      const onActiveStateChange = props.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    };
    value = new c10.Value(0);
    tmp3Result.opacity = value;
    return tmp3Result;
  }
}
InnerBorderlessButton = InnerRectButton;
_inherits(InnerRectButton, noop.Component);
const entry1 = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ children, style } = props);
    let flattenResult = StyleSheet.flatten(style);
    if (flattenResult == null) {
      flattenResult = {};
    }
    let obj = {};
    const merged = Object.assign(_objectWithoutProperties(props, closure_4));
    obj.ref = self.props.innerRef;
    obj.style = flattenResult;
    obj.onActiveStateChange = self.onActiveStateChange;
    obj = { style: null };
    const items = [underlay.underlay, { opacity: self.opacity, backgroundColor: self.props.underlayColor, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
    obj.style = items;
    const items1 = [closure_1_12(Animated.View, obj), children];
    obj.children = items1;
    return map1(LegacyBaseButton, obj);
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(InnerRectButton, items1);
importDefaultResultResult1.defaultProps = { activeOpacity: 0.105, underlayColor: "black" };
class InnerBorderlessButton {
  constructor(arg0) {
    self = this;
    tmp = closure_7(this, InnerBorderlessButton);
    items = [];
    items[0] = global;
    tmp2 = closure_9;
    obj = closure_9(InnerBorderlessButton);
    tmp3 = closure_8;
    if (closure_2_14()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.onActiveStateChange = (arg0) => {
      props = props.props;
      const onActiveStateChange = props.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    };
    value = new c10.Value(1);
    tmp3Result.opacity = value;
    return tmp3Result;
  }
}
_inherits(InnerBorderlessButton, noop.Component);
const entry2 = {
  key: "render",
  value: function render() {
    const props = this.props;
    ({ children, style, innerRef } = props);
    const obj = {};
    const merged = Object.assign(_objectWithoutProperties(props, closure_5));
    obj.innerRef = innerRef;
    obj.onActiveStateChange = this.onActiveStateChange;
    const items = [style, false];
    obj.style = items;
    obj.children = children;
    return closure_1_12(AnimatedBaseButton, obj);
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(InnerBorderlessButton, items2);
importDefaultResultResult2.defaultProps = { activeOpacity: 0.3, borderless: true };

export { LegacyRawButton };
export { LegacyBaseButton };
export const LegacyRectButton = (innerRef) => {
  const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
  return closure_1_12(importDefaultResultResult1, { innerRef: innerRef.ref });
};
export const LegacyBorderlessButton = (innerRef) => {
  const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
  return closure_1_12(importDefaultResultResult2, { innerRef: innerRef.ref });
};
export const LegacyPureNativeButton = (arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.needsOffscreenAlphaCompositing = true;
  return closure_1_12(ButtonComponentDefault, obj);
};