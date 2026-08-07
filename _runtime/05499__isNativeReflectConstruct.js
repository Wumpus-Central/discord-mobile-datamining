// _runtime/05499__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let I18nManager;
let StyleSheet;
let c5;
let closure_6;
let error;
let metroImportAll;
let Swipeable = arg1;
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
({ Animated: c5, StyleSheet, View: closure_6, I18nManager } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
class Swipeable {
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
    tmp3Result.updateAnimatedEvent = (overshootFriction, rowWidth) => {
      let dragX;
      let leftWidth;
      overshootFriction = overshootFriction.overshootFriction;
      ({ dragX, leftWidth } = rowWidth);
      let num = 0;
      if (undefined !== leftWidth) {
        num = leftWidth;
      }
      rowWidth = rowWidth.rowWidth;
      let num2 = 0;
      if (undefined !== rowWidth) {
        num2 = rowWidth;
      }
      let rightOffset = rowWidth.rightOffset;
      if (undefined === rightOffset) {
        rightOffset = num2;
      }
      const bound = Math.max(0, num2 - rightOffset);
      let overshootLeft = overshootFriction.overshootLeft;
      if (undefined === overshootLeft) {
        overshootLeft = num > 0;
      }
      let overshootRight = overshootFriction.overshootRight;
      if (undefined === overshootRight) {
        overshootRight = bound > 0;
      }
      const items = [0, overshootFriction.friction];
      let obj = { inputRange: items1, outputRange: null };
      items1 = [-bound - 1, -bound, num, num + 1];
      let num3 = 0;
      if (overshootRight) {
        num3 = 1 / overshootFriction;
      }
      const items2 = [-bound - num3, -bound, num, ];
      let num4 = 0;
      if (overshootLeft) {
        num4 = 1 / overshootFriction;
      }
      items2[3] = num + num4;
      obj[1] = items2;
      const interpolateResult = outer1_5.add(rowWidth.rowTranslation, dragX.interpolate({ inputRange: items, outputRange: [0, 1] })).interpolate(obj);
      closure_0.transX = interpolateResult;
      if (num > 0) {
        obj = { inputRange: null, outputRange: null };
        const items3 = [-1, 0, num];
        obj[0] = items3;
        obj[1] = [0, 0, 1];
        let interpolateResult1 = interpolateResult.interpolate(obj);
      } else {
        interpolateResult1 = new tmp2.Value(0);
      }
      closure_0.showLeftAction = interpolateResult1;
      const showLeftAction = tmp4.showLeftAction;
      const items4 = [0, Number.MIN_VALUE];
      closure_0.leftActionTranslate = showLeftAction.interpolate({ inputRange: items4, outputRange: [-10000, 0], extrapolate: "clamp" });
      if (bound > 0) {
        const obj1 = { inputRange: null, outputRange: null };
        const items5 = [-bound, 0, 1];
        obj1[0] = items5;
        obj1[1] = [1, 0, 0];
        let interpolateResult2 = interpolateResult.interpolate(obj1);
      } else {
        interpolateResult2 = new tmp2.Value(0);
      }
      closure_0.showRightAction = interpolateResult2;
      const showRightAction = tmp4.showRightAction;
      const items6 = [0, Number.MIN_VALUE];
      closure_0.rightActionTranslate = showRightAction.interpolate({ inputRange: items6, outputRange: [-10000, 0], extrapolate: "clamp" });
    };
    tmp3Result.onTapHandlerStateChange = (nativeEvent) => {
      if (nativeEvent.nativeEvent.oldState === tmp3Result(outer1_1[8]).State.ACTIVE) {
        tmp3Result.close();
      }
    };
    tmp3Result.onHandlerStateChange = (nativeEvent) => {
      if (nativeEvent.nativeEvent.oldState === tmp3Result(outer1_1[8]).State.ACTIVE) {
        tmp3Result.handleRelease(nativeEvent);
      }
      if (nativeEvent.nativeEvent.state === tmp3Result(outer1_1[8]).State.ACTIVE) {
        nativeEvent = nativeEvent.nativeEvent;
        const rowState = tmp3Result.state.rowState;
        let str = "right";
        let str2 = "right";
        if (-1 !== rowState) {
          if (1 === rowState) {
            str = "left";
          }
          str2 = str;
        }
        if (0 === rowState) {
          const props2 = tmp11.props;
          const onSwipeableOpenStartDrag = props2.onSwipeableOpenStartDrag;
          if (onSwipeableOpenStartDrag != null) {
            const result = onSwipeableOpenStartDrag(str2);
          }
        } else {
          const props = tmp11.props;
          const onSwipeableCloseStartDrag = props.onSwipeableCloseStartDrag;
          if (onSwipeableCloseStartDrag != null) {
            const result1 = onSwipeableCloseStartDrag(str2);
          }
        }
      }
    };
    tmp3Result.handleRelease = (nativeEvent) => {
      let friction;
      let leftThreshold;
      let translationX;
      let velocityX;
      ({ velocityX, translationX } = nativeEvent.nativeEvent);
      const state = tmp3Result.state;
      const leftWidth = state.leftWidth;
      let num = 0;
      if (undefined !== leftWidth) {
        num = leftWidth;
      }
      const rowWidth = state.rowWidth;
      let num2 = 0;
      if (undefined !== rowWidth) {
        num2 = rowWidth;
      }
      const rowState = state.rowState;
      let rightOffset = obj.state.rightOffset;
      if (undefined === rightOffset) {
        rightOffset = num2;
      }
      const diff = num2 - rightOffset;
      const props = obj.props;
      ({ friction, leftThreshold } = props);
      if (undefined === leftThreshold) {
        leftThreshold = num / 2;
      }
      let rightThreshold = props.rightThreshold;
      if (undefined === rightThreshold) {
        rightThreshold = diff / 2;
      }
      const result = (translationX + 0.05 * velocityX) / friction;
      const sum = obj.currentOffset() + translationX / friction;
      if (0 === rowState) {
        let num6 = num;
        if (result <= leftThreshold) {
          num6 = 0;
          if (result < -rightThreshold) {
            num6 = -diff;
          }
        }
      } else if (1 === rowState) {
        num6 = 0;
        if (result > -leftThreshold) {
          num6 = num;
        }
      } else {
        num6 = 0;
        if (result < rightThreshold) {
          num6 = -diff;
        }
      }
      tmp3Result.animateRow(sum, num6, velocityX / friction);
    };
    tmp3Result.animateRow = (arg0, toValue, velocity) => {
      let dragX;
      let rowTranslation;
      let closure_1 = toValue;
      ({ dragX, rowTranslation } = arg0.state);
      dragX.setValue(0);
      rowTranslation.setValue(arg0);
      let obj = { rowState: Math.sign(toValue) };
      arg0.setState(obj);
      obj = { restSpeedThreshold: 1.7, restDisplacementThreshold: 0.4, velocity, bounciness: 0, toValue, useNativeDriver: tmp3Result.props.useNativeAnimations };
      const merged = Object.assign(tmp3Result.props.animationOptions);
      outer1_5.spring(rowTranslation, obj).start((finished) => {
        if (finished.finished) {
          if (closure_1 > 0) {
            const props4 = closure_0.props;
            const onSwipeableLeftOpen = props4.onSwipeableLeftOpen;
            if (onSwipeableLeftOpen != null) {
              onSwipeableLeftOpen();
            }
            const props5 = closure_0.props;
            const onSwipeableOpen2 = props5.onSwipeableOpen;
            if (onSwipeableOpen2 != null) {
              onSwipeableOpen2("left", closure_0);
            }
          } else if (tmp < 0) {
            const props2 = closure_0.props;
            const onSwipeableRightOpen = props2.onSwipeableRightOpen;
            if (onSwipeableRightOpen != null) {
              onSwipeableRightOpen();
            }
            const props3 = closure_0.props;
            const onSwipeableOpen = props3.onSwipeableOpen;
            if (onSwipeableOpen != null) {
              onSwipeableOpen("right", closure_0);
            }
          } else {
            let str = "right";
            if (closure_0 > 0) {
              str = "left";
            }
            const props = closure_0.props;
            const onSwipeableClose = props.onSwipeableClose;
            if (onSwipeableClose != null) {
              onSwipeableClose(str, closure_0);
            }
          }
        }
      });
      if (toValue > 0) {
        let props4 = tmp.props;
        const onSwipeableLeftWillOpen = props4.onSwipeableLeftWillOpen;
        if (onSwipeableLeftWillOpen != null) {
          const result = onSwipeableLeftWillOpen();
        }
        let props5 = tmp.props;
        const onSwipeableWillOpen2 = props5.onSwipeableWillOpen;
        if (onSwipeableWillOpen2 != null) {
          onSwipeableWillOpen2("left");
        }
      } else if (toValue < 0) {
        let props2 = tmp.props;
        const onSwipeableRightWillOpen = props2.onSwipeableRightWillOpen;
        if (onSwipeableRightWillOpen != null) {
          const result1 = onSwipeableRightWillOpen();
        }
        let props3 = tmp.props;
        const onSwipeableWillOpen = props3.onSwipeableWillOpen;
        if (onSwipeableWillOpen != null) {
          onSwipeableWillOpen("right");
        }
      } else {
        let str = "right";
        if (arg0 > 0) {
          str = "left";
        }
        let props = tmp.props;
        const onSwipeableWillClose = props.onSwipeableWillClose;
        if (onSwipeableWillClose != null) {
          onSwipeableWillClose(str);
        }
      }
    };
    tmp3Result.onRowLayout = (nativeEvent) => {
      tmp3Result.setState({ rowWidth: nativeEvent.nativeEvent.layout.width });
    };
    tmp3Result.currentOffset = () => {
      const state = tmp3Result.state;
      const leftWidth = state.leftWidth;
      let num = 0;
      if (undefined !== leftWidth) {
        num = leftWidth;
      }
      const rowWidth = state.rowWidth;
      let num2 = 0;
      if (undefined !== rowWidth) {
        num2 = rowWidth;
      }
      const rowState = state.rowState;
      let rightOffset = tmp3Result.state.rightOffset;
      if (1 !== rowState) {
        let num4 = 0;
        if (-1 === rowState) {
          if (undefined === rightOffset) {
            rightOffset = num2;
          }
          num4 = -num2 - rightOffset;
        }
        num = num4;
      }
      return num;
    };
    tmp3Result.close = () => {
      tmp3Result.animateRow(tmp3Result.currentOffset(), 0);
    };
    tmp3Result.openLeft = () => {
      const leftWidth = tmp3Result.state.leftWidth;
      let num = 0;
      if (undefined !== leftWidth) {
        num = leftWidth;
      }
      tmp3Result.animateRow(tmp3Result.currentOffset(), num);
    };
    tmp3Result.openRight = () => {
      const rowWidth = tmp3Result.state.rowWidth;
      let num = 0;
      if (undefined !== rowWidth) {
        num = rowWidth;
      }
      let rightOffset = obj.state.rightOffset;
      if (undefined === rightOffset) {
        rightOffset = num;
      }
      const diff = num - rightOffset;
      tmp3Result.animateRow(tmp3Result.currentOffset(), -diff);
    };
    tmp3Result.reset = () => {
      let dragX;
      let rowTranslation;
      ({ dragX, rowTranslation } = tmp3Result.state);
      dragX.setValue(0);
      rowTranslation.setValue(0);
      tmp3Result.setState({ rowState: 0 });
    };
    value = new Animated.Value(0);
    obj = { dragX: value, rowTranslation: null, rowState: 0, leftWidth: "channel", rightOffset: "to", rowWidth: "y" };
    value1 = new Animated.Value(0);
    obj[1] = value1;
    tmp3Result.state = obj;
    updateAnimatedEventResult = tmp3Result.updateAnimatedEvent(global, tmp3Result.state);
    items1 = [];
    items1[0] = { nativeEvent: { translationX: value } };
    obj1 = { useNativeDriver: global.useNativeAnimations };
    tmp3Result.onGestureEvent = Animated.event(items1, obj1);
    return tmp3Result;
  }
}
require("_inherits")(Swipeable, require("noop").Component);
let obj = {
  key: "shouldComponentUpdate",
  value: function shouldComponentUpdate(friction, leftWidth) {
    const self = this;
    let tmp = this.props.friction === friction.friction && self.props.overshootLeft === friction.overshootLeft && self.props.overshootRight === friction.overshootRight && self.props.overshootFriction === friction.overshootFriction;
    if (tmp) {
      tmp = self.state.leftWidth === leftWidth.leftWidth;
    }
    if (tmp) {
      tmp = self.state.rightOffset === leftWidth.rightOffset;
    }
    if (tmp) {
      tmp = self.state.rowWidth === leftWidth.rowWidth;
    }
    if (!tmp) {
      self.updateAnimatedEvent(friction, leftWidth);
    }
    return true;
  }
};
let items = [
  obj,
  {
    key: "render",
    value: function render() {
      let dragOffsetFromLeftEdge;
      let renderLeftActions;
      let renderRightActions;
      let self = this;
      self = this;
      const rowState = this.state.rowState;
      const props = this.props;
      ({ renderLeftActions, renderRightActions, dragOffsetFromLeftEdge } = props);
      let num = 10;
      let num2 = 10;
      if (undefined !== dragOffsetFromLeftEdge) {
        num2 = dragOffsetFromLeftEdge;
      }
      const dragOffsetFromRightEdge = props.dragOffsetFromRightEdge;
      if (undefined !== dragOffsetFromRightEdge) {
        num = dragOffsetFromRightEdge;
      }
      let tmp = renderLeftActions;
      if (renderLeftActions) {
        let obj = { style: null, children: null };
        const items = [closure_10.leftActions, ];
        obj = { transform: null };
        obj = { translateX: null };
        obj[0] = self.leftActionTranslate;
        const items1 = [obj];
        obj[0] = items1;
        items[1] = obj;
        obj[0] = items;
        const items2 = [renderLeftActions(self.showLeftAction, self.transX, self), ];
        const obj1 = { onLayout: null };
        obj1[0] = function onLayout(leftWidth) {
          return self.setState({ leftWidth: leftWidth.nativeEvent.layout.x });
        };
        items2[1] = callback3(closure_6, obj1);
        obj[1] = items2;
        tmp = callback4(RN.View, obj);
      }
      let tmp7 = renderRightActions;
      if (renderRightActions) {
        const obj2 = { style: null, children: null };
        const items3 = [closure_10.rightActions, ];
        const obj3 = { transform: null };
        const obj4 = { translateX: null };
        obj4[0] = self.rightActionTranslate;
        const items4 = [obj4];
        obj3[0] = items4;
        items3[1] = obj3;
        obj2[0] = items3;
        const items5 = [renderRightActions(self.showRightAction, self.transX, self), ];
        const obj5 = { onLayout: null };
        obj5[0] = function onLayout(nativeEvent) {
          return self.setState({ rightOffset: nativeEvent.nativeEvent.layout.x });
        };
        items5[1] = callback3(closure_6, obj5);
        obj2[1] = items5;
        tmp7 = callback4(RN.View, obj2);
      }
      const obj6 = { activeOffsetX: items6, touchAction: "pan-y" };
      items6 = [-num, num2];
      const merged = Object.assign(self.props);
      ({ onGestureEvent: obj9.onGestureEvent, onHandlerStateChange: obj9.onHandlerStateChange } = self);
      const obj7 = { onLayout: self.onRowLayout, style: items7, children: null };
      items7 = [closure_10.container, self.props.containerStyle];
      const items8 = [tmp, tmp7, ];
      const obj8 = { enabled: 0 !== rowState, touchAction: "pan-y", onHandlerStateChange: self.onTapHandlerStateChange, children: null };
      let str = "box-only";
      if (0 === rowState) {
        str = "auto";
      }
      const obj9 = { translateX: self.transX };
      const items9 = [obj9];
      const items10 = [{ transform: items9 }, self.props.childrenContainerStyle];
      obj8[3] = callback3(RN.View, { pointerEvents: str, style: items10, children: props.children });
      items8[2] = callback3(self(5444).TapGestureHandler, obj8);
      obj7[2] = items8;
      obj6.children = callback4(RN.View, obj7);
      return callback3(self(5456).PanGestureHandler, obj6);
    }
  }
];
const importDefaultResultResult = importDefaultResult(Swipeable, items);
importDefaultResultResult.defaultProps = { friction: 1, overshootFriction: 1, useNativeAnimations: true };
obj = { container: { overflow: "hidden" }, leftActions: null, rightActions: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFill);
let str = "row";
if (I18nManager.isRTL) {
  str = "row-reverse";
}
obj.flexDirection = str;
obj[1] = obj;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFill);
let str2 = "row-reverse";
if (I18nManager.isRTL) {
  str2 = "row";
}
obj1.flexDirection = str2;
obj[2] = obj1;
const styles = StyleSheet.create(obj);

export default importDefaultResultResult;