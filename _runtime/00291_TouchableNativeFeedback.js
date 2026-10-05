// === Module 291: TouchableNativeFeedback ===

// Module 291 (TouchableNativeFeedback)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import processColorDefault from "processColor" /* 50 */;
import Commands2 from "Commands" /* 112 */;
import renderElement from "renderElement" /* 114 */;
import _modDef292 from "module_292" /* 292 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroRequire from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const react = react2;

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
let closure_3 = ["onBlur", "onFocus"];
const cloneElement = react2.cloneElement;
const jsx = Fragment.jsx;
class TouchableNativeFeedback {
  constructor() {
    let constructResult;
    let tmp6;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, TouchableNativeFeedback);
    const items1 = [...items];
    const obj = _getPrototypeOf(TouchableNativeFeedback);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroRequire(self, constructResult);
    const obj2 = { pressability: new tmp6(tmp3Result._createPressabilityConfig()) };
    tmp6 = _modDef292;
    tmp3Result.state = obj2;
    new tmp6(tmp3Result._createPressabilityConfig());
    return tmp3Result;
  }
}
_inherits(TouchableNativeFeedback, react.Component);
const entry = {
  key: "_createPressabilityConfig",
  value: function _createPressabilityConfig() {
    const self = this;
    let disabled = this.props["aria-disabled"];
    if (disabled == null) {
      const accessibilityState = self.props.accessibilityState;
      let disabled1;
      if (accessibilityState != null) {
        disabled1 = accessibilityState.disabled;
      }
      disabled = disabled1;
    }
    const obj = {
      cancelable: !self.props.rejectResponderTermination,
      disabled,
      hitSlop: self.props.hitSlop,
      delayLongPress: self.props.delayLongPress,
      delayPressIn: self.props.delayPressIn,
      delayPressOut: self.props.delayPressOut,
      minPressDuration: 0,
      pressRectOffset: self.props.pressRetentionOffset,
      android_disableSound: self.props.touchSoundDisabled,
      onLongPress: self.props.onLongPress,
      onPress: self.props.onPress,
      onPressIn(nativeEvent) {
        const result = self._dispatchHotspotUpdate(nativeEvent);
        const result1 = self._dispatchPressedStateChange(true);
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(nativeEvent);
        }
      },
      onPressMove(nativeEvent) {
        const result = self._dispatchHotspotUpdate(nativeEvent);
      },
      onPressOut(arg0) {
        const result = self._dispatchPressedStateChange(false);
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      }
    };
    if (null != self.props.disabled) {
      disabled = self.props.disabled;
    }
    return obj;
  }
};
let items = [
  entry,
  {
    key: "_dispatchPressedStateChange",
    value: function _dispatchPressedStateChange(arg0) {
      const obj = renderElement;
      const result = obj.findHostInstance_DEPRECATED(this);
      if (null == result) {
        const _console = console;
        console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
      } else {
        const Commands = Commands2.Commands;
        Commands.setPressed(result, arg0);
      }
    }
  },
  {
    key: "_dispatchHotspotUpdate",
    value: function _dispatchHotspotUpdate(nativeEvent) {
      let locationX;
      let locationY;
      ({ locationX, locationY } = nativeEvent.nativeEvent);
      const obj = renderElement;
      const result = obj.findHostInstance_DEPRECATED(this);
      if (null == result) {
        const _console = console;
        console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
      } else {
        const Commands = Commands2.Commands;
        const hotspotUpdate = Commands.hotspotUpdate;
        if (locationX == null) {
          locationX = 0;
        }
        if (locationY == null) {
          locationY = 0;
        }
        hotspotUpdate(result, locationX, locationY);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let background;
      let onBlur;
      let onFocus;
      let prop1;
      let prop2;
      let prop3;
      let prop4;
      let prop6;
      let prop7;
      let prop8;
      const self = this;
      const Children = react.Children;
      const onlyResult = Children.only(this.props.children);
      const items = [onlyResult.props.children];
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      let prop = this.props["aria-busy"];
      const tmp4 = _objectWithoutProperties(eventHandlers, closure_3);
      if (prop == null) {
        const accessibilityState = self.props.accessibilityState;
        let busy;
        if (accessibilityState != null) {
          busy = accessibilityState.busy;
        }
        prop = busy;
      }
      const obj = { busy: prop, checked: prop1, disabled: prop2, expanded: prop3, selected: prop4 };
      prop1 = self.props["aria-checked"];
      if (prop1 == null) {
        const accessibilityState2 = self.props.accessibilityState;
        let checked;
        if (accessibilityState2 != null) {
          checked = accessibilityState2.checked;
        }
        prop1 = checked;
      }
      prop2 = self.props["aria-disabled"];
      if (prop2 == null) {
        const accessibilityState3 = self.props.accessibilityState;
        let disabled;
        if (accessibilityState3 != null) {
          disabled = accessibilityState3.disabled;
        }
        prop2 = disabled;
      }
      prop3 = self.props["aria-expanded"];
      if (prop3 == null) {
        const accessibilityState4 = self.props.accessibilityState;
        let expanded;
        if (accessibilityState4 != null) {
          expanded = accessibilityState4.expanded;
        }
        prop3 = expanded;
      }
      prop4 = self.props["aria-selected"];
      if (prop4 == null) {
        const accessibilityState5 = self.props.accessibilityState;
        let selected;
        if (accessibilityState5 != null) {
          selected = accessibilityState5.selected;
        }
        prop4 = selected;
      }
      let tmp15 = obj;
      if (null != self.props.disabled) {
        const obj2 = { disabled: self.props.disabled };
        const merged = Object.assign(obj);
        tmp15 = obj2;
      }
      let prop5 = self.props["aria-valuemax"];
      if (prop5 == null) {
        const accessibilityValue = self.props.accessibilityValue;
        let max;
        if (accessibilityValue != null) {
          max = accessibilityValue.max;
        }
        prop5 = max;
      }
      const range = { max: prop5, min: prop6, now: prop7, text: prop8 };
      prop6 = self.props["aria-valuemin"];
      if (prop6 == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        prop6 = min;
      }
      prop7 = self.props["aria-valuenow"];
      if (prop7 == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        prop7 = now;
      }
      prop8 = self.props["aria-valuetext"];
      if (prop8 == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        prop8 = text;
      }
      let str = "none";
      if ("off" !== self.props["aria-live"]) {
        let accessibilityLiveRegion = self.props["aria-live"];
        if (accessibilityLiveRegion == null) {
          accessibilityLiveRegion = self.props.accessibilityLiveRegion;
        }
        str = accessibilityLiveRegion;
      }
      let accessibilityLabel = self.props["aria-label"];
      if (accessibilityLabel == null) {
        accessibilityLabel = self.props.accessibilityLabel;
      }
      const items1 = [onlyResult, ];
      const obj3 = {};
      const merged1 = Object.assign(tmp4);
      if (undefined === self.props.background) {
        background = TouchableNativeFeedback.SelectableBackground();
      } else {
        background = self.props.background;
      }
      if (typeof getBackgroundProp === "function") {
        if (true === tmp31) {
          let obj5;
          if (unpackModuleId.canUseNativeForeground()) {
            obj5 = { nativeForegroundAndroid: background };
            const obj4 = { nativeForegroundAndroid: background };
          }
          const merged2 = Object.assign(obj5);
          obj3.accessible = false !== self.props.accessible;
          obj3.accessibilityHint = self.props.accessibilityHint;
          obj3.accessibilityLanguage = self.props.accessibilityLanguage;
          obj3.accessibilityLabel = accessibilityLabel;
          obj3.accessibilityRole = self.props.accessibilityRole;
          obj3.accessibilityState = tmp15;
          obj3.accessibilityActions = self.props.accessibilityActions;
          obj3.onAccessibilityAction = self.props.onAccessibilityAction;
          obj3.accessibilityValue = range;
          let str2 = "no-hide-descendants";
          if (true !== self.props["aria-hidden"]) {
            str2 = self.props.importantForAccessibility;
          }
          obj3.importantForAccessibility = str2;
          let accessibilityViewIsModal = self.props["aria-modal"];
          if (accessibilityViewIsModal == null) {
            accessibilityViewIsModal = self.props.accessibilityViewIsModal;
          }
          obj3.accessibilityViewIsModal = accessibilityViewIsModal;
          obj3.accessibilityLiveRegion = str;
          let accessibilityElementsHidden = self.props["aria-hidden"];
          if (accessibilityElementsHidden == null) {
            accessibilityElementsHidden = self.props.accessibilityElementsHidden;
          }
          obj3.accessibilityElementsHidden = accessibilityElementsHidden;
          obj3.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
          obj3.hitSlop = self.props.hitSlop;
          obj3.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
          let nativeID = self.props.id;
          if (nativeID == null) {
            nativeID = self.props.nativeID;
          }
          obj3.nativeID = nativeID;
          obj3.nextFocusDown = self.props.nextFocusDown;
          obj3.nextFocusForward = self.props.nextFocusForward;
          obj3.nextFocusLeft = self.props.nextFocusLeft;
          obj3.nextFocusRight = self.props.nextFocusRight;
          obj3.nextFocusUp = self.props.nextFocusUp;
          obj3.onLayout = self.props.onLayout;
          obj3.testID = self.props.testID;
          items1[1] = obj3;
          HermesBuiltin.arraySpread(items1, items, 2);
          return HermesBuiltin.apply(cloneElement, items1, undefined);
        }
        obj5 = { nativeBackgroundAndroid: background };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, arg1) {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const pressability = this.state.pressability;
      pressability.reset();
    }
  }
];
const importDefaultResultResult = _createClass(TouchableNativeFeedback, items);
const unpackModuleId = importDefaultResultResult;
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius });
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius });
importDefaultResultResult.Ripple = (arg0, borderless, rippleRadius) => {
  const obj = { type: "RippleAndroid", color: processColorDefault(arg0), borderless, rippleRadius };
  return obj;
};
importDefaultResultResult.canUseNativeForeground = () => true;
function getBackgroundProp(arg0, arg1) {

}
importDefaultResultResult.displayName = "TouchableNativeFeedback";

export default importDefaultResultResult;