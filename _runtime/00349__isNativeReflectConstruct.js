// _runtime/00349__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "KeyboardImpl";
import { cloneElement } from "KeyboardImpl";
import jsxProd from "VScrollViewNativeComponent";
import importDefaultResult1 from "_inherits";

let closure_12;
let jsxs;
const ScrollView = global;
const require = arg1;
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
let closure_5 = ["experimental_endDraggingSensitivityMultiplier", "maintainVisibleContentPosition"];
let c10 = importAllResult;
({ jsx: closure_12, jsxs } = jsxProd);
class ScrollView {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, f101660);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(f101660);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    f101660 = tmp3Result;
    tmp3Result._scrollAnimatedValueAttachment = null;
    map = new Map();
    tmp3Result._stickyHeaderRefs = map;
    map1 = new Map();
    tmp3Result._headerLayoutYs = map1;
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
    tmp3Result.getScrollResponder = () => f101660;
    tmp3Result.getScrollableNode = () => {
      obj = obj(outer1_4[8]);
      return obj.findNodeHandle(f101660.getNativeScrollRef());
    };
    tmp3Result.getInnerViewNode = () => {
      obj = obj(outer1_4[8]);
      return obj.findNodeHandle(f101660._innerView.nativeInstance);
    };
    tmp3Result.getInnerViewRef = () => f101660._innerView.nativeInstance;
    tmp3Result.getNativeScrollRef = () => f101660._scrollView.nativeInstance;
    tmp3Result.scrollTo = (num) => {
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
      const nativeScrollRef = f101660.getNativeScrollRef();
      if (null != nativeScrollRef) {
        const obj = outer1_2(outer1_4[9]);
        if (!x) {
          x = 0;
        }
        if (!y) {
          y = 0;
        }
        obj.scrollTo(nativeScrollRef, x, y, false !== animated);
      }
    };
    tmp3Result.scrollToEnd = (animated) => {
      if (animated) {
        animated = animated.animated;
      }
      const nativeScrollRef = f101660.getNativeScrollRef();
      if (null != nativeScrollRef) {
        outer1_2(outer1_4[9]).scrollToEnd(nativeScrollRef, false !== animated);
        const obj = outer1_2(outer1_4[9]);
        const tmp2 = false !== animated;
      }
    };
    tmp3Result.flashScrollIndicators = () => {
      const nativeScrollRef = f101660.getNativeScrollRef();
      if (null != nativeScrollRef) {
        const result = outer1_2(outer1_4[9]).flashScrollIndicators(nativeScrollRef);
        const obj = outer1_2(outer1_4[9]);
      }
    };
    tmp3Result.scrollResponderScrollNativeHandleToKeyboard = (num, arg1, _preventNegativeScrollOffset) => {
      num = arg1;
      if (!arg1) {
        num = 0;
      }
      f101660._additionalScrollOffset = num;
      f101660._preventNegativeScrollOffset = _preventNegativeScrollOffset;
      if (null != f101660._innerView.nativeInstance) {
        if (typeof num === "number") {
          const obj = outer1_2(outer1_4[10]);
          const tmp4 = outer1_2(outer1_4[11]);
          obj.measureLayout(num, tmp4(obj(outer1_4[8]).findNodeHandle(tmp)), tmp._textInputFocusError, tmp._inputMeasureAndScrollToKeyboard);
          const obj2 = obj(outer1_4[8]);
        } else {
          num.measureLayout(tmp._innerView.nativeInstance, tmp._inputMeasureAndScrollToKeyboard, tmp._textInputFocusError);
        }
      }
    };
    tmp3Result.scrollResponderZoomTo = (animated) => {
      outer1_2(outer1_4[12])(false, "zoomToRect is not implemented");
      if ("animated" in animated) {
        f101660._animated = animated.animated;
        delete tmp[tmp2];
      } else if (undefined !== arg1) {
        const _console = console;
        console.warn("`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead");
      }
      const nativeScrollRef = f101660.getNativeScrollRef();
      if (null != nativeScrollRef) {
        outer1_2(outer1_4[9]).zoomToRect(nativeScrollRef, animated, false !== arg1);
        const tmp3Result = outer1_2(outer1_4[9]);
      }
    };
    tmp3Result._inputMeasureAndScrollToKeyboard = (arg0, arg1, arg2, arg3) => {
      const _keyboardMetrics = arg1;
      let closure_1 = arg3;
      let obj = outer1_2(outer1_4[13]);
      let screenY = obj.get("window").height;
      function scrollTextInputIntoVisibleRect() {

      }
      if (null == _keyboardMetrics._keyboardMetrics) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          if (typeof scrollTextInputIntoVisibleRect !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (null != _keyboardMetrics._keyboardMetrics) {
            const screenY = obj._keyboardMetrics.screenY;
          }
          const sum = _keyboardMetrics - screenY + closure_1 + obj._additionalScrollOffset;
          let bound = sum;
          if (true === _keyboardMetrics._preventNegativeScrollOffset) {
            const _Math = Math;
            bound = Math.max(0, sum);
          }
          _keyboardMetrics.scrollTo({ x: 0, y: bound, animated: true });
          _keyboardMetrics._additionalScrollOffset = 0;
          _keyboardMetrics._preventNegativeScrollOffset = false;
        }, 0);
      } else {
        if (null != obj2._keyboardMetrics) {
          screenY = obj2._keyboardMetrics.screenY;
        }
        let sum = arg1 - screenY + arg3 + obj2._additionalScrollOffset;
        let bound = sum;
        if (true === obj2._preventNegativeScrollOffset) {
          let _Math = Math;
          bound = Math.max(0, sum);
        }
        obj = { x: 0, y: null, animated: true };
        obj[1] = bound;
        obj2.scrollTo(obj);
        obj2._additionalScrollOffset = 0;
        obj2._preventNegativeScrollOffset = false;
      }
    };
    tmp3Result._handleScroll = (arg0) => {
      f101660._observedScrollSinceBecomingResponder = true;
      if (f101660.props.onScroll) {
        const props = tmp.props;
        props.onScroll(arg0);
      }
    };
    tmp3Result._handleLayout = (nativeEvent) => {
      let obj = f101660;
      if (true === f101660.props.invertStickyHeaders) {
        obj = { layoutHeight: null };
        obj[0] = nativeEvent.nativeEvent.layout.height;
        obj.setState(obj);
      }
      if (obj.props.onLayout) {
        const props = obj.props;
        props.onLayout(nativeEvent);
      }
    };
    tmp3Result._handleContentOnLayout = (arg0) => {
      if (f101660.props.onContentSizeChange) {
        const props = f101660.props;
        props.onContentSizeChange(tmp, tmp2);
      }
    };
    f101660 = (arg0) => arg0;
    f101660 = undefined;
    obj = {
      getForwardingRef: require("areInputsEqual")((arg0) => {
            let closure_0 = arg0;
            return (nativeInstance) => {
              let tmp = null;
              if (null != nativeInstance) {
                tmp = callback(nativeInstance);
              }
              outer1_1.nativeInstance = nativeInstance;
              outer1_1.publicInstance = tmp;
              if (null != callback) {
                if (typeof tmp3 === "function") {
                  tmp3(tmp);
                } else {
                  tmp3.current = tmp;
                }
              }
            };
          }),
      nativeInstance: null,
      publicInstance: null
    };
    f101660 = obj;
    tmp3Result._innerView = obj;
    f101660 = (arg0) => Object.assign(arg0, { getScrollResponder: f101660.getScrollResponder, getScrollableNode: f101660.getScrollableNode, getInnerViewNode: f101660.getInnerViewNode, getInnerViewRef: f101660.getInnerViewRef, getNativeScrollRef: f101660.getNativeScrollRef, scrollTo: f101660.scrollTo, scrollToEnd: f101660.scrollToEnd, flashScrollIndicators: f101660.flashScrollIndicators, scrollResponderZoomTo: f101660.scrollResponderZoomTo, scrollResponderScrollNativeHandleToKeyboard: f101660.scrollResponderScrollNativeHandleToKeyboard });
    f101660 = undefined;
    obj1 = {
      getForwardingRef: require("areInputsEqual")((arg0) => {
            let closure_0 = arg0;
            return (nativeInstance) => {
              let tmp = null;
              if (null != nativeInstance) {
                tmp = callback(nativeInstance);
              }
              outer1_1.nativeInstance = nativeInstance;
              outer1_1.publicInstance = tmp;
              if (null != callback) {
                if (typeof tmp3 === "function") {
                  tmp3(tmp);
                } else {
                  tmp3.current = tmp;
                }
              }
            };
          }),
      nativeInstance: null,
      publicInstance: null
    };
    f101660 = obj1;
    tmp3Result._scrollView = obj1;
    tmp3Result.scrollResponderKeyboardWillShow = (endCoordinates) => {
      f101660._keyboardMetrics = endCoordinates.endCoordinates;
      if (f101660.props.onKeyboardWillShow) {
        const props = f101660.props;
        props.onKeyboardWillShow(endCoordinates);
      }
    };
    tmp3Result.scrollResponderKeyboardWillHide = (arg0) => {
      f101660._keyboardMetrics = null;
      if (f101660.props.onKeyboardWillHide) {
        const props = tmp.props;
        props.onKeyboardWillHide(arg0);
      }
    };
    tmp3Result.scrollResponderKeyboardDidShow = (endCoordinates) => {
      f101660._keyboardMetrics = endCoordinates.endCoordinates;
      if (f101660.props.onKeyboardDidShow) {
        const props = f101660.props;
        props.onKeyboardDidShow(endCoordinates);
      }
    };
    tmp3Result.scrollResponderKeyboardDidHide = (arg0) => {
      f101660._keyboardMetrics = null;
      if (f101660.props.onKeyboardDidHide) {
        const props = tmp.props;
        props.onKeyboardDidHide(arg0);
      }
    };
    tmp3Result._handleMomentumScrollBegin = (arg0) => {
      const _performance = f101660.performance;
      f101660._lastMomentumScrollBeginTime = _performance.now();
      if (f101660.props.onMomentumScrollBegin) {
        const props = f101660.props;
        const result = props.onMomentumScrollBegin(arg0);
      }
    };
    tmp3Result._handleMomentumScrollEnd = (arg0) => {
      outer1_2(outer1_4[14]).endScroll();
      const _performance = f101660.performance;
      f101660._lastMomentumScrollEndTime = _performance.now();
      if (f101660.props.onMomentumScrollEnd) {
        const props = f101660.props;
        props.onMomentumScrollEnd(arg0);
      }
    };
    tmp3Result._handleScrollBeginDrag = (arg0) => {
      outer1_2(outer1_4[14]).beginScroll();
      if ("on-drag" === f101660.props.keyboardDismissMode) {
        outer1_2(outer1_4[15])();
      }
      if (f101660.props.onScrollBeginDrag) {
        const props = tmp4.props;
        props.onScrollBeginDrag(arg0);
      }
    };
    tmp3Result._handleScrollEndDrag = (nativeEvent) => {
      const velocity = nativeEvent.nativeEvent.velocity;
      let _isAnimatingResult = f101660._isAnimating();
      if (!_isAnimatingResult) {
        let tmp3 = velocity;
        if (velocity) {
          tmp3 = 0 !== velocity.x || 0 !== velocity.y;
          const tmp4 = 0 !== velocity.x || 0 !== velocity.y;
        }
        _isAnimatingResult = tmp3;
      }
      if (!_isAnimatingResult) {
        outer1_2(outer1_4[14]).endScroll();
        const obj = outer1_2(outer1_4[14]);
      }
      if (f101660.props.onScrollEndDrag) {
        const props = tmp.props;
        props.onScrollEndDrag(nativeEvent);
      }
    };
    tmp3Result._isAnimating = () => {
      const _performance = f101660.performance;
      return _performance.now() - f101660._lastMomentumScrollEndTime < 16 || f101660._lastMomentumScrollEndTime < f101660._lastMomentumScrollBeginTime;
    };
    tmp3Result._handleResponderGrant = (arg0) => {
      f101660._observedScrollSinceBecomingResponder = false;
      if (f101660.props.onResponderGrant) {
        const props = obj.props;
        props.onResponderGrant(arg0);
      }
      f101660._becameResponderWhileAnimating = f101660._isAnimating();
    };
    tmp3Result._handleResponderReject = () => {

    };
    tmp3Result._handleResponderRelease = (nativeEvent) => {
      f101660._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
      if (f101660.props.onResponderRelease) {
        const props = obj.props;
        props.onResponderRelease(nativeEvent);
      }
      if (typeof nativeEvent.target !== "number") {
        const result = outer1_2(outer1_4[16]).currentlyFocusedInput();
        let _becameResponderWhileAnimating = null == result;
        if (!_becameResponderWhileAnimating) {
          _becameResponderWhileAnimating = true === obj.props.keyboardShouldPersistTaps;
        }
        if (!_becameResponderWhileAnimating) {
          _becameResponderWhileAnimating = "always" === obj.props.keyboardShouldPersistTaps;
        }
        if (!_becameResponderWhileAnimating) {
          _becameResponderWhileAnimating = !obj._keyboardIsDismissible();
        }
        if (!_becameResponderWhileAnimating) {
          _becameResponderWhileAnimating = nativeEvent.target === result;
        }
        if (!_becameResponderWhileAnimating) {
          _becameResponderWhileAnimating = obj._observedScrollSinceBecomingResponder;
        }
        if (!_becameResponderWhileAnimating) {
          _becameResponderWhileAnimating = obj._becameResponderWhileAnimating;
        }
        if (!_becameResponderWhileAnimating) {
          tmp3(tmp4[16]).blurTextInput(result);
          const tmp3Result = tmp3(tmp4[16]);
        }
        const obj3 = outer1_2(outer1_4[16]);
        tmp3 = outer1_2;
        tmp4 = outer1_4;
      }
    };
    tmp3Result._handleResponderTerminationRequest = () => !f101660._observedScrollSinceBecomingResponder;
    tmp3Result._handleScrollShouldSetResponder = () => true !== f101660.props.disableScrollViewPanResponder && f101660._isTouching;
    tmp3Result._handleStartShouldSetResponder = (target) => {
      if (true === f101660.props.disableScrollViewPanResponder) {
        return false;
      } else {
        let tmp4 = "handled" !== obj.props.keyboardShouldPersistTaps;
        const result = outer1_2(outer1_4[16]).currentlyFocusedInput();
        if (!tmp4) {
          tmp4 = !obj._keyboardIsDismissible();
        }
        if (!tmp4) {
          tmp4 = target.target === result;
        }
        return !tmp4;
      }
    };
    tmp3Result._handleStartShouldSetResponderCapture = (target) => {
      if (f101660._isAnimating()) {
        return true;
      } else if (true === obj.props.disableScrollViewPanResponder) {
        return false;
      } else {
        const keyboardShouldPersistTaps = obj.props.keyboardShouldPersistTaps;
        let tmp = !keyboardShouldPersistTaps;
        if (keyboardShouldPersistTaps) {
          tmp = "never" === keyboardShouldPersistTaps;
        }
        target = target.target;
        let tmp3 = typeof target !== "number";
        if (typeof target !== "number") {
          const result = obj._softKeyboardIsDetached();
          let tmp8 = !result;
          if (!result) {
            let isTextInputResult = !tmp;
            if (tmp) {
              isTextInputResult = !obj._keyboardIsDismissible();
            }
            if (!isTextInputResult) {
              isTextInputResult = null == target.target;
            }
            if (!isTextInputResult) {
              isTextInputResult = outer1_2(outer1_4[16]).isTextInput(target.target);
              const obj2 = outer1_2(outer1_4[16]);
            }
            tmp8 = !isTextInputResult;
          }
          tmp3 = tmp8;
        }
        return tmp3;
      }
    };
    tmp3Result._keyboardIsDismissible = () => {
      const result = outer1_2(outer1_4[16]).currentlyFocusedInput();
      let isTextInputResult = null != result;
      if (isTextInputResult) {
        isTextInputResult = tmp(tmp2[16]).isTextInput(result);
        const tmpResult = tmp(tmp2[16]);
      }
      const obj = outer1_2(outer1_4[16]);
      const obj3 = f101660;
      tmp = outer1_2;
      tmp2 = outer1_4;
      if (isTextInputResult) {
        isTextInputResult = tmp5;
      }
      return isTextInputResult;
    };
    tmp3Result._softKeyboardIsDetached = () => {
      let tmp = null != f101660._keyboardMetrics;
      if (tmp) {
        tmp = 0 === f101660._keyboardMetrics.height;
      }
      return tmp;
    };
    tmp3Result._keyboardEventsAreUnreliable = () => callback(table[17]).Version < 30;
    tmp3Result._handleTouchEnd = (nativeEvent) => {
      f101660._isTouching = 0 !== nativeEvent.nativeEvent.touches.length;
      const keyboardShouldPersistTaps = f101660.props.keyboardShouldPersistTaps;
      let tmp = !keyboardShouldPersistTaps;
      if (keyboardShouldPersistTaps) {
        tmp = "never" === keyboardShouldPersistTaps;
      }
      const result = outer1_2(outer1_4[16]).currentlyFocusedInput();
      const obj2 = outer1_2(outer1_4[16]);
      const tmp2 = outer1_2;
      const tmp3 = outer1_4;
      if (tmp5) {
        tmp2(tmp3[16]).blurTextInput(result);
        const tmp2Result = tmp2(tmp3[16]);
      }
      if (f101660.props.onTouchEnd) {
        const props = obj.props;
        props.onTouchEnd(nativeEvent);
      }
    };
    tmp3Result._handleTouchCancel = (arg0) => {
      f101660._isTouching = false;
      if (f101660.props.onTouchCancel) {
        const props = tmp.props;
        props.onTouchCancel(arg0);
      }
    };
    tmp3Result._handleTouchStart = (arg0) => {
      f101660._isTouching = true;
      if (f101660.props.onTouchStart) {
        const props = tmp.props;
        props.onTouchStart(arg0);
      }
    };
    tmp3Result._handleTouchMove = (arg0) => {
      if (f101660.props.onTouchMove) {
        const props = tmp.props;
        props.onTouchMove(arg0);
      }
    };
    contentOffset = tmp3Result.props.contentOffset;
    num = undefined;
    if (contentOffset != null) {
      num = contentOffset.y;
    }
    if (num == null) {
      num = 0;
    }
    value = new require("_combineCallbacks").Value(num);
    tmp3Result._scrollAnimatedValue = value;
    _scrollAnimatedValue = tmp3Result._scrollAnimatedValue;
    contentInset = tmp3Result.props.contentInset;
    num2 = undefined;
    if (contentInset != null) {
      num2 = contentInset.top;
    }
    if (num2 == null) {
      num2 = 0;
    }
    setOffsetResult = _scrollAnimatedValue.setOffset(num2);
    return tmp3Result;
  }
}
require("_inherits")(ScrollView, importAllResult.Component);
let items = [
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (typeof this.props.keyboardShouldPersistTaps === "boolean") {
        let str = "false";
        if (true === self.props.keyboardShouldPersistTaps) {
          str = "true";
        }
        let str2 = "never";
        if (self.props.keyboardShouldPersistTaps) {
          str2 = "always";
        }
        const _HermesInternal = HermesInternal;
        console.warn("'keyboardShouldPersistTaps={" + str + "}' is deprecated. Use 'keyboardShouldPersistTaps=\"" + str2 + "\"' instead");
      }
      self._keyboardMetrics = importDefault(343).metrics();
      self._additionalScrollOffset = 0;
      const obj = importDefault(343);
      self._subscriptionKeyboardWillShow = importDefault(343).addListener("keyboardWillShow", self.scrollResponderKeyboardWillShow);
      const obj2 = importDefault(343);
      self._subscriptionKeyboardWillHide = importDefault(343).addListener("keyboardWillHide", self.scrollResponderKeyboardWillHide);
      const obj3 = importDefault(343);
      self._subscriptionKeyboardDidShow = importDefault(343).addListener("keyboardDidShow", self.scrollResponderKeyboardDidShow);
      const obj4 = importDefault(343);
      self._subscriptionKeyboardDidHide = importDefault(343).addListener("keyboardDidHide", self.scrollResponderKeyboardDidHide);
      const result = self._updateAnimatedNodeAttachment();
    }
  },
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
        if (!num2) {
          num2 = 0;
        }
        _scrollAnimatedValue.setOffset(num2);
      }
      const result = self._updateAnimatedNodeAttachment();
    }
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
    }
  },
  {
    key: "_textInputFocusError",
    value: function _textInputFocusError() {
      console.warn("Error measuring text field.");
    }
  },
  {
    key: "_getKeyForIndex",
    value: function _getKeyForIndex(closure_0, toArrayResult) {
      let key = tmp;
      if (toArrayResult[closure_0]) {
        key = tmp.key;
      }
      return key;
    }
  },
  {
    key: "_updateAnimatedNodeAttachment",
    value: function _updateAnimatedNodeAttachment() {
      const self = this;
      if (this._scrollAnimatedValueAttachment) {
        const _scrollAnimatedValueAttachment = self._scrollAnimatedValueAttachment;
        _scrollAnimatedValueAttachment.detach();
      }
      let stickyHeaderIndices = self.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        stickyHeaderIndices = self.props.stickyHeaderIndices.length > 0;
      }
      if (stickyHeaderIndices) {
        let obj = importDefault(354);
        obj = { nativeEvent: null };
        obj = { contentOffset: null };
        const obj1 = { y: null };
        obj1[0] = self._scrollAnimatedValue;
        obj[0] = obj1;
        obj[0] = obj;
        const items = [obj];
        self._scrollAnimatedValueAttachment = obj.attachNativeEvent(self.getNativeScrollRef(), "onScroll", items);
      }
    }
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
    }
  },
  {
    key: "_onStickyHeaderLayout",
    value: function _onStickyHeaderLayout(closure_0, nativeEvent, key) {
      const self = this;
      const stickyHeaderIndices = this.props.stickyHeaderIndices;
      if (stickyHeaderIndices) {
        const Children = importAllResult.Children;
        const toArrayResult = Children.toArray(self.props.children);
        if (key === self._getKeyForIndex(closure_0, toArrayResult)) {
          const y = nativeEvent.nativeEvent.layout.y;
          const _headerLayoutYs = self._headerLayoutYs;
          const result = _headerLayoutYs.set(key, y);
          const tmp7 = stickyHeaderIndices[stickyHeaderIndices.indexOf(stickyHeaderIndices, closure_0) - 1];
          if (null != tmp7) {
            const _stickyHeaderRefs = self._stickyHeaderRefs;
            const value = _stickyHeaderRefs.get(self._getKeyForIndex(tmp7, toArrayResult));
            let setNextHeaderY = value;
            if (value) {
              setNextHeaderY = value.setNextHeaderY;
            }
            if (setNextHeaderY) {
              value.setNextHeaderY(y);
            }
          }
        }
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let inner;
      let outer;
      let self = this;
      self = this;
      if (true === this.props.horizontal) {
        let VScrollViewNativeComponent = tmp2(391).HScrollViewNativeComponent;
        let tmp4 = tmp2;
      } else {
        VScrollViewNativeComponent = tmp2(394).VScrollViewNativeComponent;
        tmp4 = tmp2;
      }
      if (true === this.props.horizontal) {
        let VScrollContentViewNativeComponent = tmp4(391).HScrollContentViewNativeComponent;
      } else {
        VScrollContentViewNativeComponent = tmp4(394).VScrollContentViewNativeComponent;
      }
      let contentContainerHorizontal = tmp;
      if (true === this.props.horizontal) {
        contentContainerHorizontal = obj.contentContainerHorizontal;
      }
      const items = [contentContainerHorizontal, self.props.contentContainerStyle];
      let tmp7 = null;
      if (null != self.props.onContentSizeChange) {
        obj = { onLayout: null };
        obj[0] = self._handleContentOnLayout;
        tmp7 = obj;
      }
      const stickyHeaderIndices = self.props.stickyHeaderIndices;
      const children = self.props.children;
      let mapped = children;
      const Children = importAllResult.Children;
      const toArrayResult = Children.toArray(children);
      mapped = toArrayResult;
      let tmp8 = null != stickyHeaderIndices;
      if (tmp8) {
        tmp8 = stickyHeaderIndices.length > 0;
      }
      let tmp9 = toArrayResult;
      if (tmp8) {
        mapped = toArrayResult.map((key, toArrayResult) => {
          let closure_0 = toArrayResult;
          let num = -1;
          if (key) {
            num = key.indexOf(toArrayResult);
          }
          if (num > -1) {
            key = key.key;
            let obj = self;
            let StickyHeaderComponent = self.props.StickyHeaderComponent;
            if (!StickyHeaderComponent) {
              StickyHeaderComponent = self(outer1_4[22]);
            }
            obj = { ref: null, nextHeaderLayoutY: null, onLayout: null, scrollAnimatedValue: null, inverted: null, hiddenOnScroll: null, scrollViewHeight: null, children: null };
            obj[0] = function ref(arg0) {
              return outer1_2._setStickyHeaderRef(key, arg0);
            };
            const _headerLayoutYs = obj._headerLayoutYs;
            obj[1] = _headerLayoutYs.get(obj._getKeyForIndex(key[num + 1], closure_0));
            obj[2] = function onLayout(nativeEvent) {
              return outer1_2._onStickyHeaderLayout(closure_0, nativeEvent, key);
            };
            obj[3] = obj._scrollAnimatedValue;
            obj[4] = obj.props.invertStickyHeaders;
            obj[5] = obj.props.stickyHeaderHiddenOnScroll;
            obj[6] = obj.state.layoutHeight;
            obj[7] = key;
            return outer1_12(StickyHeaderComponent, obj, key);
          } else {
            return key;
          }
        });
        tmp9 = mapped;
      }
      const tmp4Result = tmp4(409);
      obj = { value: tmp ? tmp4Result.HORIZONTAL : tmp4Result.VERTICAL, children: tmp9 };
      let tmp11Result = tmp11(self(409).Provider, obj);
      mapped = tmp11Result;
      let isArray = Array.isArray(stickyHeaderIndices);
      if (isArray) {
        isArray = stickyHeaderIndices.length > 0;
      }
      obj = {};
      const merged = Object.assign(tmp7);
      const _innerView = self._innerView;
      obj.ref = _innerView.getForwardingRef(self.props.innerViewRef);
      obj.style = items;
      let removeClippedSubviews = !isArray;
      if (!isArray) {
        removeClippedSubviews = self.props.removeClippedSubviews;
      }
      obj.removeClippedSubviews = removeClippedSubviews;
      obj.collapsable = false;
      obj.collapsableChildren = !(null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment);
      obj.children = tmp11Result;
      tmp11Result = tmp11(VScrollContentViewNativeComponent, obj);
      if (undefined !== self.props.alwaysBounceHorizontal) {
        let horizontal = self.props.alwaysBounceHorizontal;
      } else {
        horizontal = self.props.horizontal;
      }
      if (undefined !== self.props.alwaysBounceVertical) {
        let alwaysBounceVertical = self.props.alwaysBounceVertical;
      } else {
        alwaysBounceVertical = !self.props.horizontal;
      }
      const tmp20 = true === this.props.horizontal ? obj.baseHorizontal : obj.baseVertical;
      const props = self.props;
      const obj1 = {};
      const merged1 = Object.assign(callback(props, closure_5));
      obj1.alwaysBounceHorizontal = horizontal;
      obj1.alwaysBounceVertical = alwaysBounceVertical;
      let tmp12Result = tmp12(254);
      obj1.style = tmp12Result.compose(tmp20, self.props.style);
      obj1.onContentSizeChange = null;
      ({ _handleLayout: obj4.onLayout, _handleMomentumScrollBegin: obj4.onMomentumScrollBegin, _handleMomentumScrollEnd: obj4.onMomentumScrollEnd, _handleResponderGrant: obj4.onResponderGrant, _handleResponderReject: obj4.onResponderReject, _handleResponderRelease: obj4.onResponderRelease, _handleResponderTerminationRequest: obj4.onResponderTerminationRequest, _handleScrollBeginDrag: obj4.onScrollBeginDrag, _handleScrollEndDrag: obj4.onScrollEndDrag, _handleScrollShouldSetResponder: obj4.onScrollShouldSetResponder, _handleStartShouldSetResponder: obj4.onStartShouldSetResponder, _handleStartShouldSetResponderCapture: obj4.onStartShouldSetResponderCapture, _handleTouchEnd: obj4.onTouchEnd, _handleTouchMove: obj4.onTouchMove, _handleTouchStart: obj4.onTouchStart, _handleTouchCancel: obj4.onTouchCancel, _handleScroll: obj4.onScroll } = self);
      obj1.endDraggingSensitivityMultiplier = props.experimental_endDraggingSensitivityMultiplier;
      let num3 = 1;
      if (!isArray) {
        num3 = self.props.scrollEventThrottle;
      }
      obj1.scrollEventThrottle = num3;
      const onMomentumScrollBegin = self.props.onMomentumScrollBegin;
      let tmp22 = !onMomentumScrollBegin;
      if (!onMomentumScrollBegin) {
        tmp22 = !self.props.onMomentumScrollEnd;
      }
      obj1.sendMomentumEvents = !tmp22;
      obj1.snapToStart = false !== self.props.snapToStart;
      obj1.snapToEnd = false !== self.props.snapToEnd;
      obj1.pagingEnabled = true === self.props.pagingEnabled || null != self.props.snapToInterval || null != self.props.snapToOffsets;
      let prop;
      if (!obj6.disableMaintainVisibleContentPosition()) {
        prop = self.props.maintainVisibleContentPosition;
      }
      obj1.maintainVisibleContentPosition = prop;
      const decelerationRate = self.props.decelerationRate;
      if (null != decelerationRate) {
        obj1.decelerationRate = tmp12(410)(decelerationRate);
      }
      const refreshControl = self.props.refreshControl;
      const _scrollView = self._scrollView;
      const forwardingRef = _scrollView.getForwardingRef(self.props.scrollViewRef);
      if (null != refreshControl) {
        tmp12Result = tmp12(403);
        const obj2 = { style: null };
        ({ outer, inner } = tmp12Result(tmp12(148)(obj1.style)));
        const tmp12Result1Result = tmp12Result(tmp12(148)(obj1.style));
        const tmp30 = cloneElement;
        obj2[0] = tmp12(254).compose(tmp20, outer);
        const obj3 = {};
        const merged2 = Object.assign(obj1);
        let flag = obj1.nestedScrollEnabled;
        if (flag == null) {
          flag = true;
        }
        obj3.nestedScrollEnabled = flag;
        const tmp12Result1 = tmp12(254);
        obj3.style = tmp12(254).compose(tmp20, inner);
        obj3.ref = forwardingRef;
        obj3.children = tmp11Result;
        return tmp30(refreshControl, obj2, tmp11(VScrollViewNativeComponent, obj3));
      } else {
        const obj4 = {};
        const merged3 = Object.assign(obj1);
        obj4.ref = forwardingRef;
        obj4.children = tmp11Result;
        return tmp11(VScrollViewNativeComponent, obj4);
      }
      obj6 = importAll(27);
      const tmp16 = null != self.props.maintainVisibleContentPosition || null != self.props.snapToAlignment;
    }
  }
];
const importDefaultResultResult = importDefaultResult(ScrollView, items);
importDefaultResultResult.Context = require("context");
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    if (typeof this.props.keyboardShouldPersistTaps === "boolean") {
      let str = "false";
      if (true === self.props.keyboardShouldPersistTaps) {
        str = "true";
      }
      let str2 = "never";
      if (self.props.keyboardShouldPersistTaps) {
        str2 = "always";
      }
      const _HermesInternal = HermesInternal;
      console.warn("'keyboardShouldPersistTaps={" + str + "}' is deprecated. Use 'keyboardShouldPersistTaps=\"" + str2 + "\"' instead");
    }
    self._keyboardMetrics = importDefault(343).metrics();
    self._additionalScrollOffset = 0;
    const obj = importDefault(343);
    self._subscriptionKeyboardWillShow = importDefault(343).addListener("keyboardWillShow", self.scrollResponderKeyboardWillShow);
    const obj2 = importDefault(343);
    self._subscriptionKeyboardWillHide = importDefault(343).addListener("keyboardWillHide", self.scrollResponderKeyboardWillHide);
    const obj3 = importDefault(343);
    self._subscriptionKeyboardDidShow = importDefault(343).addListener("keyboardDidShow", self.scrollResponderKeyboardDidShow);
    const obj4 = importDefault(343);
    self._subscriptionKeyboardDidHide = importDefault(343).addListener("keyboardDidHide", self.scrollResponderKeyboardDidHide);
    const result = self._updateAnimatedNodeAttachment();
  }
};
let closure_15 = require("get hairlineWidth").create({ baseVertical: { flexGrow: 1, flexShrink: 1, flexDirection: "column", overflow: "scroll" }, baseHorizontal: { flexGrow: 1, flexShrink: 1, flexDirection: "row", overflow: "scroll" }, contentContainerHorizontal: { flexDirection: "row" } });
class Wrapper {
  constructor(arg0) {
    ref = global.ref;
    merged = Object.assign(global, Object.create(null));
    tmp2 = jsx;
    tmp3 = ScrollView;
    if (null == ref) {
      obj = {};
      tmp7 = obj;
      tmp8 = merged;
      merged1 = Object.assign(merged);
    } else {
      obj = {};
      tmp4 = obj;
      tmp5 = merged;
      merged2 = Object.assign(merged);
      obj.scrollViewRef = ref;
    }
    return tmp2(tmp3, obj);
  }
}
Wrapper.displayName = "ScrollView";
Wrapper.Context = require("context");

export default Wrapper;