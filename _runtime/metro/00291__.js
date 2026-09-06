// _runtime/metro/00291__.js
import processColorDefault from "../00050_processColor.js";
import _modDef292 from "00292__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const TouchableNativeFeedback = fn;
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
let closure_3 = ["onBlur", "onFocus"];
const cloneElement = fn(19).cloneElement;
const jsx = fn(21).jsx;
class TouchableNativeFeedback {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = hasOwnProperty(this, TouchableNativeFeedback);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(TouchableNativeFeedback);
    tmp3 = metroRequire;
    if (c10()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { pressability: null };
    tmp6 = closure_1(c2[8]);
    tmp6 = new tmp6(tmp3Result._createPressabilityConfig());
    obj.pressability = tmp6;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
_inherits(TouchableNativeFeedback, noop.Component);
const entry = {
  key: "_createPressabilityConfig",
  value: function _createPressabilityConfig() {
    const self = this;
    let disabled = this.props["aria-disabled"];
    if (disabled == null) {
      const accessibilityState = self.props.accessibilityState;
      disabled = undefined;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    const obj = {
      cancelable: !self.props.rejectResponderTermination,
      disabled: null,
      hitSlop: null,
      delayLongPress: null,
      delayPressIn: null,
      delayPressOut: null,
      minPressDuration: 0,
      pressRectOffset: null,
      android_disableSound: null,
      onLongPress: null,
      onPress: null,
      onPressIn: null,
      onPressMove: null,
      onPressOut: null,
    };
    if (null != self.props.disabled) {
      disabled = self.props.disabled;
    }
    obj.disabled = disabled;
    obj.hitSlop = self.props.hitSlop;
    obj.delayLongPress = self.props.delayLongPress;
    obj.delayPressIn = self.props.delayPressIn;
    obj.delayPressOut = self.props.delayPressOut;
    obj.pressRectOffset = self.props.pressRetentionOffset;
    obj.android_disableSound = self.props.touchSoundDisabled;
    obj.onLongPress = self.props.onLongPress;
    obj.onPress = self.props.onPress;
    obj.onPressIn = function onPressIn(nativeEvent) {
      const result = self._dispatchHotspotUpdate(nativeEvent);
      const result1 = self._dispatchPressedStateChange(true);
      if (null != self.props.onPressIn) {
        const props = self.props;
        props.onPressIn(nativeEvent);
      }
    };
    obj.onPressMove = function onPressMove(nativeEvent) {
      const result = self._dispatchHotspotUpdate(nativeEvent);
    };
    obj.onPressOut = function onPressOut(arg0) {
      const result = self._dispatchPressedStateChange(false);
      if (null != self.props.onPressOut) {
        const props = self.props;
        props.onPressOut(arg0);
      }
    };
    return obj;
  },
};
let items = [
  entry,
  {
    key: "_dispatchPressedStateChange",
    value: function _dispatchPressedStateChange(arg0) {
      const result = TouchableNativeFeedback(114).findHostInstance_DEPRECATED(this);
      if (null == result) {
        const _console = console;
        console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
      } else {
        const Commands = TouchableNativeFeedback(112).Commands;
        Commands.setPressed(result, arg0);
      }
      const obj = TouchableNativeFeedback(114);
    },
  },
  {
    key: "_dispatchHotspotUpdate",
    value: function _dispatchHotspotUpdate(nativeEvent) {
      ({ locationX, locationY } = nativeEvent.nativeEvent);
      const result = TouchableNativeFeedback(114).findHostInstance_DEPRECATED(this);
      if (null == result) {
        const _console = console;
        console.warn("Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?");
      } else {
        const Commands = TouchableNativeFeedback(112).Commands;
        if (locationX == null) {
          locationX = 0;
        }
        if (locationY == null) {
          locationY = 0;
        }
        Commands.hotspotUpdate(result, locationX, locationY);
      }
      const obj = TouchableNativeFeedback(114);
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const Children = noop.Children;
      const onlyResult = Children.only(this.props.children);
      const items = [onlyResult.props.children];
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      let prop = this.props["aria-busy"];
      if (prop == null) {
        const accessibilityState = self.props.accessibilityState;
        let busy;
        if (accessibilityState != null) {
          busy = accessibilityState.busy;
        }
        prop = busy;
      }
      let obj = { busy: prop, checked: null, disabled: null, expanded: null, selected: null };
      let prop1 = self.props["aria-checked"];
      if (prop1 == null) {
        const accessibilityState2 = self.props.accessibilityState;
        let checked;
        if (accessibilityState2 != null) {
          checked = accessibilityState2.checked;
        }
        prop1 = checked;
      }
      obj.checked = prop1;
      let prop2 = self.props["aria-disabled"];
      if (prop2 == null) {
        const accessibilityState3 = self.props.accessibilityState;
        let disabled;
        if (accessibilityState3 != null) {
          disabled = accessibilityState3.disabled;
        }
        prop2 = disabled;
      }
      obj.disabled = prop2;
      let prop3 = self.props["aria-expanded"];
      if (prop3 == null) {
        const accessibilityState4 = self.props.accessibilityState;
        let expanded;
        if (accessibilityState4 != null) {
          expanded = accessibilityState4.expanded;
        }
        prop3 = expanded;
      }
      obj.expanded = prop3;
      let prop4 = self.props["aria-selected"];
      if (prop4 == null) {
        const accessibilityState5 = self.props.accessibilityState;
        let selected;
        if (accessibilityState5 != null) {
          selected = accessibilityState5.selected;
        }
        prop4 = selected;
      }
      obj.selected = prop4;
      let tmp14 = obj;
      if (null != self.props.disabled) {
        obj = {};
        const merged = Object.assign(obj);
        obj.disabled = self.props.disabled;
        tmp14 = obj;
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
      const range = { max: prop5, min: null, now: null, text: null };
      let prop6 = self.props["aria-valuemin"];
      if (prop6 == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        prop6 = min;
      }
      range.min = prop6;
      let prop7 = self.props["aria-valuenow"];
      if (prop7 == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        prop7 = now;
      }
      range.now = prop7;
      let prop8 = self.props["aria-valuetext"];
      if (prop8 == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        prop8 = text;
      }
      range.text = prop8;
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
      const items1 = [onlyResult];
      obj = {};
      const merged1 = Object.assign(_objectWithoutProperties(eventHandlers, c3));
      if (undefined === self.props.background) {
        let background = TouchableNativeFeedback.SelectableBackground();
      } else {
        background = self.props.background;
      }
      if (typeof closure_12 === "function") {
        if (true === tmp30) {
          if (importDefaultResultResult.canUseNativeForeground()) {
            const obj1 = { nativeForegroundAndroid: background };
            let obj2 = obj1;
          }
          const merged2 = Object.assign(obj2);
          obj.accessible = false !== self.props.accessible;
          obj.accessibilityHint = self.props.accessibilityHint;
          obj.accessibilityLanguage = self.props.accessibilityLanguage;
          obj.accessibilityLabel = accessibilityLabel;
          obj.accessibilityRole = self.props.accessibilityRole;
          obj.accessibilityState = tmp14;
          obj.accessibilityActions = self.props.accessibilityActions;
          obj.onAccessibilityAction = self.props.onAccessibilityAction;
          obj.accessibilityValue = range;
          let str2 = "no-hide-descendants";
          if (true !== self.props["aria-hidden"]) {
            str2 = self.props.importantForAccessibility;
          }
          obj.importantForAccessibility = str2;
          let accessibilityViewIsModal = self.props["aria-modal"];
          if (accessibilityViewIsModal == null) {
            accessibilityViewIsModal = self.props.accessibilityViewIsModal;
          }
          obj.accessibilityViewIsModal = accessibilityViewIsModal;
          obj.accessibilityLiveRegion = str;
          let accessibilityElementsHidden = self.props["aria-hidden"];
          if (accessibilityElementsHidden == null) {
            accessibilityElementsHidden = self.props.accessibilityElementsHidden;
          }
          obj.accessibilityElementsHidden = accessibilityElementsHidden;
          obj.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
          obj.hitSlop = self.props.hitSlop;
          obj.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
          let nativeID = self.props.id;
          if (nativeID == null) {
            nativeID = self.props.nativeID;
          }
          obj.nativeID = nativeID;
          obj.nextFocusDown = self.props.nextFocusDown;
          obj.nextFocusForward = self.props.nextFocusForward;
          obj.nextFocusLeft = self.props.nextFocusLeft;
          obj.nextFocusRight = self.props.nextFocusRight;
          obj.nextFocusUp = self.props.nextFocusUp;
          obj.onLayout = self.props.onLayout;
          obj.testID = self.props.testID;
          items1[1] = obj;
          HermesBuiltin.arraySpread(items, 2);
          return HermesBuiltin.apply(items1, undefined);
        }
        obj2 = { nativeBackgroundAndroid: background };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmp3 = _objectWithoutProperties(eventHandlers, c3);
    },
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, arg1) {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    },
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const pressability = this.state.pressability;
      pressability.reset();
    },
  },
];
const importDefaultResultResult = _createClass(TouchableNativeFeedback, items);
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({
  type: "ThemeAttrAndroid",
  attribute: "selectableItemBackground",
  rippleRadius,
});
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({
  type: "ThemeAttrAndroid",
  attribute: "selectableItemBackgroundBorderless",
  rippleRadius,
});
importDefaultResultResult.Ripple = (arg0, borderless, rippleRadius) => ({
  type: "RippleAndroid",
  color: processColorDefault(arg0),
  borderless,
  rippleRadius,
});
importDefaultResultResult.canUseNativeForeground = () => true;
function getBackgroundProp(arg0, arg1) {}
importDefaultResultResult.displayName = "TouchableNativeFeedback";

export default importDefaultResultResult;
