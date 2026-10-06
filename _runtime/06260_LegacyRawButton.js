// === Module 6260: LegacyRawButton ===

// Module 6260 (LegacyRawButton)
import ButtonComponentDefault from "ButtonComponent" /* 6243 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroImportAll from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createNativeWrapper from "createNativeWrapper" /* 6261 */;

let Platform;
let StyleSheet;
let closure_12;
let map1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
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
const Animated = react_native.Animated;
({ Platform, StyleSheet } = react_native);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const ButtonComponent = createNativeWrapper(ButtonComponentDefault, { shouldCancelWhenOutside: false, shouldActivateOnStart: false });
class LegacyRawButton {
  constructor(arg0) {
    const obj = { needsOffscreenAlphaCompositing: true };
    const merged = Object.assign(arg0);
    return closure_12(ButtonComponent, obj);
  }
}
class InnerBaseButton {
  constructor(arg0) {
    let constructResult;
    const self = this;
    let tmp = _classCallCheck(this, InnerBaseButton);
    const items = [arg0];
    const obj = _getPrototypeOf(InnerBaseButton);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroImportAll(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.handleEvent = (nativeEvent) => {
      let pointerInside;
      let state;
      nativeEvent = nativeEvent.nativeEvent;
      ({ state, pointerInside } = nativeEvent);
      let tmp = pointerInside;
      const oldState = nativeEvent.oldState;
      if (pointerInside) {
        tmp = state === InnerBaseButton(closure_2_2[11]).State.BEGAN || state === InnerBaseButton(closure_2_2[11]).State.ACTIVE;
        const tmp4 = state === InnerBaseButton(closure_2_2[11]).State.BEGAN || state === InnerBaseButton(closure_2_2[11]).State.ACTIVE;
      }
      const tmp8 = tmp !== closure_0.lastIsPressed && closure_0.props.onActiveStateChange;
      if (tmp8) {
        const props = closure_0.props;
        props.onActiveStateChange(tmp);
      }
      const onPress = !closure_0.longPressDetected && oldState === InnerBaseButton(closure_2_2[11]).State.ACTIVE && state !== InnerBaseButton(closure_2_2[11]).State.CANCELLED && closure_0.lastIsPressed && closure_0.props.onPress;
      if (onPress) {
        const props2 = closure_0.props;
        props2.onPress(pointerInside);
      }
      if (!closure_0.lastIsPressed) {
        if (state === InnerBaseButton(closure_2_2[11]).State.BEGAN) {
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
      let tmp18 = state !== InnerBaseButton(closure_2_2[11]).State.ACTIVE || pointerInside || undefined === closure_0.longPressTimeout;
      if (tmp18) {
        let tmp19 = undefined === closure_0.longPressTimeout;
        if (!tmp19) {
          tmp19 = state !== InnerBaseButton(closure_2_2[11]).State.END && state !== InnerBaseButton(closure_2_2[11]).State.CANCELLED && state !== InnerBaseButton(closure_2_2[11]).State.FAILED;
          const tmp22 = state !== InnerBaseButton(closure_2_2[11]).State.END && state !== InnerBaseButton(closure_2_2[11]).State.CANCELLED && state !== InnerBaseButton(closure_2_2[11]).State.FAILED;
        }
        tmp18 = tmp19;
      }
      if (!tmp18) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_0.longPressTimeout);
        closure_0.longPressTimeout = undefined;
      }
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
        props.onHandlerStateChange(arg0);
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
_inherits(InnerBaseButton, react.Component);
const entry = {
  key: "render",
  value: function render() {
    let items;
    let rippleColor;
    let style;
    const props = this.props;
    ({ rippleColor, style } = props);
    const obj = { ref: this.props.innerRef, rippleColor, style: items };
    items = [style, false];
    const merged = Object.assign(_objectWithoutProperties(props, closure_3));
    ({ onGestureEvent: obj.onGestureEvent, onHandlerStateChange: obj.onHandlerStateChange } = this);
    return closure_12(LegacyRawButton, obj);
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(InnerBaseButton, items);
importDefaultResultResult.defaultProps = { delayLongPress: 600 };
let closure_18 = Animated.createAnimatedComponent(importDefaultResultResult);
class LegacyBaseButton {
  constructor(innerRef) {
    const obj = { innerRef: innerRef.ref };
    const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
    return closure_12(importDefaultResultResult, obj);
  }
}
function AnimatedBaseButton(innerRef) {
  const obj = { innerRef: innerRef.ref };
  const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
  return closure_12(closure_18, obj);
}
const underlay = StyleSheet.create({ underlay: { position: "absolute", left: 0, right: 0, bottom: 0, top: 0 } });
class InnerRectButton {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, InnerRectButton);
    const items = [arg0];
    const obj = _getPrototypeOf(InnerRectButton);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroImportAll(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.onActiveStateChange = (arg0) => {
      props = props.props;
      const onActiveStateChange = props.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    };
    const value = new Animated.Value(0);
    tmp3Result.opacity = value;
    return tmp3Result;
  }
}
_inherits(InnerRectButton, react.Component);
const entry1 = {
  key: "render",
  value: function render() {
    let children;
    let items;
    let items1;
    let style;
    const self = this;
    const props = this.props;
    ({ children, style } = props);
    const tmp = _objectWithoutProperties(props, closure_4);
    let flattenResult = StyleSheet.flatten(style);
    if (flattenResult == null) {
      flattenResult = {};
    }
    const obj = { ref: self.props.innerRef, style: flattenResult, onActiveStateChange: self.onActiveStateChange, children: items1 };
    const merged = Object.assign(tmp);
    const obj2 = { style: items };
    items = [underlay.underlay, { opacity: self.opacity, backgroundColor: self.props.underlayColor, borderRadius: flattenResult.borderRadius, borderTopLeftRadius: flattenResult.borderTopLeftRadius, borderTopRightRadius: flattenResult.borderTopRightRadius, borderBottomLeftRadius: flattenResult.borderBottomLeftRadius, borderBottomRightRadius: flattenResult.borderBottomRightRadius }];
    items1 = [closure_12(Animated.View, obj2), children];
    return map1(LegacyBaseButton, obj);
  }
};
let items1 = [entry1];
const importDefaultResultResult1 = _createClass(InnerRectButton, items1);
importDefaultResultResult1.defaultProps = { activeOpacity: 0.105, underlayColor: "black" };
class InnerBorderlessButton {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, InnerBorderlessButton);
    const items = [arg0];
    const obj = _getPrototypeOf(InnerBorderlessButton);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroImportAll(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.onActiveStateChange = (arg0) => {
      props = props.props;
      const onActiveStateChange = props.onActiveStateChange;
      if (onActiveStateChange != null) {
        onActiveStateChange(arg0);
      }
    };
    const value = new Animated.Value(1);
    tmp3Result.opacity = value;
    return tmp3Result;
  }
}
_inherits(InnerBorderlessButton, react.Component);
const entry2 = {
  key: "render",
  value: function render() {
    let children;
    let innerRef;
    let items;
    let style;
    const props = this.props;
    ({ children, style, innerRef } = props);
    const obj = { innerRef, onActiveStateChange: this.onActiveStateChange, style: items, children };
    const merged = Object.assign(_objectWithoutProperties(props, closure_5));
    items = [style, false];
    return closure_12(AnimatedBaseButton, obj);
  }
};
const items2 = [entry2];
const importDefaultResultResult2 = _createClass(InnerBorderlessButton, items2);
importDefaultResultResult2.defaultProps = { activeOpacity: 0.3, borderless: true };

export { LegacyRawButton };
export { LegacyBaseButton };
export const LegacyRectButton = (innerRef) => {
  const obj = { innerRef: innerRef.ref };
  const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
  return closure_12(importDefaultResultResult1, obj);
};
export const LegacyBorderlessButton = (innerRef) => {
  const obj = { innerRef: innerRef.ref };
  const merged = Object.assign(Object.assign(innerRef, Object.assign({ ref: 0 })));
  return closure_12(importDefaultResultResult2, obj);
};
export const LegacyPureNativeButton = (arg0) => {
  const obj = { needsOffscreenAlphaCompositing: true };
  const tmp = ButtonComponentDefault;
  const merged = Object.assign(arg0);
  return closure_12(tmp, obj);
};