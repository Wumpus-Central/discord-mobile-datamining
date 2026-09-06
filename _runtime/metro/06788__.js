// _runtime/metro/06788__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const GenericTouchable = fn;
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
  } catch (err) {}
}
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;
const TOUCHABLE_STATE = { UNDETERMINED: 0, BEGAN: 1, MOVED_OUTSIDE: 2 };
class GenericTouchable {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = c2(this, GenericTouchable);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(GenericTouchable);
    tmp3 = closure_3;
    if (closure_7()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.longPressDetected = false;
    tmp3Result.pointerInside = true;
    tmp3Result.STATE = closure_8.UNDETERMINED;
    tmp3Result.onGestureEvent = (nativeEvent) => {
      const pointerInside = nativeEvent.nativeEvent.pointerInside;
      if (closure_0.pointerInside !== pointerInside) {
        if (pointerInside) {
          obj.onMoveIn();
        } else {
          obj.onMoveOut();
        }
      }
      closure_0.pointerInside = pointerInside;
    };
    tmp3Result.onHandlerStateChange = (nativeEvent) => {
      const state = nativeEvent.nativeEvent.state;
      if (state !== GenericTouchable(6661).State.CANCELLED) {
        if (state !== tmp(6661).State.FAILED) {
          if (state === tmp(6661).State.BEGAN) {
            if (closure_0.STATE === closure_0.UNDETERMINED) {
              obj.handlePressIn();
            }
          }
          if (state === tmp(6661).State.END) {
            const longPressDetected = closure_0.longPressDetected;
            let tmp5 = !longPressDetected;
            if (!longPressDetected) {
              tmp5 = obj2.STATE !== obj.MOVED_OUTSIDE;
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
      closure_0.moveToState(obj.UNDETERMINED);
    };
    tmp3Result.onLongPressDetected = () => {
      closure_0.longPressDetected = true;
      const props = closure_0.props;
      const onLongPress = props.onLongPress;
      if (onLongPress != null) {
        onLongPress();
      }
    };
    return tmp3Result;
  }
}
_inherits(GenericTouchable, fn(19).Component);
const entry = {
  key: "handlePressIn",
  value: function handlePressIn() {
    const self = this;
    if (this.props.delayPressIn) {
      const _setTimeout = setTimeout;
      self.pressInTimeout = setTimeout(() => {
        self.moveToState(obj.BEGAN);
        self.pressInTimeout = undefined;
      }, self.props.delayPressIn);
    } else {
      self.moveToState(obj.BEGAN);
    }
    if (self.props.onLongPress) {
      const _setTimeout2 = setTimeout;
      self.longPressTimeout = setTimeout(
        self.onLongPressDetected,
        (self.props.delayPressIn || 0) + (self.props.delayLongPress || 0),
      );
      const tmp4 = self.props.delayPressIn || 0;
      const tmp5 = self.props.delayLongPress || 0;
    }
  },
};
let items = [
  entry,
  {
    key: "handleMoveOutside",
    value: function handleMoveOutside() {
      const self = this;
      if (this.props.delayPressOut) {
        let pressOutTimeout = self.pressOutTimeout;
        if (!pressOutTimeout) {
          const _setTimeout = setTimeout;
          pressOutTimeout = setTimeout(() => {
            self.moveToState(obj.MOVED_OUTSIDE);
            self.pressOutTimeout = undefined;
          }, self.props.delayPressOut);
        }
        self.pressOutTimeout = pressOutTimeout;
      } else {
        self.moveToState(obj.MOVED_OUTSIDE);
      }
    },
  },
  {
    key: "handleGoToUndetermined",
    value: function handleGoToUndetermined() {
      const self = this;
      clearTimeout(this.pressOutTimeout);
      if (this.props.delayPressOut) {
        const _setTimeout = setTimeout;
        self.pressOutTimeout = setTimeout(() => {
          if (self.STATE === self.UNDETERMINED) {
            obj.moveToState(tmp.BEGAN);
          }
          self.moveToState(self.UNDETERMINED);
          self.pressOutTimeout = undefined;
        }, self.props.delayPressOut);
      } else {
        if (self.STATE === obj.UNDETERMINED) {
          self.moveToState(tmp2.BEGAN);
        }
        self.moveToState(obj.UNDETERMINED);
      }
    },
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    },
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
    },
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
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.reset();
    },
  },
  {
    key: "onMoveIn",
    value: function onMoveIn() {
      const self = this;
      if (this.STATE === obj.MOVED_OUTSIDE) {
        self.moveToState(tmp.BEGAN);
      }
    },
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
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      if (typeof this.props.hitSlop === "number") {
        const rect = {
          top: self.props.hitSlop,
          left: self.props.hitSlop,
          bottom: self.props.hitSlop,
          right: self.props.hitSlop,
        };
        let hitSlop = rect;
      } else {
        hitSlop = self.props.hitSlop;
      }
      let obj = {
        accessible: false !== self.props.accessible,
        accessibilityLabel: self.props.accessibilityLabel,
        accessibilityHint: self.props.accessibilityHint,
        accessibilityRole: self.props.accessibilityRole,
        accessibilityState: self.props.accessibilityState,
        accessibilityActions: self.props.accessibilityActions,
        onAccessibilityAction: self.props.onAccessibilityAction,
        nativeID: self.props.nativeID,
        onLayout: self.props.onLayout,
      };
      obj = {
        style: self.props.containerStyle,
        onHandlerStateChange: null,
        onGestureEvent: null,
        hitSlop: null,
        userSelect: null,
        shouldActivateOnStart: null,
        disallowInterruption: null,
        testID: null,
        touchSoundDisabled: null,
        enabled: null,
      };
      let onHandlerStateChange;
      if (!self.props.disabled) {
        onHandlerStateChange = self.onHandlerStateChange;
      }
      obj.onHandlerStateChange = onHandlerStateChange;
      obj.onGestureEvent = self.onGestureEvent;
      obj.hitSlop = hitSlop;
      obj.userSelect = self.props.userSelect;
      obj.shouldActivateOnStart = self.props.shouldActivateOnStart;
      obj.disallowInterruption = self.props.disallowInterruption;
      obj.testID = self.props.testID;
      let flag = self.props.touchSoundDisabled;
      if (flag == null) {
        flag = false;
      }
      obj.touchSoundDisabled = flag;
      obj.enabled = !self.props.disabled;
      const merged = Object.assign(self.props.extraButtonProps);
      const obj1 = {};
      const merged1 = Object.assign(obj);
      obj1.style = self.props.style;
      obj1.children = self.props.children;
      obj.children = <Animated.View />;
      return jsx(GenericTouchable(6768).LegacyBaseButton, {
        style: self.props.containerStyle,
        onHandlerStateChange: null,
        onGestureEvent: null,
        hitSlop: null,
        userSelect: null,
        shouldActivateOnStart: null,
        disallowInterruption: null,
        testID: null,
        touchSoundDisabled: null,
        enabled: null,
      });
    },
  },
];
const importDefaultResultResult = _createClass(GenericTouchable, items);
importDefaultResultResult.defaultProps = {
  delayLongPress: 600,
  extraButtonProps: { rippleColor: "transparent", exclusive: true },
};

export default importDefaultResultResult;
export { TOUCHABLE_STATE };
