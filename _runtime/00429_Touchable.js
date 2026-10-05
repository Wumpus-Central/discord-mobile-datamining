// === Module 429: Touchable ===

// Module 429 (Touchable)
import flattenStyleDefault from "flattenStyle" /* 148 */;
import get_VersionDefault from "get Version" /* 273 */;
import _modDef292 from "module_292" /* 292 */;
import bezierDefault from "bezier" /* 364 */;
import get_FlatListDefault from "get FlatList" /* 397 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let metroImportAll;
let metroImportDefault;
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
let closure_2 = ["onBlur", "onFocus"];
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
class TouchableOpacity {
  constructor() {
    let constructResult;
    let tmp7;
    let value;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, TouchableOpacity);
    const items1 = [...items];
    const obj = _getPrototypeOf(TouchableOpacity);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    const obj2 = { anim: value, pressability: new tmp7(tmp3Result._createPressabilityConfig()) };
    value = new get_FlatListDefault.Value(tmp3Result._getChildStyleOpacityWithDefault());
    tmp7 = _modDef292;
    tmp3Result.state = obj2;
    new tmp7(tmp3Result._createPressabilityConfig());
    return tmp3Result;
  }
}
_inherits(TouchableOpacity, react.Component);
const entry = {
  key: "_createPressabilityConfig",
  value: function _createPressabilityConfig() {
    let disabled;
    const self = this;
    const obj = {
      cancelable: !this.props.rejectResponderTermination,
      disabled,
      hitSlop: self.props.hitSlop,
      delayLongPress: self.props.delayLongPress,
      delayPressIn: self.props.delayPressIn,
      delayPressOut: self.props.delayPressOut,
      minPressDuration: 0,
      pressRectOffset: self.props.pressRetentionOffset,
      onBlur(arg0) {
        if (get_VersionDefault.isTV) {
          self._opacityInactive(250);
        }
        if (null != self.props.onBlur) {
          const props = tmp3.props;
          props.onBlur(arg0);
        }
      },
      onFocus(arg0) {
        if (get_VersionDefault.isTV) {
          self._opacityActive(150);
        }
        if (null != self.props.onFocus) {
          const props = tmp3.props;
          props.onFocus(arg0);
        }
      },
      onLongPress: self.props.onLongPress,
      onPress: self.props.onPress,
      onPressIn(dispatchConfig) {
        let num = 150;
        const _opacityActive = self._opacityActive;
        if ("onResponderGrant" === dispatchConfig.dispatchConfig.registrationName) {
          num = 0;
        }
        _opacityActive(num);
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(dispatchConfig);
        }
      },
      onPressOut(arg0) {
        self._opacityInactive(250);
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      }
    };
    disabled = this.props.disabled;
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
    return obj;
  }
};
let items = [
  entry,
  {
    key: "_setOpacityTo",
    value: function _setOpacityTo(toValue, duration) {
      let obj2;
      const obj = { toValue, duration, easing: obj2.inOut(bezierDefault.quad), useNativeDriver: true };
      const timing = get_FlatListDefault.timing;
      const anim = this.state.anim;
      get_FlatListDefault;
      obj2 = bezierDefault;
      const timingResult = timing(anim, obj);
      timingResult.start();
    }
  },
  {
    key: "_opacityActive",
    value: function _opacityActive(duration) {
      let num = this.props.activeOpacity;
      const _setOpacityTo = this._setOpacityTo;
      if (num == null) {
        num = 0.2;
      }
      _setOpacityTo(num, duration);
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
      const tmp = flattenStyleDefault(this.props.style);
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
      let accessibilityElementsHidden;
      let accessibilityViewIsModal;
      let items;
      let items1;
      let nativeID;
      let onBlur;
      let onFocus;
      let prop1;
      let prop2;
      let prop3;
      let prop4;
      let prop6;
      let prop7;
      let prop8;
      let str2;
      const self = this;
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      let prop = this.props["aria-busy"];
      const tmp2 = _objectWithoutProperties(eventHandlers, closure_2);
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
      let tmp13 = obj;
      if (null != self.props.disabled) {
        const obj2 = { disabled: self.props.disabled };
        const merged = Object.assign(obj);
        tmp13 = obj2;
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
      const obj3 = { accessible: false !== self.props.accessible, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState: tmp13, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, accessibilityValue: range, importantForAccessibility: str2, accessibilityViewIsModal, accessibilityLiveRegion: str, accessibilityElementsHidden, style: items, nativeID, testID: self.props.testID, onLayout: self.props.onLayout, nextFocusDown: self.props.nextFocusDown, nextFocusForward: self.props.nextFocusForward, nextFocusLeft: self.props.nextFocusLeft, nextFocusRight: self.props.nextFocusRight, nextFocusUp: self.props.nextFocusUp, hasTVPreferredFocus: self.props.hasTVPreferredFocus, hitSlop: self.props.hitSlop, focusable: false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled, ref: self.props.hostRef, children: items1 };
      str2 = "no-hide-descendants";
      const View = get_FlatListDefault.View;
      if (true !== self.props["aria-hidden"]) {
        str2 = self.props.importantForAccessibility;
      }
      accessibilityViewIsModal = self.props["aria-modal"];
      if (accessibilityViewIsModal == null) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      accessibilityElementsHidden = self.props["aria-hidden"];
      if (accessibilityElementsHidden == null) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      items = [self.props.style, { opacity: self.state.anim }];
      nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      const merged1 = Object.assign(tmp2);
      items1 = [self.props.children, null];
      return metroImportAll(View, obj3);
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(disabled, arg1) {
      const self = this;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
      let tmp2 = this.props.disabled === disabled.disabled;
      if (tmp2) {
        const tmp5 = flattenStyleDefault(disabled.style);
        let opacity;
        if (tmp5 != null) {
          opacity = tmp5.opacity;
        }
        const tmp8 = flattenStyleDefault(self.props.style);
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
let closure_10 = _createClass(TouchableOpacity, items);
class Touchable {
  constructor(ref) {
    const obj = { hostRef: ref.ref };
    const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
    return metroImportDefault(closure_10, obj);
  }
}
Touchable.displayName = "TouchableOpacity";

export default Touchable;