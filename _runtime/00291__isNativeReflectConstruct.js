// === Module 291: _isNativeReflectConstruct ===

// Module 291 (_isNativeReflectConstruct)
import processColorDefault from "processColor" /* 50 */;
import _inheritsDefault from "_inherits" /* 98 */;
import isActiveSignalDefault from "isActiveSignal" /* 292 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importAllResult from "noop" /* 19 */;
import { cloneElement } from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

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
  } catch (err) {
  }
}
let closure_3 = ["onBlur", "onFocus"];
class TouchableNativeFeedback {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_5(this, TouchableNativeFeedback);
    items1 = [...items];
    tmp2 = closure_7;
    obj = closure_7(TouchableNativeFeedback);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { pressability: null };
    tmp6 = require("isActiveSignal");
    tmp6 = new tmp6(tmp3Result._createPressabilityConfig());
    obj[0] = tmp6;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
_inheritsDefault(TouchableNativeFeedback, importAllResult.Component);
let items = [
  {
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
      const obj = { cancelable: !self.props.rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, android_disableSound: null, onLongPress: null, onPress: null, onPressIn: null, onPressMove: null, onPressOut: null };
      if (null != self.props.disabled) {
        disabled = self.props.disabled;
      }
      obj[1] = disabled;
      obj[2] = self.props.hitSlop;
      obj[3] = self.props.delayLongPress;
      obj[4] = self.props.delayPressIn;
      obj[5] = self.props.delayPressOut;
      obj[7] = self.props.pressRetentionOffset;
      obj[8] = self.props.touchSoundDisabled;
      obj[9] = self.props.onLongPress;
      obj[10] = self.props.onPress;
      obj[11] = function onPressIn(nativeEvent) {
        const result = self._dispatchHotspotUpdate(nativeEvent);
        const result1 = self._dispatchPressedStateChange(true);
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(nativeEvent);
        }
      };
      obj[12] = function onPressMove(nativeEvent) {
        const result = self._dispatchHotspotUpdate(nativeEvent);
      };
      obj[13] = function onPressOut(arg0) {
        const result = self._dispatchPressedStateChange(false);
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  },
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
    }
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
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const Children = importAllResult.Children;
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
      obj[1] = prop1;
      let prop2 = self.props["aria-disabled"];
      if (prop2 == null) {
        const accessibilityState3 = self.props.accessibilityState;
        let disabled;
        if (accessibilityState3 != null) {
          disabled = accessibilityState3.disabled;
        }
        prop2 = disabled;
      }
      obj[2] = prop2;
      let prop3 = self.props["aria-expanded"];
      if (prop3 == null) {
        const accessibilityState4 = self.props.accessibilityState;
        let expanded;
        if (accessibilityState4 != null) {
          expanded = accessibilityState4.expanded;
        }
        prop3 = expanded;
      }
      obj[3] = prop3;
      let prop4 = self.props["aria-selected"];
      if (prop4 == null) {
        const accessibilityState5 = self.props.accessibilityState;
        let selected;
        if (accessibilityState5 != null) {
          selected = accessibilityState5.selected;
        }
        prop4 = selected;
      }
      obj[4] = prop4;
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
      obj = { max: prop5, min: null, now: null, text: null };
      let prop6 = self.props["aria-valuemin"];
      if (prop6 == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        prop6 = min;
      }
      obj[1] = prop6;
      let prop7 = self.props["aria-valuenow"];
      if (prop7 == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        prop7 = now;
      }
      obj[2] = prop7;
      let prop8 = self.props["aria-valuetext"];
      if (prop8 == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        prop8 = text;
      }
      obj[3] = prop8;
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
      obj1 = {};
      const merged1 = Object.assign(callback(eventHandlers, closure_3));
      if (undefined === self.props.background) {
        let background = TouchableNativeFeedback.SelectableBackground();
      } else {
        background = self.props.background;
      }
      if (typeof getBackgroundProp !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (true === self.props.useForeground) {
        if (importDefaultResultResult.canUseNativeForeground()) {
          const obj2 = { nativeForegroundAndroid: null };
          obj2[0] = background;
          let obj3 = obj2;
        }
        const merged2 = Object.assign(obj3);
        obj1.accessible = false !== self.props.accessible;
        obj1.accessibilityHint = self.props.accessibilityHint;
        obj1.accessibilityLanguage = self.props.accessibilityLanguage;
        obj1.accessibilityLabel = accessibilityLabel;
        obj1.accessibilityRole = self.props.accessibilityRole;
        obj1.accessibilityState = tmp14;
        obj1.accessibilityActions = self.props.accessibilityActions;
        obj1.onAccessibilityAction = self.props.onAccessibilityAction;
        obj1.accessibilityValue = obj;
        let str2 = "no-hide-descendants";
        if (true !== self.props["aria-hidden"]) {
          str2 = self.props.importantForAccessibility;
        }
        obj1.importantForAccessibility = str2;
        let accessibilityViewIsModal = self.props["aria-modal"];
        if (accessibilityViewIsModal == null) {
          accessibilityViewIsModal = self.props.accessibilityViewIsModal;
        }
        obj1.accessibilityViewIsModal = accessibilityViewIsModal;
        obj1.accessibilityLiveRegion = str;
        let accessibilityElementsHidden = self.props["aria-hidden"];
        if (accessibilityElementsHidden == null) {
          accessibilityElementsHidden = self.props.accessibilityElementsHidden;
        }
        obj1.accessibilityElementsHidden = accessibilityElementsHidden;
        obj1.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
        obj1.hitSlop = self.props.hitSlop;
        obj1.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
        let nativeID = self.props.id;
        if (nativeID == null) {
          nativeID = self.props.nativeID;
        }
        obj1.nativeID = nativeID;
        obj1.nextFocusDown = self.props.nextFocusDown;
        obj1.nextFocusForward = self.props.nextFocusForward;
        obj1.nextFocusLeft = self.props.nextFocusLeft;
        obj1.nextFocusRight = self.props.nextFocusRight;
        obj1.nextFocusUp = self.props.nextFocusUp;
        obj1.onLayout = self.props.onLayout;
        obj1.testID = self.props.testID;
        items1[1] = obj1;
        HermesBuiltin.arraySpread(items, 2);
        return HermesBuiltin.apply(items1, undefined);
      }
      obj3 = { nativeBackgroundAndroid: background };
      const tmp3 = callback(eventHandlers, closure_3);
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
const importDefaultResultResult = importDefaultResult(TouchableNativeFeedback, items);
const unpackModuleId = importDefaultResultResult;
importDefaultResultResult.SelectableBackground = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackground", rippleRadius });
importDefaultResultResult.SelectableBackgroundBorderless = (rippleRadius) => ({ type: "ThemeAttrAndroid", attribute: "selectableItemBackgroundBorderless", rippleRadius });
importDefaultResultResult.Ripple = (arg0, borderless, rippleRadius) => ({ type: "RippleAndroid", color: processColorDefault(arg0), borderless, rippleRadius });
importDefaultResultResult.canUseNativeForeground = () => true;
function getBackgroundProp(arg0, arg1) {

}
importDefaultResultResult.displayName = "TouchableNativeFeedback";

export default importDefaultResultResult;