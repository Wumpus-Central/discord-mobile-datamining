// _runtime/00428_TouchableHighlight.js
import react2 from "00019_react.js";
import ViewDefault from "00108_View.js";
import get_hairlineWidthDefault from "00254_get_hairlineWidth.js";
import get_VersionDefault from "00273_get_Version.js";
import _modDef292 from "metro/00292__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import hasOwnProperty from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import Fragment from "react/00021_Fragment.js";

const react = react2;

let c10;
let c9;
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
let closure_2 = ["onBlur", "onFocus"];
const cloneElement = react2.cloneElement;
({ jsx: c9, jsxs: c10 } = Fragment);
class TouchableHighlightImpl {
  constructor() {
    let _createExtraStylesResult;
    let constructResult;
    let tmp6;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, TouchableHighlightImpl);
    const items1 = [...items];
    const obj = _getPrototypeOf(TouchableHighlightImpl);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = hasOwnProperty(self, constructResult);
    tmp3Result._isMounted = false;
    const obj2 = {
      pressability: new tmp6(tmp3Result._createPressabilityConfig()),
      extraStyles: _createExtraStylesResult,
    };
    tmp6 = _modDef292;
    _createExtraStylesResult = null;
    new tmp6(tmp3Result._createPressabilityConfig());
    if (true === tmp3Result.props.testOnly_pressed) {
      _createExtraStylesResult = tmp3Result._createExtraStyles();
    }
    tmp3Result.state = obj2;
    return tmp3Result;
  }
}
_inherits(TouchableHighlightImpl, react.Component);
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
      android_disableSound: self.props.touchSoundDisabled,
      onBlur(arg0) {
        if (get_VersionDefault.isTV) {
          self._hideUnderlay();
        }
        if (null != self.props.onBlur) {
          const props = tmp3.props;
          props.onBlur(arg0);
        }
      },
      onFocus(arg0) {
        if (get_VersionDefault.isTV) {
          self._showUnderlay();
        }
        if (null != self.props.onFocus) {
          const props = tmp3.props;
          props.onFocus(arg0);
        }
      },
      onLongPress: self.props.onLongPress,
      onPress(arg0) {
        if (null != self._hideTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._hideTimeout);
        }
        if (!get_VersionDefault.isTV) {
          self._showUnderlay();
          let num = self.props.delayPressOut;
          const _setTimeout = setTimeout;
          if (num == null) {
            num = 0;
          }
          self._hideTimeout = _setTimeout(() => {
            self._hideUnderlay();
          }, num);
        }
        if (null != self.props.onPress) {
          const props = self.props;
          props.onPress(arg0);
        }
      },
      onPressIn(arg0) {
        if (null != self._hideTimeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._hideTimeout);
          self._hideTimeout = null;
        }
        self._showUnderlay();
        if (null != self.props.onPressIn) {
          const props = self.props;
          props.onPressIn(arg0);
        }
      },
      onPressOut(arg0) {
        if (null == self._hideTimeout) {
          self._hideUnderlay();
        }
        if (null != self.props.onPressOut) {
          const props = self.props;
          props.onPressOut(arg0);
        }
      },
    };
    if (null != this.props.disabled) {
      disabled = self.props.disabled;
    } else {
      const accessibilityState = self.props.accessibilityState;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    return obj;
  },
};
let items = [
  entry,
  {
    key: "_createExtraStyles",
    value: function _createExtraStyles() {
      let str;
      const self = this;
      let num = this.props.activeOpacity;
      if (num == null) {
        num = 0.85;
      }
      const obj = { child: { opacity: num }, underlay: { backgroundColor: str } };
      str = "black";
      if (undefined !== self.props.underlayColor) {
        str = self.props.underlayColor;
      }
      return obj;
    },
  },
  {
    key: "_showUnderlay",
    value: function _showUnderlay() {
      const self = this;
      const tmp = this._isMounted && self._hasPressHandler();
      if (tmp) {
        const setState = self.setState;
        const obj = { extraStyles: self._createExtraStyles() };
        setState(obj);
        if (null != self.props.onShowUnderlay) {
          const props = self.props;
          props.onShowUnderlay();
        }
      }
    },
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
      const tmp3 = true !== self.props.testOnly_pressed && self._hasPressHandler();
      if (tmp3) {
        self.setState({ extraStyles: null });
        if (null != self.props.onHideUnderlay) {
          const props = self.props;
          props.onHideUnderlay();
        }
      }
    },
  },
  {
    key: "_hasPressHandler",
    value: function _hasPressHandler() {
      const self = this;
      return (
        null != this.props.onPress ||
        null != self.props.onPressIn ||
        null != self.props.onPressOut ||
        null != self.props.onLongPress
      );
    },
  },
  {
    key: "render",
    value: function render() {
      let accessibilityElementsHidden;
      let accessibilityState;
      let accessibilityViewIsModal;
      let compose;
      let items;
      let nativeID;
      let onBlur;
      let onFocus;
      let prop1;
      let prop2;
      let prop3;
      let str2;
      let style;
      let underlay;
      const self = this;
      const Children = react.Children;
      const onlyResult = Children.only(this.props.children);
      const pressability = this.state.pressability;
      const eventHandlers = pressability.getEventHandlers();
      ({ onBlur, onFocus } = eventHandlers);
      const tmp3 = _objectWithoutProperties(eventHandlers, closure_2);
      if (null != this.props.disabled) {
        const obj = { disabled: self.props.disabled };
        const merged = Object.assign(self.props.accessibilityState);
        accessibilityState = obj;
      } else {
        accessibilityState = self.props.accessibilityState;
      }
      let prop = self.props["aria-valuemax"];
      if (prop == null) {
        const accessibilityValue = self.props.accessibilityValue;
        let max;
        if (accessibilityValue != null) {
          max = accessibilityValue.max;
        }
        prop = max;
      }
      const range = { max: prop, min: prop1, now: prop2, text: prop3 };
      prop1 = self.props["aria-valuemin"];
      if (prop1 == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        prop1 = min;
      }
      prop2 = self.props["aria-valuenow"];
      if (prop2 == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        prop2 = now;
      }
      prop3 = self.props["aria-valuetext"];
      if (prop3 == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        prop3 = text;
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
      const obj2 = {
        accessible: false !== self.props.accessible,
        accessibilityLabel,
        accessibilityHint: self.props.accessibilityHint,
        accessibilityLanguage: self.props.accessibilityLanguage,
        accessibilityRole: self.props.accessibilityRole,
        accessibilityState,
        accessibilityValue: range,
        accessibilityActions: self.props.accessibilityActions,
        onAccessibilityAction: self.props.onAccessibilityAction,
        importantForAccessibility: str2,
        accessibilityViewIsModal,
        accessibilityLiveRegion: str,
        accessibilityElementsHidden,
        style: compose(style, underlay),
        onLayout: self.props.onLayout,
        hitSlop: self.props.hitSlop,
        hasTVPreferredFocus: self.props.hasTVPreferredFocus,
        nextFocusDown: self.props.nextFocusDown,
        nextFocusForward: self.props.nextFocusForward,
        nextFocusLeft: self.props.nextFocusLeft,
        nextFocusRight: self.props.nextFocusRight,
        nextFocusUp: self.props.nextFocusUp,
        focusable: false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled,
        nativeID,
        testID: self.props.testID,
        ref: self.props.hostRef,
        children: items,
      };
      str2 = "no-hide-descendants";
      const tmp17 = ViewDefault;
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
      const extraStyles = self.state.extraStyles;
      underlay = undefined;
      compose = get_hairlineWidthDefault.compose;
      style = self.props.style;
      get_hairlineWidthDefault;
      if (extraStyles != null) {
        underlay = extraStyles.underlay;
      }
      nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      const merged1 = Object.assign(tmp3);
      const extraStyles2 = self.state.extraStyles;
      let child;
      const compose2 = get_hairlineWidthDefault.compose;
      const style2 = onlyResult.props.style;
      get_hairlineWidthDefault;
      if (extraStyles2 != null) {
        child = extraStyles2.child;
      }
      items = [,];
      const obj3 = { style: compose2(style2, child) };
      items[0] = cloneElement(onlyResult, obj3);
      items[1] = null;
      return authStore(tmp17, obj2);
    },
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      const pressability = this.state.pressability;
      pressability.configure(this._createPressabilityConfig());
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
    },
  },
];
let closure_12 = _createClass(TouchableHighlightImpl, items);
class TouchableHighlight {
  constructor(ref) {
    const obj = { hostRef: ref.ref };
    const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
    return React4(closure_12, obj);
  }
}
TouchableHighlight.displayName = "TouchableHighlight";

export default TouchableHighlight;
