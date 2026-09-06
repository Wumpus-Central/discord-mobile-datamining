// _runtime/metro/00429__.js
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
  } catch (err) {}
}
let closure_2 = ["onBlur", "onFocus"];
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
class TouchableOpacity {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_4(this, TouchableOpacity);
    items1 = [...items];
    tmp2 = metroRequire;
    obj = metroRequire(TouchableOpacity);
    tmp3 = hasOwnProperty;
    if (closure_9()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { anim: null, pressability: null };
    value = new closure_0(closure_1[8]).Value(tmp3Result._getChildStyleOpacityWithDefault());
    obj.anim = value;
    tmp7 = closure_0(closure_1[9]);
    tmp7 = new tmp7(tmp3Result._createPressabilityConfig());
    obj.pressability = tmp7;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
_inherits(TouchableOpacity, noop.Component);
const entry = {
  key: "_createPressabilityConfig",
  value: function _createPressabilityConfig() {
    const self = this;
    const obj = {
      cancelable: !this.props.rejectResponderTermination,
      disabled: null,
      hitSlop: null,
      delayLongPress: null,
      delayPressIn: null,
      delayPressOut: null,
      minPressDuration: 0,
      pressRectOffset: null,
      onBlur: null,
      onFocus: null,
      onLongPress: null,
      onPress: null,
      onPressIn: null,
      onPressOut: null,
    };
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
    obj.disabled = disabled;
    obj.hitSlop = self.props.hitSlop;
    obj.delayLongPress = self.props.delayLongPress;
    obj.delayPressIn = self.props.delayPressIn;
    obj.delayPressOut = self.props.delayPressOut;
    obj.pressRectOffset = self.props.pressRetentionOffset;
    obj.onBlur = function onBlur(arg0) {
      if (TouchableOpacity(273).isTV) {
        self._opacityInactive(250);
      }
      if (null != self.props.onBlur) {
        const props = tmp3.props;
        props.onBlur(arg0);
      }
    };
    obj.onFocus = function onFocus(arg0) {
      if (TouchableOpacity(273).isTV) {
        self._opacityActive(150);
      }
      if (null != self.props.onFocus) {
        const props = tmp3.props;
        props.onFocus(arg0);
      }
    };
    obj.onLongPress = self.props.onLongPress;
    obj.onPress = self.props.onPress;
    obj.onPressIn = function onPressIn(dispatchConfig) {
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
    obj.onPressOut = function onPressOut(arg0) {
      self._opacityInactive(250);
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
    key: "_setOpacityTo",
    value: function _setOpacityTo(toValue, duration) {
      TouchableOpacity(397);
      const obj = {
        toValue,
        duration,
        easing: TouchableOpacity(364).inOut(TouchableOpacity(364).quad),
        useNativeDriver: true,
      };
      const obj3 = TouchableOpacity(364);
      obj.timing(this.state.anim, obj).start();
    },
  },
  {
    key: "_opacityActive",
    value: function _opacityActive(duration) {
      let num = this.props.activeOpacity;
      if (num == null) {
        num = 0.2;
      }
      this._setOpacityTo(num, duration);
    },
  },
  {
    key: "_opacityInactive",
    value: function _opacityInactive(duration) {
      this._setOpacityTo(this._getChildStyleOpacityWithDefault(), duration);
    },
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
    },
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
      obj = {
        accessible: false !== self.props.accessible,
        accessibilityLabel,
        accessibilityHint: self.props.accessibilityHint,
        accessibilityLanguage: self.props.accessibilityLanguage,
        accessibilityRole: self.props.accessibilityRole,
        accessibilityState: tmp13,
        accessibilityActions: self.props.accessibilityActions,
        onAccessibilityAction: self.props.onAccessibilityAction,
        accessibilityValue: range,
        importantForAccessibility: null,
        accessibilityViewIsModal: null,
        accessibilityLiveRegion: null,
        accessibilityElementsHidden: null,
        style: null,
        nativeID: null,
        testID: null,
        onLayout: null,
        nextFocusDown: null,
        nextFocusForward: null,
        nextFocusLeft: null,
        nextFocusRight: null,
        nextFocusUp: null,
        hasTVPreferredFocus: null,
        hitSlop: null,
        focusable: null,
        ref: null,
      };
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
      const items = [self.props.style, { opacity: self.state.anim }];
      obj.style = items;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj.nativeID = nativeID;
      obj.testID = self.props.testID;
      obj.onLayout = self.props.onLayout;
      obj.nextFocusDown = self.props.nextFocusDown;
      obj.nextFocusForward = self.props.nextFocusForward;
      obj.nextFocusLeft = self.props.nextFocusLeft;
      obj.nextFocusRight = self.props.nextFocusRight;
      obj.nextFocusUp = self.props.nextFocusUp;
      obj.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj.hitSlop = self.props.hitSlop;
      obj.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      obj.ref = self.props.hostRef;
      const merged1 = Object.assign(_objectWithoutProperties(eventHandlers, closure_2));
      const items1 = [self.props.children, null];
      obj.children = items1;
      return React6(TouchableOpacity(397).View, obj);
    },
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(disabled, arg1) {
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
      const anim = this.state.anim;
      anim.resetAnimation();
    },
  },
];
let closure_10 = _createClass(TouchableOpacity, items);
class Touchable {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(Object.assign(global, Object.assign({ ref: 0 })));
    obj.hostRef = global.ref;
    return jsx(closure_10, obj);
  }
}
Touchable.displayName = "TouchableOpacity";

export default Touchable;
