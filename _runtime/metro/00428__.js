// _runtime/metro/00428__.js
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_2 = ["onBlur", "onFocus"];
const cloneElement = fn(19).cloneElement;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
class TouchableHighlightImpl {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_4(this, TouchableHighlightImpl);
    items1 = [...items];
    tmp2 = metroRequire;
    obj = metroRequire(TouchableHighlightImpl);
    tmp3 = hasOwnProperty;
    if (closure_11()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._isMounted = false;
    obj = { pressability: null, extraStyles: null };
    tmp6 = closure_0(closure_1[8]);
    tmp6 = new tmp6(tmp3Result._createPressabilityConfig());
    obj.pressability = tmp6;
    _createExtraStylesResult = null;
    if (true === tmp3Result.props.testOnly_pressed) {
      _createExtraStylesResult = tmp3Result._createExtraStyles();
    }
    obj.extraStyles = _createExtraStylesResult;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
_inherits(TouchableHighlightImpl, noop.Component);
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
      android_disableSound: null,
      onBlur: null,
      onFocus: null,
      onLongPress: null,
      onPress: null,
      onPressIn: null,
      onPressOut: null,
    };
    if (null != this.props.disabled) {
      let disabled = self.props.disabled;
    } else {
      const accessibilityState = self.props.accessibilityState;
      if (accessibilityState != null) {
        disabled = accessibilityState.disabled;
      }
    }
    obj.disabled = disabled;
    obj.hitSlop = self.props.hitSlop;
    obj.delayLongPress = self.props.delayLongPress;
    obj.delayPressIn = self.props.delayPressIn;
    obj.delayPressOut = self.props.delayPressOut;
    obj.pressRectOffset = self.props.pressRetentionOffset;
    obj.android_disableSound = self.props.touchSoundDisabled;
    obj.onBlur = function onBlur(arg0) {
      if (TouchableHighlightImpl(273).isTV) {
        self._hideUnderlay();
      }
      if (null != self.props.onBlur) {
        const props = tmp3.props;
        props.onBlur(arg0);
      }
    };
    obj.onFocus = function onFocus(arg0) {
      if (TouchableHighlightImpl(273).isTV) {
        self._showUnderlay();
      }
      if (null != self.props.onFocus) {
        const props = tmp3.props;
        props.onFocus(arg0);
      }
    };
    obj.onLongPress = self.props.onLongPress;
    obj.onPress = function onPress(arg0) {
      if (null != self._hideTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj._hideTimeout);
      }
      if (!TouchableHighlightImpl(273).isTV) {
        obj._showUnderlay();
        let num = obj.props.delayPressOut;
        if (num == null) {
          num = 0;
        }
        obj._hideTimeout = setTimeout(() => {
          self._hideUnderlay();
        }, num);
      }
      if (null != self.props.onPress) {
        const props = obj.props;
        props.onPress(arg0);
      }
    };
    obj.onPressIn = function onPressIn(arg0) {
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
    obj.onPressOut = function onPressOut(arg0) {
      if (null == self._hideTimeout) {
        obj._hideUnderlay();
      }
      if (null != self.props.onPressOut) {
        const props = obj.props;
        props.onPressOut(arg0);
      }
    };
    return obj;
  },
};
let items = [
  entry,
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
      obj.underlay = { backgroundColor: str };
      return obj;
    },
  },
  {
    key: "_showUnderlay",
    value: function _showUnderlay() {
      const self = this;
      if (tmp) {
        const obj = { extraStyles: self._createExtraStyles() };
        self.setState(obj);
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
      const self = this;
      const Children = noop.Children;
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
      let prop = self.props["aria-valuemax"];
      if (prop == null) {
        const accessibilityValue = self.props.accessibilityValue;
        let max;
        if (accessibilityValue != null) {
          max = accessibilityValue.max;
        }
        prop = max;
      }
      const range = { max: prop, min: null, now: null, text: null };
      let prop1 = self.props["aria-valuemin"];
      if (prop1 == null) {
        const accessibilityValue2 = self.props.accessibilityValue;
        let min;
        if (accessibilityValue2 != null) {
          min = accessibilityValue2.min;
        }
        prop1 = min;
      }
      range.min = prop1;
      let prop2 = self.props["aria-valuenow"];
      if (prop2 == null) {
        const accessibilityValue3 = self.props.accessibilityValue;
        let now;
        if (accessibilityValue3 != null) {
          now = accessibilityValue3.now;
        }
        prop2 = now;
      }
      range.now = prop2;
      let prop3 = self.props["aria-valuetext"];
      if (prop3 == null) {
        const accessibilityValue4 = self.props.accessibilityValue;
        let text;
        if (accessibilityValue4 != null) {
          text = accessibilityValue4.text;
        }
        prop3 = text;
      }
      range.text = prop3;
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
        accessibilityState,
        accessibilityValue: range,
        accessibilityActions: self.props.accessibilityActions,
        onAccessibilityAction: self.props.onAccessibilityAction,
        importantForAccessibility: null,
        accessibilityViewIsModal: null,
        accessibilityLiveRegion: null,
        accessibilityElementsHidden: null,
        style: null,
        onLayout: null,
        hitSlop: null,
        hasTVPreferredFocus: null,
        nextFocusDown: null,
        nextFocusForward: null,
        nextFocusLeft: null,
        nextFocusRight: null,
        nextFocusUp: null,
        focusable: null,
        nativeID: null,
        testID: null,
        ref: null,
      };
      let str2 = "no-hide-descendants";
      const tmp14 = closure_1_10;
      const tmp3 = _objectWithoutProperties(eventHandlers, closure_2);
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
      let tmp15Result = tmp15(254);
      const extraStyles = self.state.extraStyles;
      let underlay;
      if (extraStyles != null) {
        underlay = extraStyles.underlay;
      }
      obj.style = tmp15Result.compose(self.props.style, underlay);
      obj.onLayout = self.props.onLayout;
      obj.hitSlop = self.props.hitSlop;
      obj.hasTVPreferredFocus = self.props.hasTVPreferredFocus;
      obj.nextFocusDown = self.props.nextFocusDown;
      obj.nextFocusForward = self.props.nextFocusForward;
      obj.nextFocusLeft = self.props.nextFocusLeft;
      obj.nextFocusRight = self.props.nextFocusRight;
      obj.nextFocusUp = self.props.nextFocusUp;
      obj.focusable = false !== self.props.focusable && undefined !== self.props.onPress && !self.props.disabled;
      let nativeID = self.props.id;
      if (nativeID == null) {
        nativeID = self.props.nativeID;
      }
      obj.nativeID = nativeID;
      obj.testID = self.props.testID;
      obj.ref = self.props.hostRef;
      const merged1 = Object.assign(tmp3);
      tmp15Result = tmp15(254);
      const extraStyles2 = self.state.extraStyles;
      let child;
      if (extraStyles2 != null) {
        child = extraStyles2.child;
      }
      obj = { style: tmp15Result.compose(onlyResult.props.style, child) };
      const items = [cloneElement(onlyResult, obj), null];
      obj.children = items;
      return tmp14(TouchableHighlightImpl(108), obj);
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
  constructor(arg0) {
    obj = {};
    merged = Object.assign(Object.assign(global, Object.assign({ ref: 0 })));
    obj.hostRef = global.ref;
    return jsx(closure_12, obj);
  }
}
TouchableHighlight.displayName = "TouchableHighlight";

export default TouchableHighlight;
