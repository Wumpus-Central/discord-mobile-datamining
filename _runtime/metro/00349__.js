// _runtime/metro/00349__.js
import react2 from "../00019_react.js";
import javaScriptFlagGetterAll from "../00027_javaScriptFlagGetter.js";
import memoizeOneDefault from "../00327_memoizeOne.js";
import _modDef343 from "00343__.js";
import _modDef354 from "00354__.js";
import reactDefault from "../00409_react.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroImportAll from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import Fragment from "../react/00021_Fragment.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";

const react = react2;

let closure_12;
let jsxs;
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
let closure_5 = ["experimental_endDraggingSensitivityMultiplier", "maintainVisibleContentPosition"];
const cloneElement = react2.cloneElement;
({ jsx: closure_12, jsxs } = Fragment);
class ScrollView {
  constructor(arg0) {
    let constructResult;
    const f81077 = (arg0) => {
      let closure_0 = arg0;
      return (nativeInstance) => {
        let tmp = null;
        if (null != nativeInstance) {
          tmp = f134121(nativeInstance);
        }
        obj3.nativeInstance = nativeInstance;
        obj3.publicInstance = tmp;
        if (null != closure_0) {
          if (typeof closure_0 === "function") {
            closure_0(tmp);
          } else {
            closure_0.current = tmp;
          }
        }
      };
    };
    const self = this;
    let tmp = _classCallCheck(this, ScrollView);
    const items = [arg0];
    let obj = _getPrototypeOf(ScrollView);
    if (_isNativeReflectConstruct()) {
      let tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    let tmp3Result = metroImportAll(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result._scrollAnimatedValueAttachment = null;
    tmp3Result._stickyHeaderRefs = new Map();
    new Map();
    tmp3Result._headerLayoutYs = new Map();
    tmp3Result._keyboardMetrics = null;
    tmp3Result._additionalScrollOffset = 0;
    tmp3Result._isTouching = false;
    tmp3Result._lastMomentumScrollBeginTime = 0;
    tmp3Result._lastMomentumScrollEndTime = 0;
    tmp3Result._observedScrollSinceBecomingResponder = false;
    tmp3Result._becameResponderWhileAnimating = false;
    tmp3Result._preventNegativeScrollOffset = null;
    tmp3Result._animated = null;
    tmp3Result._subscriptionKeyboardWillShow = null;
    tmp3Result._subscriptionKeyboardWillHide = null;
    tmp3Result._subscriptionKeyboardDidShow = null;
    tmp3Result._subscriptionKeyboardDidHide = null;
    tmp3Result.state = { layoutHeight: null };
    tmp3Result.getScrollResponder = () => closure_0;
    tmp3Result.getScrollableNode = () => {
      const obj = closure_2_1(closure_2_4[8]);
      return obj.findNodeHandle(closure_0.getNativeScrollRef());
    };
    tmp3Result.getInnerViewNode = () => {
      const obj = closure_2_1(closure_2_4[8]);
      return obj.findNodeHandle(closure_0._innerView.nativeInstance);
    };
    tmp3Result.getInnerViewRef = () => closure_0._innerView.nativeInstance;
    tmp3Result.getNativeScrollRef = () => closure_0._scrollView.nativeInstance;
    tmp3Result.scrollTo = (num, arg1, arg2) => {
      let animated;
      let x;
      let y;
      if (typeof num === "number") {
        x = arg1;
        animated = arg2;
        const _console = console;
        console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");
        y = num;
      } else if (num) {
        ({ y, x, animated } = num);
      }
      const nativeScrollRef = closure_0.getNativeScrollRef();
      if (null != nativeScrollRef) {
        const scrollTo = closure_2_2(closure_2_4[9]).scrollTo;
        const tmp6 = closure_2_2(closure_2_4[9]);
        if (!x) {
          x = 0;
        }
        if (!y) {
          y = 0;
        }
        scrollTo(nativeScrollRef, x, y, false !== animated);
      }
    };
    tmp3Result.scrollToEnd = (animated) => {
      const tmp = animated && animated.animated;
      const nativeScrollRef = closure_0.getNativeScrollRef();
      if (null != nativeScrollRef) {
        const tmp3 = false !== tmp;
        const obj = closure_2_2(closure_2_4[9]);
        obj.scrollToEnd(nativeScrollRef, tmp3);
      }
    };
    tmp3Result.flashScrollIndicators = () => {
      const nativeScrollRef = closure_0.getNativeScrollRef();
      if (null != nativeScrollRef) {
        const obj = closure_2_2(closure_2_4[9]);
        const result = obj.flashScrollIndicators(nativeScrollRef);
      }
    };
    tmp3Result.scrollResponderScrollNativeHandleToKeyboard = (measureLayout, arg1, _preventNegativeScrollOffset) => {
      const num = arg1 || 0;
      closure_0._additionalScrollOffset = num;
      closure_0._preventNegativeScrollOffset = _preventNegativeScrollOffset;
      if (null != closure_0._innerView.nativeInstance) {
        if (typeof measureLayout === "number") {
          measureLayout = closure_2_2(closure_2_4[10]).measureLayout;
          const tmp4 = closure_2_2(closure_2_4[10]);
          const tmp5 = closure_2_2(closure_2_4[11]);
          const obj = closure_2_1(closure_2_4[8]);
          measureLayout(
            measureLayout,
            tmp5(obj.findNodeHandle(closure_0)),
            closure_0._textInputFocusError,
            closure_0._inputMeasureAndScrollToKeyboard,
          );
        } else {
          measureLayout.measureLayout(
            closure_0._innerView.nativeInstance,
            closure_0._inputMeasureAndScrollToKeyboard,
            closure_0._textInputFocusError,
          );
        }
      }
    };
    tmp3Result.scrollResponderZoomTo = (animated, arg1) => {
      closure_2_2(closure_2_4[12])(false, "zoomToRect is not implemented");
      const tmp = animated;
      if ("animated" in animated) {
        closure_0._animated = animated.animated;
        delete tmp[tmp5];
      } else if (undefined !== arg1) {
        const _console = console;
        console.warn("`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead");
      }
      const nativeScrollRef = closure_0.getNativeScrollRef();
      if (null != nativeScrollRef) {
        const tmp2Result = closure_2_2(closure_2_4[9]);
        tmp2Result.zoomToRect(nativeScrollRef, animated, false !== arg1);
      }
    };
    tmp3Result._inputMeasureAndScrollToKeyboard = (arg0, arg1, arg2, arg3) => {
      const _keyboardMetrics = arg1;
      let closure_1 = arg3;
      const obj = closure_1_2(closure_1_4[13]);
      let screenY = obj.get("window").height;
      function scrollTextInputIntoVisibleRect() {}
      if (null == _keyboardMetrics._keyboardMetrics) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          if (typeof scrollTextInputIntoVisibleRect === "function") {
            if (null != _keyboardMetrics._keyboardMetrics) {
              screenY = _keyboardMetrics._keyboardMetrics.screenY;
            }
            const sum = _keyboardMetrics - screenY + closure_1 + _keyboardMetrics._additionalScrollOffset;
            let bound = sum;
            if (true === _keyboardMetrics._preventNegativeScrollOffset) {
              const _Math = Math;
              bound = Math.max(0, sum);
            }
            const point = { x: 0, y: bound, animated: true };
            _keyboardMetrics.scrollTo(point);
            _keyboardMetrics._additionalScrollOffset = 0;
            _keyboardMetrics._preventNegativeScrollOffset = false;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, 0);
      } else {
        if (null != _keyboardMetrics._keyboardMetrics) {
          screenY = obj2._keyboardMetrics.screenY;
        }
        let sum = arg1 - screenY + arg3 + obj2._additionalScrollOffset;
        let bound = sum;
        if (true === _keyboardMetrics._preventNegativeScrollOffset) {
          let _Math = Math;
          bound = Math.max(0, sum);
        }
        let point = { x: 0, y: bound, animated: true };
        obj2.scrollTo(point);
        _keyboardMetrics._additionalScrollOffset = 0;
        _keyboardMetrics._preventNegativeScrollOffset = false;
      }
    };
    tmp3Result._handleScroll = (arg0) => {
      closure_0._observedScrollSinceBecomingResponder = true;
      if (closure_0.props.onScroll) {
        const props = tmp.props;
        props.onScroll(arg0);
      }
    };
    tmp3Result._handleLayout = (nativeEvent) => {
      if (true === closure_0.props.invertStickyHeaders) {
        const obj2 = { layoutHeight: nativeEvent.nativeEvent.layout.height };
        closure_0.setState(obj2);
      }
      if (closure_0.props.onLayout) {
        const props = closure_0.props;
        props.onLayout(nativeEvent);
      }
    };
    tmp3Result._handleContentOnLayout = (arg0) => {
      if (closure_0.props.onContentSizeChange) {
        const props = closure_0.props;
        props.onContentSizeChange(tmp, tmp2);
      }
    };
    const f134120 = (arg0) => arg0;
    new Map();
    let obj2 = { getForwardingRef: memoizeOneDefault(f81077), nativeInstance: null, publicInstance: null };
    tmp3Result._innerView = obj2;
    const f134121 = (arg0) => {
      const obj = {
        getScrollResponder: f134121.getScrollResponder,
        getScrollableNode: f134121.getScrollableNode,
        getInnerViewNode: f134121.getInnerViewNode,
        getInnerViewRef: f134121.getInnerViewRef,
        getNativeScrollRef: f134121.getNativeScrollRef,
        scrollTo: f134121.scrollTo,
        scrollToEnd: f134121.scrollToEnd,
        flashScrollIndicators: f134121.flashScrollIndicators,
        scrollResponderZoomTo: f134121.scrollResponderZoomTo,
        scrollResponderScrollNativeHandleToKeyboard: f134121.scrollResponderScrollNativeHandleToKeyboard,
      };
      return Object.assign(arg0, obj);
    };
    let obj3 = { getForwardingRef: memoizeOneDefault(f81077), nativeInstance: null, publicInstance: null };
    tmp3Result._scrollView = obj3;
    tmp3Result.scrollResponderKeyboardWillShow = (endCoordinates) => {
      closure_0._keyboardMetrics = endCoordinates.endCoordinates;
      if (closure_0.props.onKeyboardWillShow) {
        const props = closure_0.props;
        props.onKeyboardWillShow(endCoordinates);
      }
    };
    tmp3Result.scrollResponderKeyboardWillHide = (arg0) => {
      closure_0._keyboardMetrics = null;
      if (closure_0.props.onKeyboardWillHide) {
        const props = tmp.props;
        props.onKeyboardWillHide(arg0);
      }
    };
    tmp3Result.scrollResponderKeyboardDidShow = (endCoordinates) => {
      closure_0._keyboardMetrics = endCoordinates.endCoordinates;
      if (closure_0.props.onKeyboardDidShow) {
        const props = closure_0.props;
        props.onKeyboardDidShow(endCoordinates);
      }
    };
    tmp3Result.scrollResponderKeyboardDidHide = (arg0) => {
      closure_0._keyboardMetrics = null;
      if (closure_0.props.onKeyboardDidHide) {
        const props = tmp.props;
        props.onKeyboardDidHide(arg0);
      }
    };
    tmp3Result._handleMomentumScrollBegin = (arg0) => {
      const _performance = ScrollView.performance;
      closure_0._lastMomentumScrollBeginTime = _performance.now();
      if (closure_0.props.onMomentumScrollBegin) {
        const props = closure_0.props;
        const result = props.onMomentumScrollBegin(arg0);
      }
    };
    tmp3Result._handleMomentumScrollEnd = (arg0) => {
      const obj = closure_2_2(closure_2_4[14]);
      obj.endScroll();
      const _performance = ScrollView.performance;
      closure_0._lastMomentumScrollEndTime = _performance.now();
      if (closure_0.props.onMomentumScrollEnd) {
        const props = closure_0.props;
        props.onMomentumScrollEnd(arg0);
      }
    };
    tmp3Result._handleScrollBeginDrag = (arg0) => {
      const obj = closure_2_2(closure_2_4[14]);
      obj.beginScroll();
      if ("on-drag" === closure_0.props.keyboardDismissMode) {
        closure_2_2(closure_2_4[15])();
      }
      if (closure_0.props.onScrollBeginDrag) {
        const props = closure_0.props;
        props.onScrollBeginDrag(arg0);
      }
    };
    tmp3Result._handleScrollEndDrag = (nativeEvent) => {
      const velocity = nativeEvent.nativeEvent.velocity;
      let _isAnimatingResult = closure_0._isAnimating();
      if (!_isAnimatingResult) {
        let tmp3 = velocity;
        if (tmp3) {
          tmp3 = 0 !== velocity.x || 0 !== velocity.y;
        }
        _isAnimatingResult = tmp3;
      }
      if (!_isAnimatingResult) {
        const obj = closure_2_2(closure_2_4[14]);
        obj.endScroll();
      }
      if (closure_0.props.onScrollEndDrag) {
        const props = closure_0.props;
        props.onScrollEndDrag(nativeEvent);
      }
    };
    tmp3Result._isAnimating = () => {
      const _performance = ScrollView.performance;
      const tmp2 =
        _performance.now() - closure_0._lastMomentumScrollEndTime < 16 ||
        closure_0._lastMomentumScrollEndTime < closure_0._lastMomentumScrollBeginTime;
      return tmp2;
    };
    tmp3Result._handleResponderGrant = (arg0) => {
      closure_0._observedScrollSinceBecomingResponder = false;
      if (closure_0.props.onResponderGrant) {
        const props = closure_0.props;
        props.onResponderGrant(arg0);
      }
      closure_0._becameResponderWhileAnimating = closure_0._isAnimating();
    };
    tmp3Result._handleResponderReject = () => {};
    tmp3Result._handleResponderRelease = (nativeEvent) => {
      closure_0._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
      if (closure_0.props.onResponderRelease) {
        const props = closure_0.props;
        props.onResponderRelease(nativeEvent);
      }
      if (typeof nativeEvent.target !== "number") {
        const obj3 = closure_2_2(closure_2_4[16]);
        const result = obj3.currentlyFocusedInput();
        const _becameResponderWhileAnimating =
          null == result ||
          true === closure_0.props.keyboardShouldPersistTaps ||
          "always" === closure_0.props.keyboardShouldPersistTaps ||
          !closure_0._keyboardIsDismissible() ||
          nativeEvent.target === result ||
          closure_0._observedScrollSinceBecomingResponder ||
          closure_0._becameResponderWhileAnimating;
        if (!_becameResponderWhileAnimating) {
          const tmp3Result = closure_2_2(closure_2_4[16]);
          tmp3Result.blurTextInput(result);
        }
      }
    };
    tmp3Result._handleResponderTerminationRequest = () => !closure_0._observedScrollSinceBecomingResponder;
    tmp3Result._handleScrollShouldSetResponder = () =>
      true !== closure_0.props.disableScrollViewPanResponder && closure_0._isTouching;
    tmp3Result._handleStartShouldSetResponder = (target) => {
      if (true === closure_0.props.disableScrollViewPanResponder) {
        return false;
      } else {
        let tmp4 = "handled" !== closure_0.props.keyboardShouldPersistTaps;
        const obj2 = closure_2_2(closure_2_4[16]);
        const result = obj2.currentlyFocusedInput();
        if (!tmp4) {
          tmp4 = !closure_0._keyboardIsDismissible();
        }
        if (!tmp4) {
          tmp4 = target.target === result;
        }
        return !tmp4;
      }
    };
    tmp3Result._handleStartShouldSetResponderCapture = (target) => {
      if (closure_0._isAnimating()) {
        return true;
      } else if (true === closure_0.props.disableScrollViewPanResponder) {
        return false;
      } else {
        const keyboardShouldPersistTaps = closure_0.props.keyboardShouldPersistTaps;
        let tmp = !keyboardShouldPersistTaps;
        if (keyboardShouldPersistTaps) {
          tmp = "never" === keyboardShouldPersistTaps;
        }
        target = target.target;
        let tmp3 = typeof target !== "number";
        if (typeof target !== "number") {
          const result = closure_0._softKeyboardIsDetached();
          let tmp8 = !result;
          if (tmp8) {
            let isTextInputResult = !tmp;
            if (tmp) {
              isTextInputResult = !closure_0._keyboardIsDismissible();
            }
            if (!isTextInputResult) {
              isTextInputResult = null == target.target;
            }
            if (!isTextInputResult) {
              const obj2 = closure_2_2(closure_2_4[16]);
              isTextInputResult = obj2.isTextInput(target.target);
            }
            tmp8 = !isTextInputResult;
          }
          tmp3 = tmp8;
        }
        return tmp3;
      }
    };
    tmp3Result._keyboardIsDismissible = () => {
      const obj = closure_2_2(closure_2_4[16]);
      const result = obj.currentlyFocusedInput();
      let isTextInputResult = null != result;
      if (isTextInputResult) {
        const tmpResult = closure_2_2(closure_2_4[16]);
        isTextInputResult = tmpResult.isTextInput(result);
      }
      const tmp5 = null != closure_0._keyboardMetrics || closure_0._keyboardEventsAreUnreliable();
      if (isTextInputResult) {
        isTextInputResult = tmp5;
      }
      return isTextInputResult;
    };
    tmp3Result._softKeyboardIsDetached = () =>
      null != closure_0._keyboardMetrics && 0 === closure_0._keyboardMetrics.height;
    tmp3Result._keyboardEventsAreUnreliable = () => closure_1_2(closure_1_4[17]).Version < 30;
    tmp3Result._handleTouchEnd = (nativeEvent) => {
      closure_0._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
      const keyboardShouldPersistTaps = closure_0.props.keyboardShouldPersistTaps;
      let tmp = !keyboardShouldPersistTaps;
      if (keyboardShouldPersistTaps) {
        tmp = "never" === keyboardShouldPersistTaps;
      }
      const obj2 = closure_2_2(closure_2_4[16]);
      const result = obj2.currentlyFocusedInput();
      const tmp5 =
        null != result &&
        nativeEvent.target !== result &&
        closure_0._softKeyboardIsDetached() &&
        closure_0._keyboardIsDismissible() &&
        tmp;
      if (tmp5) {
        const tmp2Result = closure_2_2(closure_2_4[16]);
        tmp2Result.blurTextInput(result);
      }
      if (closure_0.props.onTouchEnd) {
        const props = closure_0.props;
        props.onTouchEnd(nativeEvent);
      }
    };
    tmp3Result._handleTouchCancel = (arg0) => {
      closure_0._isTouching = false;
      if (closure_0.props.onTouchCancel) {
        const props = tmp.props;
        props.onTouchCancel(arg0);
      }
    };
    tmp3Result._handleTouchStart = (arg0) => {
      closure_0._isTouching = true;
      if (closure_0.props.onTouchStart) {
        const props = tmp.props;
        props.onTouchStart(arg0);
      }
    };
    tmp3Result._handleTouchMove = (arg0) => {
      if (closure_0.props.onTouchMove) {
        const props = tmp.props;
        props.onTouchMove(arg0);
      }
    };
    const contentOffset = tmp3Result.props.contentOffset;
    let num;
    const Value = _modDef354.Value;
    if (contentOffset != null) {
      num = contentOffset.y;
    }
    if (num == null) {
      num = 0;
    }
    const value = new Value(num);
    tmp3Result._scrollAnimatedValue = value;
    const _scrollAnimatedValue = tmp3Result._scrollAnimatedValue;
    const contentInset = tmp3Result.props.contentInset;
    let num2;
    const setOffset = _scrollAnimatedValue.setOffset;
    if (contentInset != null) {
      num2 = contentInset.top;
    }
    if (num2 == null) {
      num2 = 0;
    }
    setOffset(num2);
    return tmp3Result;
  }
}
_inherits(ScrollView, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    if (typeof this.props.keyboardShouldPersistTaps === "boolean") {
      let str = "false";
      const _console = console;
      if (true === self.props.keyboardShouldPersistTaps) {
        str = "true";
      }
      let str2 = "never";
      if (self.props.keyboardShouldPersistTaps) {
        str2 = "always";
      }
      const _HermesInternal = HermesInternal;
      warn(
        "'keyboardShouldPersistTaps={" +
          str +
          "}' is deprecated. Use 'keyboardShouldPersistTaps=\"" +
          str2 +
          "\"' instead",
      );
    }
    const obj = _modDef343;
    self._keyboardMetrics = obj.metrics();
    self._additionalScrollOffset = 0;
    const obj2 = _modDef343;
    self._subscriptionKeyboardWillShow = obj2.addListener("keyboardWillShow", self.scrollResponderKeyboardWillShow);
    const obj3 = _modDef343;
    self._subscriptionKeyboardWillHide = obj3.addListener("keyboardWillHide", self.scrollResponderKeyboardWillHide);
    const obj4 = _modDef343;
    self._subscriptionKeyboardDidShow = obj4.addListener("keyboardDidShow", self.scrollResponderKeyboardDidShow);
    const obj5 = _modDef343;
    self._subscriptionKeyboardDidHide = obj5.addListener("keyboardDidHide", self.scrollResponderKeyboardDidHide);
    const result = self._updateAnimatedNodeAttachment();
  },
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(contentInset) {
      let num = 0;
      if (contentInset.contentInset) {
        num = contentInset.contentInset.top;
      }
      const self = this;
      let num2 = 0;
      if (this.props.contentInset) {
        num2 = self.props.contentInset.top;
      }
      if (num !== num2) {
        const _scrollAnimatedValue = self._scrollAnimatedValue;
        const setOffset = _scrollAnimatedValue.setOffset;
        if (!num2) {
          num2 = 0;
        }
        setOffset(num2);
      }
      const result = self._updateAnimatedNodeAttachment();
    },
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (null != this._subscriptionKeyboardWillShow) {
        const _subscriptionKeyboardWillShow = self._subscriptionKeyboardWillShow;
        _subscriptionKeyboardWillShow.remove();
      }
      if (null != self._subscriptionKeyboardWillHide) {
        const _subscriptionKeyboardWillHide = self._subscriptionKeyboardWillHide;
        _subscriptionKeyboardWillHide.remove();
      }
      if (null != self._subscriptionKeyboardDidShow) {
        const _subscriptionKeyboardDidShow = self._subscriptionKeyboardDidShow;
        _subscriptionKeyboardDidShow.remove();
      }
      if (null != self._subscriptionKeyboardDidHide) {
        const _subscriptionKeyboardDidHide = self._subscriptionKeyboardDidHide;
        _subscriptionKeyboardDidHide.remove();
      }
      if (self._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
    },
  },
  {
    key: "_textInputFocusError",
    value: function _textInputFocusError() {
      console.warn("Error measuring text field.");
    },
  },
  {
    key: "_getKeyForIndex",
    value: function _getKeyForIndex(key, toArrayResult) {
      return toArrayResult[key] && toArrayResult[key].key;
    },
  },
  {
    key: "_updateAnimatedNodeAttachment",
    value: function _updateAnimatedNodeAttachment() {
      let obj3;
      let obj4;
      const self = this;
      if (this._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
      const stickyHeaderIndices = self.props.stickyHeaderIndices && self.props.stickyHeaderIndices.length > 0;
      if (stickyHeaderIndices) {
        const obj2 = { nativeEvent: obj3 };
        obj3 = { contentOffset: obj4 };
        const items = [obj2];
        obj4 = { y: self._scrollAnimatedValue };
        const obj = _modDef354;
        self._scrollAnimatedValueAttachment = obj.attachNativeEvent(self.getNativeScrollRef(), "onScroll", items);
      }
    },
  },
  {
    key: "_setStickyHeaderRef",
    value: function _setStickyHeaderRef(key, arg1) {
      const _stickyHeaderRefs = this._stickyHeaderRefs;
      if (arg1) {
        const result = _stickyHeaderRefs.set(key, arg1);
      } else {
        _stickyHeaderRefs.delete(key);
      }
    },
  },
  {
    key: "_onStickyHeaderLayout",
    value: function _onStickyHeaderLayout(key, nativeEvent, key2) {
      const self = this;
      const stickyHeaderIndices = this.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        const Children = react.Children;
        const toArrayResult = Children.toArray(self.props.children);
        if (key === self._getKeyForIndex(key, toArrayResult)) {
          const y = nativeEvent.nativeEvent.layout.y;
          const _headerLayoutYs = self._headerLayoutYs;
          const result = _headerLayoutYs.set(key, y);
          const tmp7 = stickyHeaderIndices[stickyHeaderIndices.indexOf(stickyHeaderIndices, key) - 1];
          if (null != tmp7) {
            const _stickyHeaderRefs = self._stickyHeaderRefs;
            const value = _stickyHeaderRefs.get(self._getKeyForIndex(tmp7, toArrayResult));
            const tmp9 = value && value.setNextHeaderY;
            if (tmp9) {
              value.setNextHeaderY(y);
            }
          }
        }
      }
    },
  },
  {
    key: "render",
    value: function render() {
      let VScrollContentViewNativeComponent;
      let VScrollViewNativeComponent;
      let _innerView;
      let alwaysBounceVertical;
      let experimental_endDraggingSensitivityMultiplier;
      let flag;
      let horizontal;
      let inner;
      let num3;
      let outer;
      let prop;
      let tmp12Result;
      let tmp12Result5;
      let tmp12Result6;
      let tmp16;
      let tmp22;
      let tmp4;
      const self = this;
      if (true === this.props.horizontal) {
        VScrollViewNativeComponent = tmp2(391).HScrollViewNativeComponent;
        tmp4 = tmp2;
      } else {
        VScrollViewNativeComponent = tmp2(394).VScrollViewNativeComponent;
        tmp4 = tmp2;
      }
      if (true === this.props.horizontal) {
        VScrollContentViewNativeComponent = tmp4(391).HScrollContentViewNativeComponent;
      } else {
        VScrollContentViewNativeComponent = tmp4(394).VScrollContentViewNativeComponent;
      }
      const contentContainerHorizontal = tmp && closure_15.contentContainerHorizontal;
      const items = [contentContainerHorizontal, self.props.contentContainerStyle];
      let tmp7 = null;
      if (null != self.props.onContentSizeChange) {
        tmp7 = { onLayout: self._handleContentOnLayout };
        const obj = { onLayout: self._handleContentOnLayout };
      }
      const stickyHeaderIndices = self.props.stickyHeaderIndices;
      const children = self.props.children;
      const Children = react.Children;
      const toArrayResult = Children.toArray(children);
      let closure_0 = toArrayResult;
      let tmp8 = null != stickyHeaderIndices;
      if (tmp8) {
        let num = 0;
        tmp8 = stickyHeaderIndices.length > 0;
      }
      let tmp9 = toArrayResult;
      if (tmp8) {
        const mapped = toArrayResult.map((key, index) => {
          let _headerLayoutYs;
          closure_0 = index;
          let num = -1;
          if (key) {
            num = key.indexOf(index);
          }
          if (num > -1) {
            key = key.key;
            let StickyHeaderComponent = self.props.StickyHeaderComponent;
            const tmp3 = key[num + 1];
            if (!StickyHeaderComponent) {
              StickyHeaderComponent = self(dependencyMap[22]);
            }
            const obj2 = {
              ref(arg0) {
                return self._setStickyHeaderRef(key, arg0);
              },
              nextHeaderLayoutY: _headerLayoutYs.get(self._getKeyForIndex(tmp3, closure_0)),
              onLayout(nativeEvent) {
                return self._onStickyHeaderLayout(index, nativeEvent, key);
              },
              scrollAnimatedValue: self._scrollAnimatedValue,
              inverted: self.props.invertStickyHeaders,
              hiddenOnScroll: self.props.stickyHeaderHiddenOnScroll,
              scrollViewHeight: self.state.layoutHeight,
              children: key,
            };
            _headerLayoutYs = self._headerLayoutYs;
            return closure_1_12(StickyHeaderComponent, obj2, key);
          } else {
            return key;
          }
        });
        closure_0 = mapped;
        tmp9 = mapped;
      }
      const Provider = self(409).Provider;
      const tmp4Result = tmp4(409);
      let obj2 = { value: tmp ? tmp4Result.HORIZONTAL : tmp4Result.VERTICAL, children: tmp9 };
      const tmp11Result = closure_12(Provider, obj2);
      closure_0 = tmp11Result;
      let isArray = Array.isArray(stickyHeaderIndices);
      if (isArray) {
        isArray = stickyHeaderIndices.length > 0;
      }
      const obj3 = {
        ref: _innerView.getForwardingRef(self.props.innerViewRef),
        style: items,
        removeClippedSubviews: !isArray && self.props.removeClippedSubviews,
        collapsable: false,
        collapsableChildren: !tmp16,
        children: tmp11Result,
      };
      tmp16 = null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment;
      const merged = Object.assign(tmp7);
      _innerView = self._innerView;
      const tmp11Result2 = closure_12(VScrollContentViewNativeComponent, obj3);
      if (undefined !== self.props.alwaysBounceHorizontal) {
        horizontal = self.props.alwaysBounceHorizontal;
      } else {
        horizontal = self.props.horizontal;
      }
      if (undefined !== self.props.alwaysBounceVertical) {
        alwaysBounceVertical = self.props.alwaysBounceVertical;
      } else {
        alwaysBounceVertical = !self.props.horizontal;
      }
      const tmp20 = true === this.props.horizontal ? closure_15.baseHorizontal : closure_15.baseVertical;
      const props = self.props;
      const obj5 = {
        alwaysBounceHorizontal: horizontal,
        alwaysBounceVertical,
        style: tmp12Result.compose(tmp20, self.props.style),
        onContentSizeChange: null,
        endDraggingSensitivityMultiplier: experimental_endDraggingSensitivityMultiplier,
        scrollEventThrottle: num3,
        sendMomentumEvents: !tmp22,
        snapToStart: false !== self.props.snapToStart,
        snapToEnd: false !== self.props.snapToEnd,
        pagingEnabled:
          true === self.props.pagingEnabled || null != self.props.snapToInterval || null != self.props.snapToOffsets,
        maintainVisibleContentPosition: prop,
      };
      experimental_endDraggingSensitivityMultiplier = props.experimental_endDraggingSensitivityMultiplier;
      const merged1 = Object.assign(_objectWithoutProperties(props, closure_5));
      ({
        _handleLayout: obj4.onLayout,
        _handleMomentumScrollBegin: obj4.onMomentumScrollBegin,
        _handleMomentumScrollEnd: obj4.onMomentumScrollEnd,
        _handleResponderGrant: obj4.onResponderGrant,
        _handleResponderReject: obj4.onResponderReject,
        _handleResponderRelease: obj4.onResponderRelease,
        _handleResponderTerminationRequest: obj4.onResponderTerminationRequest,
        _handleScrollBeginDrag: obj4.onScrollBeginDrag,
        _handleScrollEndDrag: obj4.onScrollEndDrag,
        _handleScrollShouldSetResponder: obj4.onScrollShouldSetResponder,
        _handleStartShouldSetResponder: obj4.onStartShouldSetResponder,
        _handleStartShouldSetResponderCapture: obj4.onStartShouldSetResponderCapture,
        _handleTouchEnd: obj4.onTouchEnd,
        _handleTouchMove: obj4.onTouchMove,
        _handleTouchStart: obj4.onTouchStart,
        _handleTouchCancel: obj4.onTouchCancel,
        _handleScroll: obj4.onScroll,
      } = self);
      num3 = 1;
      tmp12Result = self(254);
      if (!isArray) {
        num3 = self.props.scrollEventThrottle;
      }
      prop = undefined;
      tmp22 = !self.props.onMomentumScrollBegin && !self.props.onMomentumScrollEnd;
      const obj6 = javaScriptFlagGetterAll;
      if (!obj6.disableMaintainVisibleContentPosition()) {
        prop = self.props.maintainVisibleContentPosition;
      }
      const decelerationRate = self.props.decelerationRate;
      if (null != decelerationRate) {
        obj5.decelerationRate = self(410)(decelerationRate);
      }
      const refreshControl = self.props.refreshControl;
      const _scrollView = self._scrollView;
      const forwardingRef = _scrollView.getForwardingRef(self.props.scrollViewRef);
      if (null != refreshControl) {
        const tmp12Result4 = self(403);
        const obj7 = { style: tmp12Result5.compose(tmp20, outer) };
        ({ outer, inner } = tmp12Result4(self(148)(obj5.style)));
        tmp12Result4(self(148)(obj5.style));
        tmp12Result5 = self(254);
        const obj8 = {
          nestedScrollEnabled: flag,
          style: tmp12Result6.compose(tmp20, inner),
          ref: forwardingRef,
          children: tmp11Result2,
        };
        const merged2 = Object.assign(obj5);
        flag = obj5.nestedScrollEnabled;
        if (flag == null) {
          flag = true;
        }
        tmp12Result6 = self(254);
        return cloneElement(refreshControl, obj7, closure_12(VScrollViewNativeComponent, obj8));
      } else {
        const obj9 = { ref: forwardingRef, children: tmp11Result2 };
        const merged3 = Object.assign(obj5);
        return closure_12(VScrollViewNativeComponent, obj9);
      }
    },
  },
];
const importDefaultResultResult = _createClass(ScrollView, items);
importDefaultResultResult.Context = reactDefault;
let closure_15 = get_hairlineWidth.create({
  baseVertical: { flexGrow: 1, flexShrink: 1, flexDirection: "column", overflow: "scroll" },
  baseHorizontal: { flexGrow: 1, flexShrink: 1, flexDirection: "row", overflow: "scroll" },
  contentContainerHorizontal: { flexDirection: "row" },
});
class Wrapper {
  constructor(ref) {
    let obj;
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    if (null == ref.ref) {
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj = obj2;
    } else {
      obj = { scrollViewRef: ref.ref };
      const merged2 = Object.assign(merged);
    }
    return closure_12(importDefaultResultResult, obj);
  }
}
Wrapper.displayName = "ScrollView";
Wrapper.Context = reactDefault;

export default Wrapper;
