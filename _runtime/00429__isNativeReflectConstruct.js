// === Module 429: _isNativeReflectConstruct ===

// Module 429 (_isNativeReflectConstruct)
import noopAll from "noop" /* 19 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import jsxProd from "jsxProd" /* 21 */;

const TouchableOpacity = importDefault;
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
let closure_2 = ["onBlur", "onFocus"];
({ jsx: error, jsxs: closure_8 } = jsxProd);
class TouchableOpacity {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_4(this, TouchableOpacity);
    items1 = [...items];
    tmp2 = closure_6;
    obj = closure_6(TouchableOpacity);
    tmp3 = closure_5;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { anim: null, pressability: null };
    value = new require("get FlatList").Value(tmp3Result._getChildStyleOpacityWithDefault());
    obj[0] = value;
    tmp7 = require("isActiveSignal");
    tmp7 = new tmp7(tmp3Result._createPressabilityConfig());
    obj[1] = tmp7;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
importDefaultResult1(TouchableOpacity, noopAll.Component);
let items = [
  {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      const self = this;
      const obj = { cancelable: !this.props.rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, onBlur: null, onFocus: null, onLongPress: null, onPress: null, onPressIn: null, onPressOut: null };
      let disabled = this.props.disabled;
      if (disabled == null) {
        disabled = self.props["aria-disabled"];
      }
      if (disabled == null) {
        const accessibilityState = self.props.accessibilityState;
        let disabled1;
        if (accessibilityState != null) {
          disabled1 = accessibilityState.disabled;
        }
        disabled = disabled1;
      }
      obj[1] = disabled;
      obj[2] = self.props.hitSlop;
      obj[3] = self.props.delayLongPress;
      obj[4] = self.props.delayPressIn;
      obj[5] = self.props.delayPressOut;
      obj[7] = self.props.pressRetentionOffset;
      obj[8] = function onBlur(arg0) {
        if (self(dependencyMap[10]).isTV) {
          self._opacityInactive(250);
        }
        if (null != self.props.onBlur) {
          const props = tmp3.props;
          props.onBlur(arg0);
        }
      };
      obj[9] = function onFocus(arg0) {
        if (self(dependencyMap[10]).isTV) {
          self._opacityActive(150);
        }
        if (null != self.props.onFocus) {
          const props = tmp3.props;
          props.onFocus(arg0);
        }
      };
      obj[10] = self.props.onLongPress;
      obj[11] = self.props.onPress;
      obj[12] = function onPressIn(dispatchConfig) {
        let num = 150;
        if ("onResponderGrant" === dispatchConfig.dispatchConfig.registrationName) {
          num = 0;
        }
        self._opacityActive(num);
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(dispatchConfig);
        }
      };
      obj[13] = function onPressOut(arg0) {
        self._opacityInactive(250);
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  },
  {
    key: "_setOpacityTo",
    value: function _setOpacityTo(toValue, duration) {
      TouchableOpacity(397);
      const obj = { toValue, duration, easing: TouchableOpacity(364).inOut(TouchableOpacity(364).quad), useNativeDriver: true };
      const obj3 = TouchableOpacity(364);
      obj.timing(this.state.anim, obj).start();
    }
  },
  {
    key: "_opacityActive",
    value: function _opacityActive(duration) {
      let num = this.props.activeOpacity;
      if (num == null) {
        num = 0.2;
      }
      this._setOpacityTo(num, duration);
    }
  },
  {
    key: "_opacityInactive",
    value: function _opacityInactive(duration) {
      this._setOpacityTo(this._getChildStyleOpacityWithDefault(), duration);
    }
  },
  {
    key: "_getChildStyleOpacityWithDefault",
    value: function _getChildStyleOpacityWithDefault() {
      const tmp = TouchableOpacity(148)(this.props.style);
      let opacity;
      if (tmp != null) {
        opacity = tmp.opacity;
      }
      let num = 1;
      if (typeof opacity === "number") {
        num = opacity;
      }
      return num;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
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
      let tmp13 = obj;
      if (null != self.props.disabled) {
        obj = {};
        const merged = Object.assign(obj);
        obj.disabled = self.props.disabled;
        tmp13 = obj;
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
      obj1 = { accessible: false !== self.props.accessible, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState: tmp13, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, accessibilityValue: obj, importantForAccessibility: null, accessibilityViewIsModal: null, accessibilityLiveRegion: null, accessibilityElementsHidden: null, style: null, nativeID: null, testID: null, onLayout: null, nextFocusDown: null, nextFocusForward: null, nextFocusLeft: null, nextFocusRight: null, nextFocusUp: null, hasTVPreferredFocus: null, hitSlop: null, focusable: null, ref: null };
      let str2 = "no-hide-descendants";
      if (true !== self.props["aria-hidden"]) {
        str2 = self.props.importantForAccessibility;
      }
      obj1[9] = str2;
      let accessibilityViewIsModal = self.props["aria-modal"];
      if (accessibilityViewIsModal == null) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      obj1[10] = accessibilityViewIsModal;
      obj1[11] = str;
      let accessibilityElementsHidden = self.props["aria-hidden"];
      if (accessibilityElementsHidden == null) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      obj1[12] = accessibilityElementsHidden;
      const items = [self.props.style, { opacity: self.state.anim }];
      obj1[13] = items;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj1[14] = nativeID;
      obj1[15] = self.props.testID;
      obj1[16] = self.props.onLayout;
      obj1[17] = self.props.nextFocusDown;
      obj1[18] = self.props.nextFocusForward;
      obj1[19] = self.props.nextFocusLeft;
      obj1[20] = self.props.nextFocusRight;
      obj1[21] = self.props.nextFocusUp;
      obj1[22] = self.props.hasTVPreferredFocus;
      obj1[23] = self.props.hitSlop;
      obj1[24] = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      obj1[25] = self.props.hostRef;
      const merged1 = Object.assign(callback(eventHandlers, closure_2));
      const items1 = [self.props.children, null];
      obj1.children = items1;
      return callback2(TouchableOpacity(397).View, obj1);
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(disabled) {
      const self = this;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
      let tmp2 = this.props.disabled === disabled.disabled;
      if (tmp2) {
        const tmp5 = TouchableOpacity(148)(disabled.style);
        let opacity;
        if (tmp5 != null) {
          opacity = tmp5.opacity;
        }
        const tmp8 = TouchableOpacity(148)(self.props.style);
        let opacity1;
        if (tmp8 != null) {
          opacity1 = tmp8.opacity;
        }
        tmp2 = opacity === opacity1;
      }
      if (!tmp2) {
        self._opacityInactive(250);
      }
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
      const anim = this.state.anim;
      anim.resetAnimation();
    }
  }
];
let closure_10 = importDefaultResult(TouchableOpacity, items);
class Touchable {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(Object.assign(global, Object.create(null)));
    obj.hostRef = global.ref;
    return jsx(closure_10, obj);
  }
}
Touchable.displayName = "TouchableOpacity";

export default Touchable;