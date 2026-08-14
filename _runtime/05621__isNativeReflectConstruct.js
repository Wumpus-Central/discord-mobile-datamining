// _runtime/05621__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const GenericTouchable = arg1;
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
let obj = { UNDETERMINED: 0, BEGAN: 1, MOVED_OUTSIDE: 2 };
class GenericTouchable {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = _isNativeReflectConstruct(this, apply);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.longPressDetected = false;
    tmp3Result.pointerInside = true;
    tmp3Result.STATE = jsx.UNDETERMINED;
    tmp3Result.onGestureEvent = (nativeEvent) => {
      const pointerInside = nativeEvent.nativeEvent.pointerInside;
      if (_undefined.pointerInside !== pointerInside) {
        if (pointerInside) {
          obj.onMoveIn();
        } else {
          obj.onMoveOut();
        }
      }
      _undefined.pointerInside = pointerInside;
    };
    tmp3Result.onHandlerStateChange = (nativeEvent) => {
      const state = nativeEvent.nativeEvent.state;
      if (state !== _undefined(outer1_1[8]).State.CANCELLED) {
        if (state !== tmp(tmp2[8]).State.FAILED) {
          if (state === tmp(tmp2[8]).State.BEGAN) {
            if (_undefined.STATE === outer1_8.UNDETERMINED) {
              obj.handlePressIn();
            }
            obj = _undefined;
          }
          if (state === tmp(tmp2[8]).State.END) {
            const longPressDetected = _undefined.longPressDetected;
            let tmp5 = !longPressDetected;
            if (!longPressDetected) {
              tmp5 = obj2.STATE !== outer1_8.MOVED_OUTSIDE;
            }
            if (tmp5) {
              tmp5 = undefined === obj2.pressOutTimeout;
            }
            const result = obj2.handleGoToUndetermined();
            if (tmp5) {
              const props = obj2.props;
              const onPress = props.onPress;
              if (onPress != null) {
                onPress();
              }
            }
          }
        }
      }
      _undefined.moveToState(outer1_8.UNDETERMINED);
    };
    tmp3Result.onLongPressDetected = () => {
      _undefined.longPressDetected = true;
      const props = _undefined.props;
      const onLongPress = props.onLongPress;
      if (onLongPress != null) {
        onLongPress();
      }
    };
    return tmp3Result;
  }
}
require("_inherits")(GenericTouchable, require("noop").Component);
obj = {
  key: "handlePressIn",
  value: function handlePressIn() {
    let self = this;
    self = this;
    if (this.props.delayPressIn) {
      const _setTimeout = setTimeout;
      self.pressInTimeout = setTimeout(() => {
        self.moveToState(outer1_8.BEGAN);
        self.pressInTimeout = undefined;
      }, self.props.delayPressIn);
    } else {
      self.moveToState(obj.BEGAN);
    }
    if (self.props.onLongPress) {
      const _setTimeout2 = setTimeout;
      self.longPressTimeout = setTimeout(self.onLongPressDetected, (self.props.delayPressIn || 0) + (self.props.delayLongPress || 0));
      const tmp4 = self.props.delayPressIn || 0;
      const tmp5 = self.props.delayLongPress || 0;
    }
  }
};
let items = [
  obj,
  {
    key: "handleMoveOutside",
    value: function handleMoveOutside() {
      let self = this;
      self = this;
      if (this.props.delayPressOut) {
        let pressOutTimeout = self.pressOutTimeout;
        if (!pressOutTimeout) {
          const _setTimeout = setTimeout;
          pressOutTimeout = setTimeout(() => {
            self.moveToState(outer1_8.MOVED_OUTSIDE);
            self.pressOutTimeout = undefined;
          }, self.props.delayPressOut);
        }
        self.pressOutTimeout = pressOutTimeout;
      } else {
        self.moveToState(obj.MOVED_OUTSIDE);
      }
    }
  },
  {
    key: "handleGoToUndetermined",
    value: function handleGoToUndetermined() {
      let self = this;
      self = this;
      clearTimeout(this.pressOutTimeout);
      if (this.props.delayPressOut) {
        const _setTimeout = setTimeout;
        self.pressOutTimeout = setTimeout(() => {
          if (self.STATE === outer1_8.UNDETERMINED) {
            obj.moveToState(tmp.BEGAN);
          }
          self.moveToState(outer1_8.UNDETERMINED);
          self.pressOutTimeout = undefined;
        }, self.props.delayPressOut);
      } else {
        if (self.STATE === obj.UNDETERMINED) {
          self.moveToState(tmp2.BEGAN);
        }
        self.moveToState(obj.UNDETERMINED);
      }
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  },
  {
    key: "reset",
    value: function reset() {
      const obj = { longPressDetected: false, pointerInside: true };
      clearTimeout(obj.pressInTimeout);
      clearTimeout(obj.pressOutTimeout);
      clearTimeout(obj.longPressTimeout);
      obj.pressOutTimeout = undefined;
      obj.longPressTimeout = undefined;
      obj.pressInTimeout = undefined;
    }
  },
  {
    key: "moveToState",
    value: function moveToState(BEGAN) {
      const self = this;
      if (BEGAN !== this.STATE) {
        if (BEGAN === obj.BEGAN) {
          const props3 = self.props;
          const onPressIn = props3.onPressIn;
          if (onPressIn != null) {
            onPressIn();
          }
        } else if (BEGAN === tmp10.MOVED_OUTSIDE) {
          const props2 = self.props;
          const onPressOut2 = props2.onPressOut;
          if (onPressOut2 != null) {
            onPressOut2();
          }
        } else if (BEGAN === tmp10.UNDETERMINED) {
          self.reset();
          if (self.STATE === tmp10.BEGAN) {
            const props = self.props;
            const onPressOut = props.onPressOut;
            if (onPressOut != null) {
              onPressOut();
            }
          }
        }
        const props4 = self.props;
        const onStateChange = props4.onStateChange;
        if (onStateChange != null) {
          onStateChange(self.STATE, BEGAN);
        }
        self.STATE = BEGAN;
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reset();
    }
  },
  {
    key: "onMoveIn",
    value: function onMoveIn() {
      const self = this;
      if (this.STATE === obj.MOVED_OUTSIDE) {
        self.moveToState(tmp.BEGAN);
      }
    }
  },
  {
    key: "onMoveOut",
    value: function onMoveOut() {
      const self = this;
      clearTimeout(this.longPressTimeout);
      this.longPressTimeout = undefined;
      if (this.STATE === obj.BEGAN) {
        self.handleMoveOutside();
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      if (typeof this.props.hitSlop === "number") {
        let obj = { top: null, left: null, bottom: null, right: null };
        obj[0] = self.props.hitSlop;
        obj[1] = self.props.hitSlop;
        obj[2] = self.props.hitSlop;
        obj[3] = self.props.hitSlop;
        let hitSlop = obj;
      } else {
        hitSlop = self.props.hitSlop;
      }
      obj = { accessible: false !== self.props.accessible, accessibilityLabel: self.props.accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityRole: self.props.accessibilityRole, accessibilityState: self.props.accessibilityState, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, nativeID: self.props.nativeID, onLayout: self.props.onLayout };
      obj = { style: self.props.containerStyle, onHandlerStateChange: null, onGestureEvent: null, hitSlop: null, userSelect: null, shouldActivateOnStart: null, disallowInterruption: null, testID: null, touchSoundDisabled: null, enabled: null };
      let onHandlerStateChange;
      if (!self.props.disabled) {
        onHandlerStateChange = self.onHandlerStateChange;
      }
      obj[1] = onHandlerStateChange;
      obj[2] = self.onGestureEvent;
      obj[3] = hitSlop;
      obj[4] = self.props.userSelect;
      obj[5] = self.props.shouldActivateOnStart;
      obj[6] = self.props.disallowInterruption;
      obj[7] = self.props.testID;
      let flag = self.props.touchSoundDisabled;
      if (flag == null) {
        flag = false;
      }
      obj[8] = flag;
      obj[9] = !self.props.disabled;
      const merged = Object.assign(self.props.extraButtonProps);
      const obj1 = {};
      const merged1 = Object.assign(obj);
      obj1.style = self.props.style;
      obj1.children = self.props.children;
      obj.children = <Animated.View />;
      return jsx(GenericTouchable(5601).LegacyBaseButton, { style: self.props.containerStyle, onHandlerStateChange: null, onGestureEvent: null, hitSlop: null, userSelect: null, shouldActivateOnStart: null, disallowInterruption: null, testID: null, touchSoundDisabled: null, enabled: null });
    }
  }
];
const importDefaultResultResult = importDefaultResult(GenericTouchable, items);
importDefaultResultResult.defaultProps = { delayLongPress: 600, extraButtonProps: { rippleColor: "transparent", exclusive: true } };

export default importDefaultResultResult;
export const TOUCHABLE_STATE = obj;