// _runtime/06490__isNativeReflectConstruct.js
import ButtonComponentDefault from "06473_ButtonComponent.js";
import itemsDefault from "06491_items.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import importDefaultResult from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import importDefaultResult1 from "00098__inherits.js";
import importAllResult from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

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
const Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_15 = itemsDefault(ButtonComponentDefault, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
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
    tmp = closure_7(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_9;
    obj = closure_9(closure_0);
    tmp3 = closure_8;
    if (_isNativeReflectConstruct()) {
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
        let tmp4 = state === lib(dependencyMap[11]).State.BEGAN;
        if (!tmp4) {
          tmp4 = state === lib(dependencyMap[11]).State.ACTIVE;
        }
        tmp = tmp4;
      }
      if (tmp8) {
        const props = lib.props;
        props.onActiveStateChange(tmp);
      }
      const longPressDetected = lib.longPressDetected;
      let onPress = !longPressDetected;
      if (!longPressDetected) {
        onPress = nativeEvent.oldState === lib(dependencyMap[11]).State.ACTIVE;
      }
      if (onPress) {
        onPress = state !== lib(dependencyMap[11]).State.CANCELLED;
      }
      if (onPress) {
        onPress = lib.lastIsPressed;
      }
      if (onPress) {
        onPress = lib.props.onPress;
      }
      if (onPress) {
        const props2 = lib.props;
        props2.onPress(pointerInside);
      }
      if (!lib.lastIsPressed) {
        if (state === lib(dependencyMap[11]).State.BEGAN) {
          if (pointerInside) {
            lib.longPressDetected = false;
            if (lib.props.onLongPress) {
              const _setTimeout = setTimeout;
              lib.longPressTimeout = setTimeout(lib.onLongPress, lib.props.delayLongPress);
            }
          }
          lib.lastIsPressed = tmp;
        }
      }
      let tmp18 = state !== lib(dependencyMap[11]).State.ACTIVE || pointerInside || undefined === lib.longPressTimeout;
      if (tmp18) {
        let tmp19 = undefined === lib.longPressTimeout;
        if (!tmp19) {
          let tmp22 = state !== lib(dependencyMap[11]).State.END;
          if (tmp22) {
            tmp22 = state !== lib(dependencyMap[11]).State.CANCELLED;
          }
          if (tmp22) {
            tmp22 = state !== lib(dependencyMap[11]).State.FAILED;
          }
          tmp19 = tmp22;
        }
        tmp18 = tmp19;
      }
      if (!tmp18) {
        const _clearTimeout = clearTimeout;
        clearTimeout(lib.longPressTimeout);
        lib.longPressTimeout = undefined;
      }
      tmp8 = tmp !== lib.lastIsPressed && lib.props.onActiveStateChange;
    };
    tmp3Result.onLongPress = () => {
      lib.longPressDetected = true;
      const props = lib.props;
      const onLongPress = props.onLongPress;
      if (onLongPress != null) {
        onLongPress();
      }
    };
    tmp3Result.onHandlerStateChange = (arg0) => {
      const props = lib.props;
      if (props.onHandlerStateChange != null) {
        onHandlerStateChange(arg0);
      }
      lib.handleEvent(arg0);
    };
    tmp3Result.onGestureEvent = (arg0) => {
      const props = lib.props;
      const onGestureEvent = props.onGestureEvent;
      if (onGestureEvent != null) {
        onGestureEvent(arg0);
      }
      lib.handleEvent(arg0);
    };
    tmp3Result.lastIsPressed = false;
    tmp3Result.longPressDetected = false;
    return tmp3Result;
  }
}
InnerBorderlessButton = InnerBaseButton;
importDefaultResult1(InnerBaseButton, importAllResult.Component);
let obj = {
  key: "render",
  value: function render() {
    const props = this.props;
    ({ rippleColor, style } = props);
    const obj = { ref: this.props.innerRef, rippleColor, style: items };
    items = [style, false];
    const merged = Object.assign(callback(props, closure_3));
    ({ onGestureEvent: obj.onGestureEvent, onHandlerStateChange: obj.onHandlerStateChange } = this);
    return callback4(LegacyRawButton, obj);
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(InnerBaseButton, items);
importDefaultResultResult.defaultProps = { delayLongPress: 600 };
let closure_18 = Animated.createAnimatedComponent(importDefaultResultResult);
class LegacyBaseButton {
  constructor(arg0) {
    obj = { innerRef: global.ref };
    merged = Object.assign(Object.assign(global, Object.create(null)));
    return jsx(closure_17, obj);
  }
}
function AnimatedBaseButton(innerRef) {
  const merged = Object.assign(Object.assign(innerRef, Object.create(null)));
  return callback4(closure_18, { innerRef: innerRef.ref });
}
const styles = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });
class InnerRectButton {
  constructor(arg0) {
    self = this;
    tmp = closure_7(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_9;
    obj = closure_9(closure_0);
    tmp3 = closure_8;
    if (_isNativeReflectConstruct()) {
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
    value = new Animated.Value(0);
    tmp3Result.opacity = value;
    return tmp3Result;
  }
}
InnerBorderlessButton = InnerRectButton;
importDefaultResult1(InnerRectButton, importAllResult.Component);
obj = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    ({ children, style } = props);
    let flattenResult = StyleSheet.flatten(style);
    if (flattenResult == null) {
      flattenResult = {};
    }
    const obj = {};
    const merged = Object.assign(callback(props, closure_4));
    obj.ref = self.props.innerRef;
    obj.style = flattenResult;
    obj.onActiveStateChange = self.onActiveStateChange;
    const items = [underlay.underlay, { opacity: self.opacity, backgroundColor: self.props.underlayColor, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
    const items1 = [callback4(Animated.View, { style: items }), children];
    obj.children = items1;
    return callback5(LegacyBaseButton, obj);
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(InnerRectButton, items1);
importDefaultResultResult1.defaultProps = { activeOpacity: 0.105, underlayColor: "black" };
class InnerBorderlessButton {
  constructor(arg0) {
    self = this;
    tmp = closure_7(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_9;
    obj = closure_9(closure_0);
    tmp3 = closure_8;
    if (_isNativeReflectConstruct()) {
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
    value = new Animated.Value(1);
    tmp3Result.opacity = value;
    return tmp3Result;
  }
}
importDefaultResult1(InnerBorderlessButton, importAllResult.Component);
obj = {
  key: "render",
  value: function render() {
    const props = this.props;
    ({ children, style, innerRef } = props);
    const obj = {};
    const merged = Object.assign(callback(props, closure_5));
    obj.innerRef = innerRef;
    obj.onActiveStateChange = this.onActiveStateChange;
    const items = [style, false];
    obj.style = items;
    obj.children = children;
    return callback4(AnimatedBaseButton, obj);
  }
};
const items2 = [obj];
const importDefaultResultResult2 = importDefaultResult(InnerBorderlessButton, items2);
importDefaultResultResult2.defaultProps = { activeOpacity: 0.3, borderless: true };

export { LegacyRawButton };
export { LegacyBaseButton };
export const LegacyRectButton = (innerRef) => {
  const merged = Object.assign(Object.assign(innerRef, Object.create(null)));
  return callback4(importDefaultResultResult1, { innerRef: innerRef.ref });
};
export const LegacyBorderlessButton = (innerRef) => {
  const merged = Object.assign(Object.assign(innerRef, Object.create(null)));
  return callback4(importDefaultResultResult2, { innerRef: innerRef.ref });
};
export const LegacyPureNativeButton = (arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.needsOffscreenAlphaCompositing = true;
  return callback4(ButtonComponentDefault, obj);
};