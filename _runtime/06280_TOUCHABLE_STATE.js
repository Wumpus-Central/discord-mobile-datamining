// _runtime/06280_TOUCHABLE_STATE.js
import react_native from "00017_react-native.js";
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import LegacyRawButton from "06260_LegacyRawButton.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const Component = react2.Component;
const Animated = react_native.Animated;
const jsx = Fragment.jsx;
const TOUCHABLE_STATE = { UNDETERMINED: 0, BEGAN: 1, MOVED_OUTSIDE: 2 };
class GenericTouchable {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, GenericTouchable);
    const items1 = [...items];
    const obj = _getPrototypeOf(GenericTouchable);
    if (_isNativeReflectConstruct()) {
      let tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.longPressDetected = false;
    tmp3Result.pointerInside = true;
    tmp3Result.STATE = obj.UNDETERMINED;
    tmp3Result.onGestureEvent = (nativeEvent) => {
      const pointerInside = nativeEvent.nativeEvent.pointerInside;
      if (closure_0.pointerInside !== pointerInside) {
        if (pointerInside) {
          closure_0.onMoveIn();
        } else {
          closure_0.onMoveOut();
        }
      }
      closure_0.pointerInside = pointerInside;
    };
    tmp3Result.onHandlerStateChange = (nativeEvent) => {
      const state = nativeEvent.nativeEvent.state;
      if (state !== GenericTouchable(closure_2_1[8]).State.CANCELLED) {
        if (state !== GenericTouchable(closure_2_1[8]).State.FAILED) {
          if (state === GenericTouchable(closure_2_1[8]).State.BEGAN) {
            if (closure_0.STATE === constants.UNDETERMINED) {
              closure_0.handlePressIn();
            }
          }
          if (state === GenericTouchable(closure_2_1[8]).State.END) {
            const tmp5 =
              !closure_0.longPressDetected &&
              closure_0.STATE !== constants.MOVED_OUTSIDE &&
              undefined === closure_0.pressOutTimeout;
            const result = closure_0.handleGoToUndetermined();
            if (tmp5) {
              const props = closure_0.props;
              const onPress = props.onPress;
              if (onPress != null) {
                onPress();
              }
            }
          }
        }
      }
      closure_0.moveToState(constants.UNDETERMINED);
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
_inherits(GenericTouchable, Component);
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
      const tmp4 = self.props.delayPressIn || 0;
      const tmp5 = self.props.delayLongPress || 0;
      self.longPressTimeout = setTimeout(self.onLongPressDetected, tmp4 + tmp5);
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
            self.moveToState(self.BEGAN);
          }
          self.moveToState(self.UNDETERMINED);
          self.pressOutTimeout = undefined;
        }, self.props.delayPressOut);
      } else {
        if (self.STATE === obj.UNDETERMINED) {
          self.moveToState(obj.BEGAN);
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
      const obj = {
        longPressDetected: false,
        pointerInside: true,
        pressOutTimeout: undefined,
        longPressTimeout: undefined,
        pressInTimeout: undefined,
      };
      clearTimeout(obj.pressInTimeout);
      clearTimeout(obj.pressOutTimeout);
      clearTimeout(obj.longPressTimeout);
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
        } else if (BEGAN === obj.MOVED_OUTSIDE) {
          const props2 = self.props;
          const onPressOut2 = props2.onPressOut;
          if (onPressOut2 != null) {
            onPressOut2();
          }
        } else if (BEGAN === obj.UNDETERMINED) {
          self.reset();
          if (self.STATE === obj.BEGAN) {
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
      let hitSlop;
      const self = this;
      if (typeof this.props.hitSlop === "number") {
        const rect = {
          top: self.props.hitSlop,
          left: self.props.hitSlop,
          bottom: self.props.hitSlop,
          right: self.props.hitSlop,
        };
        hitSlop = rect;
      } else {
        hitSlop = self.props.hitSlop;
      }
      let onHandlerStateChange;
      const obj = {
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
      const LegacyBaseButton = LegacyRawButton.LegacyBaseButton;
      if (!self.props.disabled) {
        onHandlerStateChange = self.onHandlerStateChange;
      }
      let flag = self.props.touchSoundDisabled;
      if (flag == null) {
        flag = false;
      }
      const merged = Object.assign(self.props.extraButtonProps);
      const View = Animated.View;
      const merged1 = Object.assign(obj);
      return (
        <LegacyBaseButton
          style={self.props.containerStyle}
          onHandlerStateChange={onHandlerStateChange}
          onGestureEvent={self.onGestureEvent}
          hitSlop={hitSlop}
          userSelect={self.props.userSelect}
          shouldActivateOnStart={self.props.shouldActivateOnStart}
          disallowInterruption={self.props.disallowInterruption}
          testID={self.props.testID}
          touchSoundDisabled={flag}
          enabled={!self.props.disabled}
        >
          <View style={self.props.style}>{self.props.children}</View>
        </LegacyBaseButton>
      );
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
