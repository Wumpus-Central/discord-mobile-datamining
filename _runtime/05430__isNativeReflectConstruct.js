import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_createClass";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult1 from "_inherits";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult2Result from "__INTERNAL_VIEW_CONFIG";
import importDefaultResult2 from "items";

let Platform;
let StyleSheet;
let c10;
let closure_12;
let map1;
let InnerBorderlessButton = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_2 = ["rippleColor", "style"];
let closure_3 = ["children", "style"];
let closure_4 = ["children", "style", "innerRef"];
const Animated = get_ActivityIndicator.Animated;
({ Platform, processColor: c10, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let c16 = null;
class InnerBaseButton {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.handleEvent = (nativeEvent) => {
      let pointerInside;
      let state;
      nativeEvent = nativeEvent.nativeEvent;
      ({ state, pointerInside } = nativeEvent);
      let tmp = pointerInside;
      if (pointerInside) {
        tmp = state === tmp3Result(outer1_1[11]).State.ACTIVE;
      }
      if (tmp5) {
        const props = tmp4.props;
        props.onActiveStateChange(tmp);
      }
      const longPressDetected = tmp4.longPressDetected;
      let onPress = !longPressDetected;
      if (!longPressDetected) {
        onPress = nativeEvent.oldState === tmp3Result(outer1_1[11]).State.ACTIVE;
      }
      if (onPress) {
        onPress = state !== tmp3Result(outer1_1[11]).State.CANCELLED;
      }
      if (onPress) {
        onPress = tmp4.lastActive;
      }
      if (onPress) {
        onPress = tmp4.props.onPress;
      }
      if (onPress) {
        const props2 = tmp4.props;
        props2.onPress(pointerInside);
      }
      if (!tmp3Result.lastActive) {
        if (state === tmp3Result(outer1_1[11]).State.BEGAN) {
          if (pointerInside) {
            tmp4.longPressDetected = false;
            if (tmp4.props.onLongPress) {
              const _setTimeout = setTimeout;
              tmp4.longPressTimeout = setTimeout(tmp4.onLongPress, tmp4.props.delayLongPress);
            }
          }
          tmp4.lastActive = tmp;
        }
      }
      let tmp15 = state !== tmp3Result(outer1_1[11]).State.ACTIVE || pointerInside || undefined === tmp4.longPressTimeout;
      if (tmp15) {
        let tmp16 = undefined === tmp4.longPressTimeout;
        if (!tmp16) {
          let tmp19 = state !== tmp3Result(outer1_1[11]).State.END;
          if (tmp19) {
            tmp19 = state !== tmp3Result(outer1_1[11]).State.CANCELLED;
          }
          if (tmp19) {
            tmp19 = state !== tmp3Result(outer1_1[11]).State.FAILED;
          }
          tmp16 = tmp19;
        }
        tmp15 = tmp16;
      }
      if (!tmp15) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp4.longPressTimeout);
        tmp4.longPressTimeout = undefined;
      }
    };
    tmp3Result.onLongPress = () => {
      tmp3Result.longPressDetected = true;
      const props = tmp3Result.props;
      const onLongPress = props.onLongPress;
      if (onLongPress != null) {
        onLongPress();
      }
    };
    tmp3Result.onHandlerStateChange = (arg0) => {
      const props = tmp3Result.props;
      if (props.onHandlerStateChange != null) {
        onHandlerStateChange(arg0);
      }
      tmp3Result.handleEvent(arg0);
    };
    tmp3Result.onGestureEvent = (arg0) => {
      const props = tmp3Result.props;
      const onGestureEvent = props.onGestureEvent;
      if (onGestureEvent != null) {
        onGestureEvent(arg0);
      }
      tmp3Result.handleEvent(arg0);
    };
    tmp3Result.lastActive = false;
    tmp3Result.longPressDetected = false;
    return tmp3Result;
  }
}
InnerBorderlessButton = InnerBaseButton;
importDefaultResult1(InnerBaseButton, importAllResult.Component);
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const rippleColor = props.rippleColor;
    let tmp2 = c16;
    if (null === c16) {
      let obj = InnerBorderlessButton(5372);
      const isFabricResult = obj.isFabric();
      c16 = isFabricResult;
      tmp2 = isFabricResult;
    }
    let tmp7Result = rippleColor;
    if (!tmp2) {
      tmp7Result = closure_10(rippleColor);
      const tmp7 = closure_10;
      const tmp8 = rippleColor;
    }
    obj = { ref: self.props.innerRef, rippleColor: tmp7Result, style: items };
    items = [props.style, false];
    const merged = Object.assign(callback(props, closure_2));
    ({ onGestureEvent: obj2.onGestureEvent, onHandlerStateChange: obj2.onHandlerStateChange } = self);
    return callback4(closure_15, obj);
  }
};
let items = [obj];
const importDefaultResultResult = importDefaultResult(InnerBaseButton, items);
importDefaultResultResult.defaultProps = { delayLongPress: 600 };
let closure_18 = Animated.createAnimatedComponent(importDefaultResultResult);
const forwardRefResult = importAllResult.forwardRef((arg0, innerRef) => {
  const merged = Object.assign(arg0);
  return callback4(closure_17, { innerRef });
});
let closure_20 = importAllResult.forwardRef((arg0, innerRef) => {
  const merged = Object.assign(arg0);
  return callback4(closure_18, { innerRef });
});
const styles = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });
class InnerRectButton {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.onActiveStateChange = (arg0) => {
      const props = tmp3Result.props;
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
    let children;
    let style;
    const self = this;
    const props = this.props;
    ({ children, style } = props);
    let flattenResult = StyleSheet.flatten(style);
    if (flattenResult == null) {
      flattenResult = {};
    }
    const obj = {};
    const merged = Object.assign(callback(props, closure_3));
    obj.ref = self.props.innerRef;
    obj.style = flattenResult;
    obj.onActiveStateChange = self.onActiveStateChange;
    const items = [underlay.underlay, { opacity: self.opacity, backgroundColor: self.props.underlayColor, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
    const items1 = [callback4(Animated.View, { style: items }), children];
    obj.children = items1;
    return callback5(closure_19, obj);
  }
};
let items1 = [obj];
const importDefaultResultResult1 = importDefaultResult(InnerRectButton, items1);
importDefaultResultResult1.defaultProps = { activeOpacity: 0.105, underlayColor: "black" };
class InnerBorderlessButton {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.onActiveStateChange = (arg0) => {
      const props = tmp3Result.props;
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
const items2 = [
  {
    key: "render",
    value: function render() {
      let children;
      let innerRef;
      let style;
      const props = this.props;
      ({ children, style, innerRef } = props);
      const obj = {};
      const merged = Object.assign(callback(props, closure_4));
      obj.innerRef = innerRef;
      obj.onActiveStateChange = this.onActiveStateChange;
      const items = [style, false];
      obj.style = items;
      obj.children = children;
      return callback4(closure_20, obj);
    }
  }
];
const importDefaultResultResult2 = importDefaultResult(InnerBorderlessButton, items2);
importDefaultResultResult2.defaultProps = { activeOpacity: 0.3, borderless: true };

export const RawButton = importDefaultResult2Result;
export const BaseButton = forwardRefResult;
export const RectButton = importAllResult.forwardRef((arg0, innerRef) => {
  const merged = Object.assign(arg0);
  return callback4(importDefaultResultResult1, { innerRef });
});
export const BorderlessButton = importAllResult.forwardRef((arg0, innerRef) => {
  const merged = Object.assign(arg0);
  return callback4(importDefaultResultResult2, { innerRef });
});
export const PureNativeButton = require("__INTERNAL_VIEW_CONFIG");