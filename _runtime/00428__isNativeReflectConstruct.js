// === Module 428: _isNativeReflectConstruct ===

// Module 428 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import { cloneElement } from "noop";
import jsxProd from "jsxProd";

let c10;
let c9;
const TouchableHighlightImpl = importDefault;
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
let closure_2 = ["onBlur", "onFocus"];
const error = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
class TouchableHighlightImpl {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = _isNativeReflectConstruct(this, TouchableHighlightImpl);
    items1 = [...items];
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(TouchableHighlightImpl);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._isMounted = false;
    obj = { pressability: null, extraStyles: null };
    tmp6 = require("isActiveSignal");
    tmp6 = new tmp6(tmp3Result._createPressabilityConfig());
    obj[0] = tmp6;
    _createExtraStylesResult = null;
    if (true === tmp3Result.props.testOnly_pressed) {
      _createExtraStylesResult = tmp3Result._createExtraStyles();
    }
    obj[1] = _createExtraStylesResult;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
require("_inherits")(TouchableHighlightImpl, importAllResult.Component);
let items = [
  {
    key: "_createPressabilityConfig",
    value: function _createPressabilityConfig() {
      let self = this;
      self = this;
      const obj = { cancelable: !this.props.rejectResponderTermination, disabled: null, hitSlop: null, delayLongPress: null, delayPressIn: null, delayPressOut: null, minPressDuration: 0, pressRectOffset: null, android_disableSound: null, onBlur: null, onFocus: null, onLongPress: null, onPress: null, onPressIn: null, onPressOut: null };
      if (null != this.props.disabled) {
        let disabled = self.props.disabled;
      } else {
        const accessibilityState = self.props.accessibilityState;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
      }
      obj[1] = disabled;
      obj[2] = self.props.hitSlop;
      obj[3] = self.props.delayLongPress;
      obj[4] = self.props.delayPressIn;
      obj[5] = self.props.delayPressOut;
      obj[7] = self.props.pressRetentionOffset;
      obj[8] = self.props.touchSoundDisabled;
      obj[9] = function onBlur(arg0) {
        if (self(outer1_1[9]).isTV) {
          self._hideUnderlay();
        }
        if (null != self.props.onBlur) {
          const props = tmp3.props;
          props.onBlur(arg0);
        }
      };
      obj[10] = function onFocus(arg0) {
        if (self(outer1_1[9]).isTV) {
          self._showUnderlay();
        }
        if (null != self.props.onFocus) {
          const props = tmp3.props;
          props.onFocus(arg0);
        }
      };
      obj[11] = self.props.onLongPress;
      obj[12] = function onPress(arg0) {
        if (null != self._hideTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj._hideTimeout);
        }
        if (!self(outer1_1[9]).isTV) {
          obj._showUnderlay();
          let num = obj.props.delayPressOut;
          if (num == null) {
            num = 0;
          }
          obj._hideTimeout = setTimeout(() => {
            closure_0._hideUnderlay();
          }, num);
        }
        if (null != self.props.onPress) {
          const props = obj.props;
          props.onPress(arg0);
        }
      };
      obj[13] = function onPressIn(arg0) {
        if (null != self._hideTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(obj._hideTimeout);
          obj._hideTimeout = null;
        }
        self._showUnderlay();
        if (null != self.props.onPressIn) {
          const props = obj.props;
          props.onPressIn(arg0);
        }
      };
      obj[14] = function onPressOut(arg0) {
        if (null == self._hideTimeout) {
          obj._hideUnderlay();
        }
        if (null != self.props.onPressOut) {
          const props = obj.props;
          props.onPressOut(arg0);
        }
      };
      return obj;
    }
  },
  {
    key: "_createExtraStyles",
    value: function _createExtraStyles() {
      const self = this;
      let num = this.props.activeOpacity;
      if (num == null) {
        num = 0.85;
      }
      const obj = { child: { opacity: num }, underlay: null };
      let str = "black";
      if (undefined !== self.props.underlayColor) {
        str = self.props.underlayColor;
      }
      obj[1] = { backgroundColor: str };
      return obj;
    }
  },
  {
    key: "_showUnderlay",
    value: function _showUnderlay() {
      const self = this;
      if (tmp) {
        const obj = { extraStyles: null };
        obj[0] = self._createExtraStyles();
        self.setState(obj);
        if (null != self.props.onShowUnderlay) {
          const props = self.props;
          props.onShowUnderlay();
        }
      }
    }
  },
  {
    key: "_hideUnderlay",
    value: function _hideUnderlay() {
      const self = this;
      if (null != this._hideTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hideTimeout);
        self._hideTimeout = null;
      }
      if (tmp3) {
        self.setState({ extraStyles: null });
        if (null != self.props.onHideUnderlay) {
          const props = self.props;
          props.onHideUnderlay();
        }
      }
    }
  },
  {
    key: "_hasPressHandler",
    value: function _hasPressHandler() {
      const self = this;
      return null != this.props.onPress || null != self.props.onPressIn || null != self.props.onPressOut || null != self.props.onLongPress;
    }
  },
  {
    key: "render",
    value: function render() {
      let onBlur;
      let onFocus;
      const self = this;
      const Children = importAllResult.Children;
      const onlyResult = Children.only(this.props.children);
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      if (null != this.props.disabled) {
        let obj = {};
        const merged = Object.assign(self.props.accessibilityState);
        obj.disabled = self.props.disabled;
        let accessibilityState = obj;
      } else {
        accessibilityState = self.props.accessibilityState;
      }
      aria_valuemax = self.props["aria-valuemax"];
      if (aria_valuemax == null) {
        const accessibilityValue = self.props.accessibilityValue;
        let max;
        if (accessibilityValue != null) {
          max = accessibilityValue.max;
        }
        aria_valuemax = max;
      }
      obj = { max: aria_valuemax, min: null, now: null, text: null };
      aria_valuemin = self.props["aria-valuemin"];
      if (aria_valuemin == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        aria_valuemin = min;
      }
      obj[1] = aria_valuemin;
      aria_valuenow = self.props["aria-valuenow"];
      if (aria_valuenow == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        aria_valuenow = now;
      }
      obj[2] = aria_valuenow;
      aria_valuetext = self.props["aria-valuetext"];
      if (aria_valuetext == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        aria_valuetext = text;
      }
      obj[3] = aria_valuetext;
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
      obj = { accessible: false !== self.props.accessible, accessibilityLabel, accessibilityHint: self.props.accessibilityHint, accessibilityLanguage: self.props.accessibilityLanguage, accessibilityRole: self.props.accessibilityRole, accessibilityState, accessibilityValue: obj, accessibilityActions: self.props.accessibilityActions, onAccessibilityAction: self.props.onAccessibilityAction, importantForAccessibility: null, accessibilityViewIsModal: null, accessibilityLiveRegion: null, accessibilityElementsHidden: null, style: null, onLayout: null, hitSlop: null, hasTVPreferredFocus: null, nextFocusDown: null, nextFocusForward: null, nextFocusLeft: null, nextFocusRight: null, nextFocusUp: null, focusable: null, nativeID: null, testID: null, ref: null };
      let str2 = "no-hide-descendants";
      const tmp10 = closure_10;
      const tmp3 = callback(eventHandlers, closure_2);
      if (true !== self.props["aria-hidden"]) {
        str2 = self.props.importantForAccessibility;
      }
      obj[9] = str2;
      let accessibilityViewIsModal = self.props["aria-modal"];
      if (accessibilityViewIsModal == null) {
        accessibilityViewIsModal = self.props.accessibilityViewIsModal;
      }
      obj[10] = accessibilityViewIsModal;
      obj[11] = str;
      let accessibilityElementsHidden = self.props["aria-hidden"];
      if (accessibilityElementsHidden == null) {
        accessibilityElementsHidden = self.props.accessibilityElementsHidden;
      }
      obj[12] = accessibilityElementsHidden;
      let tmp11Result = tmp11(254);
      const extraStyles = self.state.extraStyles;
      let underlay;
      if (extraStyles != null) {
        underlay = extraStyles.underlay;
      }
      obj[13] = tmp11Result.compose(self.props.style, underlay);
      obj[14] = self.props.onLayout;
      obj[15] = self.props.hitSlop;
      obj[16] = self.props.hasTVPreferredFocus;
      obj[17] = self.props.nextFocusDown;
      obj[18] = self.props.nextFocusForward;
      obj[19] = self.props.nextFocusLeft;
      obj[20] = self.props.nextFocusRight;
      obj[21] = self.props.nextFocusUp;
      obj[22] = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj[23] = nativeID;
      obj[24] = self.props.testID;
      obj[25] = self.props.hostRef;
      const merged1 = Object.assign(tmp3);
      tmp11Result = tmp11(254);
      const extraStyles2 = self.state.extraStyles;
      let child;
      if (extraStyles2 != null) {
        child = extraStyles2.child;
      }
      const tmp13 = TouchableHighlightImpl(108);
      const tmp16 = cloneElement;
      const items = [tmp16(onlyResult, { style: tmp11Result.compose(onlyResult.props.style, child) }), null];
      obj.children = items;
      return tmp10(tmp13, obj);
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      this._isMounted = false;
      if (null != this._hideTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._hideTimeout);
      }
      const pressability = self.state.pressability;
      pressability.reset();
    }
  }
];
let closure_12 = importDefaultResult(TouchableHighlightImpl, items);
class TouchableHighlight {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(Object.assign(global, Object.create(null)));
    obj.hostRef = global.ref;
    return jsx(_createPressabilityConfig, obj);
  }
}
TouchableHighlight.displayName = "TouchableHighlight";

export default TouchableHighlight;