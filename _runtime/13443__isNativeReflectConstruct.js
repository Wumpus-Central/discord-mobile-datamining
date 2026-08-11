// _runtime/13443__isNativeReflectConstruct.js
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importDefaultResult1 from "_inherits";
import importDefaultResult3 from "emptyFunction";
import importDefaultResult4 from "emptyFunction";
import { shallowCompare } from "13444_shallowCompare.js";

let FlatList;
let I18nManager;
let Platform;
let ScrollView;
let c9;
let metroImportAll;
const Carousel = arg1;
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
const Animated = get_ActivityIndicator.Animated;
({ Easing: metroImportAll, FlatList, Platform, View: c9, I18nManager, ScrollView } = get_ActivityIndicator);
let animatedComponent = null;
if (FlatList) {
  animatedComponent = Animated.createAnimatedComponent(FlatList);
}
let closure_13 = Animated.createAnimatedComponent(ScrollView);
const isRTL = I18nManager.isRTL;
class Carousel {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, Carousel);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(Carousel);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { hideCarousel: true, interpolators: [] };
    _getFirstItemResult = tmp3Result._getFirstItem(global.firstItem);
    tmp3Result._activeItem = _getFirstItemResult;
    tmp3Result._previousActiveItem = _getFirstItemResult;
    tmp3Result._previousFirstItem = _getFirstItemResult;
    tmp3Result._previousItemsLength = _getFirstItemResult;
    tmp3Result._mounted = false;
    tmp3Result._positions = [];
    tmp3Result._currentContentOffset = 0;
    tmp3Result._canFireBeforeCallback = false;
    tmp3Result._canFireCallback = false;
    tmp3Result._scrollOffsetRef = null;
    tmp3Result._onScrollTriggered = true;
    tmp3Result._lastScrollDate = 0;
    tmp3Result._scrollEnabled = false !== global.scrollEnabled;
    _initPositionsAndInterpolators = tmp3Result._initPositionsAndInterpolators;
    tmp3Result._initPositionsAndInterpolators = _initPositionsAndInterpolators.bind(tmp3Result);
    _renderItem = tmp3Result._renderItem;
    tmp3Result._renderItem = _renderItem.bind(tmp3Result);
    _onSnap = tmp3Result._onSnap;
    tmp3Result._onSnap = _onSnap.bind(tmp3Result);
    _onLayout = tmp3Result._onLayout;
    tmp3Result._onLayout = _onLayout.bind(tmp3Result);
    _onScroll = tmp3Result._onScroll;
    tmp3Result._onScroll = _onScroll.bind(tmp3Result);
    bindResult = undefined;
    if (global.enableSnap) {
      _onScrollBeginDrag = tmp3Result._onScrollBeginDrag;
      bindResult = _onScrollBeginDrag.bind(tmp3Result);
    }
    tmp3Result._onScrollBeginDrag = bindResult;
    if (global.enableSnap) {
      _onScrollEnd = tmp3Result._onScrollEnd;
      bindResult1 = _onScrollEnd.bind(tmp3Result);
    }
    tmp3Result._onScrollEnd = bindResult1;
    bindResult2 = undefined;
    if (!global.enableMomentum) {
      _onScrollEndDrag = tmp3Result._onScrollEndDrag;
      bindResult2 = _onScrollEndDrag.bind(tmp3Result);
    }
    tmp3Result._onScrollEndDrag = bindResult2;
    bindResult3 = undefined;
    if (global.enableMomentum) {
      _onMomentumScrollEnd = tmp3Result._onMomentumScrollEnd;
      bindResult3 = _onMomentumScrollEnd.bind(tmp3Result);
    }
    tmp3Result._onMomentumScrollEnd = bindResult3;
    _onTouchStart = tmp3Result._onTouchStart;
    tmp3Result._onTouchStart = _onTouchStart.bind(tmp3Result);
    _onTouchEnd = tmp3Result._onTouchEnd;
    tmp3Result._onTouchEnd = _onTouchEnd.bind(tmp3Result);
    _onTouchRelease = tmp3Result._onTouchRelease;
    tmp3Result._onTouchRelease = _onTouchRelease.bind(tmp3Result);
    _getKeyExtractor = tmp3Result._getKeyExtractor;
    tmp3Result._getKeyExtractor = _getKeyExtractor.bind(tmp3Result);
    _setScrollHandlerResult = tmp3Result._setScrollHandler(global);
    tmp3Result._ignoreNextMomentum = false;
    if (!require("get ColorPropType").ViewPropTypes) {
      tmp12 = globalThis;
      _console = console;
      str = "react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin";
      warnResult = console.warn("react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin");
    }
    vertical = global.vertical;
    if (!vertical) {
      tmp14 = global.sliderWidth && global.itemWidth;
      vertical = tmp14;
    }
    if (!vertical) {
      tmp15 = globalThis;
      _console2 = console;
      str2 = "react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels";
      errorResult = console.error("react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels");
    }
    vertical2 = global.vertical;
    tmp17 = !vertical2;
    if (vertical2) {
      tmp18 = global.sliderHeight && global.itemHeight;
      tmp17 = tmp18;
    }
    if (!tmp17) {
      tmp19 = globalThis;
      _console3 = console;
      str3 = "react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels";
      errorResult1 = console.error("react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels");
    }
    tmp21 = global.apparitionDelay && !global.useScrollView;
    if (tmp21) {
      tmp22 = globalThis;
      _console4 = console;
      str4 = "react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues";
      warnResult1 = console.warn("react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues");
    }
    tmp24 = global.customAnimationType || global.customAnimationOptions;
    if (tmp24) {
      tmp25 = globalThis;
      _console5 = console;
      str5 = "react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`";
      warnResult2 = console.warn("react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`");
    }
    if (global.onScrollViewScroll) {
      tmp27 = globalThis;
      _console6 = console;
      str6 = "react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead";
      errorResult2 = console.error("react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead");
    }
    return tmp3Result;
  }
}
require("_inherits")(Carousel, require("noop").Component);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    let dependencyMap;
    let importDefault;
    const self = this;
    const props = this.props;
    ({ apparitionDelay: importDefault, autoplay: dependencyMap } = props);
    let _slicedToArray = this._getFirstItem(props.firstItem);
    function apparitionCallback() {

    }
    this._mounted = true;
    let result = this._initPositionsAndInterpolators();
    const animationFrame = requestAnimationFrame(() => {
      if (self._mounted) {
        obj._snapToItem(_slicedToArray, false, false, true, false);
        const result = obj._hackActiveSlideAnimation(_slicedToArray, "start", true);
        if (closure_1) {
          const _setTimeout = setTimeout;
          obj._apparitionTimeout = setTimeout(() => {
            if (typeof closure_0 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            state.setState({ hideCarousel: false });
            if (closure_2) {
              state.startAutoplay();
            }
          }, tmp6);
        } else {
          if (typeof apparitionCallback !== "function") {
            HermesBuiltin.throwTypeError();
          }
          obj.setState({ hideCarousel: false });
          if (closure_2) {
            obj.startAutoplay();
          }
        }
      }
    });
  }
};
let items = [
  obj,
  {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(arg0, arg1) {
      let tmp2 = false === this.props.shouldOptimizeUpdates;
      if (!tmp2) {
        tmp2 = shallowCompare(tmp, arg0, arg1);
      }
      return tmp2;
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(sliderWidth) {
      let itemHeight;
      let itemWidth;
      let scrollEnabled;
      let sliderHeight;
      const self = this;
      const props = this.props;
      ({ itemHeight, itemWidth, scrollEnabled, sliderHeight, sliderWidth } = props);
      const _getCustomDataLengthResult = this._getCustomDataLength(this.props);
      if (_getCustomDataLengthResult) {
        const _getFirstItemResult = self._getFirstItem(props.firstItem, self.props);
        if (self._activeItem) {
          let _activeItem = self._activeItem;
        } else {
          _activeItem = _getFirstItemResult;
        }
        let tmp4 = sliderWidth;
        if (sliderWidth) {
          tmp4 = sliderWidth !== sliderWidth.sliderWidth;
        }
        let tmp5 = sliderHeight;
        if (sliderHeight) {
          tmp5 = sliderHeight !== sliderWidth.sliderHeight;
        }
        let tmp6 = itemWidth;
        if (itemWidth) {
          tmp6 = itemWidth !== sliderWidth.itemWidth;
        }
        let tmp7 = itemHeight;
        if (itemHeight) {
          tmp7 = itemHeight !== sliderWidth.itemHeight;
        }
        if (_activeItem > _getCustomDataLengthResult - 1) {
          _activeItem = _getCustomDataLengthResult - 1;
        }
        if (scrollEnabled !== sliderWidth.scrollEnabled) {
          self._setScrollEnabled(scrollEnabled);
        }
        if (this.state.interpolators.length === _getCustomDataLengthResult) {
          if (!tmp4) {
            if (!tmp5) {
              if (!tmp6) {
                if (!tmp7) {
                  if (tmp9) {
                    self._activeItem = _getFirstItemResult;
                    self._previousFirstItem = _getFirstItemResult;
                    self._snapToItem(_getFirstItemResult, false, true, false, false);
                  }
                  tmp9 = _getFirstItemResult !== self._previousFirstItem && _getFirstItemResult !== self._activeItem;
                }
                if (self.props.onScroll !== sliderWidth.onScroll) {
                  self._setScrollHandler(self.props);
                }
              }
            }
          }
        }
        self._activeItem = _activeItem;
        self._previousItemsLength = _getCustomDataLengthResult;
        const result = self._initPositionsAndInterpolators(self.props);
        if (self._previousItemsLength > _getCustomDataLengthResult) {
          const result1 = self._hackActiveSlideAnimation(_activeItem, null, true);
        }
        if (!tmp4) {
          tmp4 = tmp5;
        }
        if (!tmp4) {
          tmp4 = tmp6;
        }
        if (!tmp4) {
          tmp4 = tmp7;
        }
        if (tmp4) {
          self._snapToItem(_activeItem, false, false, false, false);
        }
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      this.stopAutoplay();
      clearTimeout(this._apparitionTimeout);
      clearTimeout(this._hackSlideAnimationTimeout);
      clearTimeout(this._enableAutoplayTimeout);
      clearTimeout(this._autoplayTimeout);
      clearTimeout(this._snapNoMomentumTimeout);
      clearTimeout(this._edgeItemTimeout);
      clearTimeout(this._lockScrollTimeout);
    }
  },
  {
    key: "realIndex",
    get() {
      return this._activeItem;
    }
  },
  {
    key: "currentIndex",
    get() {
      return this._getDataIndex(this._activeItem);
    }
  },
  {
    key: "currentScrollPosition",
    get() {
      return this._currentContentOffset;
    }
  },
  {
    key: "_setScrollHandler",
    value: function _setScrollHandler(props) {
      const self = this;
      let obj = { listener: this._onScroll, useNativeDriver: true };
      let obj1 = Animated;
      const value = new Animated.Value(0);
      this._scrollPos = value;
      obj = { nativeEvent: null };
      obj = { contentOffset: null };
      if (props.vertical) {
        obj1 = { y: null };
        obj1[0] = self._scrollPos;
        obj[0] = obj1;
        obj[0] = obj;
        const items = [obj];
        let items1 = items;
      } else {
        const obj2 = { x: null };
        obj2[0] = self._scrollPos;
        obj[0] = obj2;
        obj[0] = obj;
        items1 = [obj];
      }
      if (props.onScroll) {
        const _Array = Array;
        if (Array.isArray(props.onScroll._argMapping)) {
          items1.pop();
          const first = callback(props.onScroll._argMapping, 1)[0];
          let contentOffset = first;
          if (first) {
            contentOffset = first.nativeEvent;
          }
          if (contentOffset) {
            contentOffset = first.nativeEvent.contentOffset;
          }
          if (contentOffset) {
            self._scrollPos = first.nativeEvent.contentOffset.x || first.nativeEvent.contentOffset.y || self._scrollPos;
          }
          const push = items1.push;
          const items2 = [];
          HermesBuiltin.arraySpread(props.onScroll._argMapping, 0);
          HermesBuiltin.apply(items2, items1);
        }
      }
      self._onScrollHandler = obj1.event(items1, obj);
    }
  },
  {
    key: "_needsScrollView",
    value: function _needsScrollView() {
      const self = this;
      let useScrollView = this.props.useScrollView;
      if (!useScrollView) {
        useScrollView = !animatedComponent;
      }
      if (!useScrollView) {
        useScrollView = self._shouldUseStackLayout();
      }
      if (!useScrollView) {
        useScrollView = self._shouldUseTinderLayout();
      }
      return useScrollView;
    }
  },
  {
    key: "_needsRTLAdaptations",
    value: function _needsRTLAdaptations() {
      let tmp = isRTL;
      if (isRTL) {
        tmp = !this.props.vertical;
      }
      return tmp;
    }
  },
  {
    key: "_canLockScroll",
    value: function _canLockScroll() {
      let lockScrollWhileSnapping;
      let scrollEnabled;
      const props = this.props;
      ({ scrollEnabled, lockScrollWhileSnapping } = props);
      if (scrollEnabled) {
        scrollEnabled = !props.enableMomentum;
      }
      if (scrollEnabled) {
        scrollEnabled = lockScrollWhileSnapping;
      }
      return scrollEnabled;
    }
  },
  {
    key: "_enableLoop",
    value: function _enableLoop() {
      const props = this.props;
      const data = props.data;
      let tmp = props.enableSnap && props.loop && data && data.length;
      if (tmp) {
        tmp = data.length > 1;
      }
      return tmp;
    }
  },
  {
    key: "_shouldAnimateSlides",
    value: function _shouldAnimateSlides(props) {
      let scrollInterpolator;
      let slideInterpolatedStyle;
      const self = this;
      if (props === undefined) {
        props = self.props;
      }
      let result = props.inactiveSlideOpacity < 1;
      ({ scrollInterpolator, slideInterpolatedStyle } = props);
      if (!result) {
        result = props.inactiveSlideScale < 1;
      }
      if (!result) {
        result = scrollInterpolator;
      }
      if (!result) {
        result = slideInterpolatedStyle;
      }
      if (!result) {
        result = self._shouldUseShiftLayout();
      }
      if (!result) {
        result = self._shouldUseStackLayout();
      }
      if (!result) {
        result = self._shouldUseTinderLayout();
      }
      return result;
    }
  },
  {
    key: "_shouldUseCustomAnimation",
    value: function _shouldUseCustomAnimation() {
      const self = this;
      return this.props.activeAnimationOptions && !self._shouldUseStackLayout() && !self._shouldUseTinderLayout();
    }
  },
  {
    key: "_shouldUseShiftLayout",
    value: function _shouldUseShiftLayout() {
      let tmp2 = "default" === this.props.layout;
      if (tmp2) {
        tmp2 = 0 !== tmp;
      }
      return tmp2;
    }
  },
  {
    key: "_shouldUseStackLayout",
    value: function _shouldUseStackLayout() {
      return "stack" === this.props.layout;
    }
  },
  {
    key: "_shouldUseTinderLayout",
    value: function _shouldUseTinderLayout() {
      return "tinder" === this.props.layout;
    }
  },
  {
    key: "_getCustomData",
    value: function _getCustomData(props) {
      let data;
      let loopClonesPerSide;
      const self = this;
      if (props === undefined) {
        props = self.props;
      }
      ({ data, loopClonesPerSide } = props);
      let length = data;
      if (data) {
        length = data.length;
      }
      if (length) {
        if (self._enableLoop()) {
          if (loopClonesPerSide > length) {
            const items = [];
            const items1 = [];
            const _Math = Math;
            const rounded = Math.floor(loopClonesPerSide / length);
            const result = loopClonesPerSide % length;
            for (let num4 = 0; num4 < rounded; num4 = num4 + 1) {
              let push = items.push;
              let items2 = [];
              let tmp6 = items2;
              let tmp7 = data;
              let num5 = 0;
              let arraySpreadResult = HermesBuiltin.arraySpread(data, 0);
              let tmp9 = push;
              let tmp10 = items2;
              let tmp11 = items;
              let applyResult = HermesBuiltin.apply(items2, items);
              let push2 = items1.push;
              let items3 = [];
              let tmp13 = items3;
              let tmp14 = data;
              let num6 = 0;
              arraySpreadResult = HermesBuiltin.arraySpread(data, 0);
              let tmp16 = push2;
              let tmp17 = items3;
              let tmp18 = items1;
              let applyResult1 = HermesBuiltin.apply(items3, items1);
            }
            const unshift = items.unshift;
            const items4 = [];
            HermesBuiltin.arraySpread(data.slice(-result), 0);
            HermesBuiltin.apply(items4, items);
            const push3 = items1.push;
            const items5 = [];
            HermesBuiltin.arraySpread(data.slice(0, result), 0);
            HermesBuiltin.apply(items5, items1);
            let substr1 = items1;
            let obj = items;
          } else {
            const substr = data.slice(-loopClonesPerSide);
            substr1 = data.slice(0, loopClonesPerSide);
            obj = substr;
          }
          return obj.concat(data, substr1);
        } else {
          return data;
        }
      } else {
        return [];
      }
    }
  },
  {
    key: "_getCustomDataLength",
    value: function _getCustomDataLength(props) {
      const self = this;
      if (props === undefined) {
        props = self.props;
      }
      const data = props.data;
      let length = data;
      if (data) {
        length = data.length;
      }
      let num = 0;
      if (length) {
        let sum = length;
        if (self._enableLoop()) {
          sum = length + 2 * props.loopClonesPerSide;
        }
        num = sum;
      }
      return num;
    }
  },
  {
    key: "_getCustomIndex",
    value: function _getCustomIndex(_activeItem, props) {
      const self = this;
      if (props === undefined) {
        props = self.props;
      }
      const _getCustomDataLengthResult = self._getCustomDataLength(props);
      let num = 0;
      if (_getCustomDataLengthResult) {
        if (_activeItem) {
          let diff = _activeItem;
          if (self._needsRTLAdaptations()) {
            diff = _getCustomDataLengthResult - _activeItem - 1;
          }
          num = diff;
        } else {
          num = 0;
        }
      }
      return num;
    }
  },
  {
    key: "_getDataIndex",
    value: function _getDataIndex(_getActiveItemResult) {
      let data;
      let loopClonesPerSide;
      const self = this;
      ({ data, loopClonesPerSide } = this.props);
      let length = data;
      if (data) {
        length = data.length;
      }
      if (self._enableLoop()) {
        if (length) {
          if (_getActiveItemResult >= length + loopClonesPerSide) {
            if (loopClonesPerSide > length) {
              let result = (_getActiveItemResult - loopClonesPerSide) % length;
            } else {
              result = _getActiveItemResult - length - loopClonesPerSide;
            }
            return result;
          } else if (_getActiveItemResult < loopClonesPerSide) {
            if (loopClonesPerSide > length) {
              const items = [];
              const _Math = Math;
              const rounded = Math.floor(loopClonesPerSide / length);
              let num3 = 0;
              const result1 = loopClonesPerSide % length;
              if (0 < length) {
                do {
                  let arr = items.push(num3);
                  num3 = num3 + 1;
                } while (num3 < length);
              }
              const items1 = [];
              for (let num4 = 0; num4 < rounded; num4 = num4 + 1) {
                let push = items1.push;
                let items2 = [];
                let tmp5 = items2;
                let tmp6 = items;
                let num5 = 0;
                let arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
                let tmp8 = push;
                let tmp9 = items2;
                let tmp10 = items1;
                let applyResult = HermesBuiltin.apply(items2, items1);
              }
              const unshift = items1.unshift;
              const items3 = [];
              HermesBuiltin.arraySpread(items.slice(-result1), 0);
              HermesBuiltin.apply(items3, items1);
              return items1[_getActiveItemResult];
            } else {
              return _getActiveItemResult + length - loopClonesPerSide;
            }
          } else {
            return _getActiveItemResult - loopClonesPerSide;
          }
        }
      }
      return _getActiveItemResult;
    }
  },
  {
    key: "_getPositionIndex",
    value: function _getPositionIndex(closure_1) {
      const props = this.props;
      let sum = closure_1;
      if (props.loop) {
        sum = closure_1 + props.loopClonesPerSide;
      }
      return sum;
    }
  },
  {
    key: "_getFirstItem",
    value: function _getFirstItem(firstItem, props) {
      const self = this;
      if (props === undefined) {
        props = self.props;
      }
      const _getCustomDataLengthResult = self._getCustomDataLength(props);
      let num = 0;
      if (_getCustomDataLengthResult) {
        num = 0;
        if (firstItem <= _getCustomDataLengthResult - 1) {
          num = 0;
          if (firstItem >= 0) {
            let sum = firstItem;
            if (self._enableLoop()) {
              sum = firstItem + props.loopClonesPerSide;
            }
            num = sum;
          }
        }
      }
      return num;
    }
  },
  {
    key: "_getWrappedRef",
    value: function _getWrappedRef() {
      const self = this;
      if (this._carouselRef) {
        if (!self._needsScrollView()) {
          if (!self._needsScrollView()) {
            return self._carouselRef;
          }
        }
      }
      let node = self._carouselRef && self._carouselRef.getNode;
      if (node) {
        const _carouselRef = self._carouselRef;
        node = _carouselRef.getNode();
      }
    }
  },
  {
    key: "_getScrollEnabled",
    value: function _getScrollEnabled() {
      return this._scrollEnabled;
    }
  },
  {
    key: "_setScrollEnabled",
    value: function _setScrollEnabled(scrollEnabled) {
      let flag = scrollEnabled;
      if (scrollEnabled === undefined) {
        flag = true;
      }
      const _getWrappedRefResult = this._getWrappedRef();
      let setNativeProps = _getWrappedRefResult;
      if (_getWrappedRefResult) {
        setNativeProps = _getWrappedRefResult.setNativeProps;
      }
      if (setNativeProps) {
        const obj = { scrollEnabled: null };
        obj[0] = flag;
        _getWrappedRefResult.setNativeProps(obj);
        this._scrollEnabled = flag;
      }
    }
  },
  {
    key: "_getKeyExtractor",
    value: function _getKeyExtractor(item, index) {
      if (this._needsScrollView()) {
        let combined = concat(index);
      } else {
        combined = concat(index);
      }
      return combined;
    }
  },
  {
    key: "_getScrollOffset",
    value: function _getScrollOffset(nativeEvent) {
      let num = nativeEvent;
      if (nativeEvent) {
        num = nativeEvent.nativeEvent;
      }
      if (num) {
        num = nativeEvent.nativeEvent.contentOffset;
      }
      if (num) {
        let str = "x";
        if (this.props.vertical) {
          str = "y";
        }
        num = nativeEvent.nativeEvent.contentOffset[str];
      }
      if (!num) {
        num = 0;
      }
      return num;
    }
  },
  {
    key: "_getContainerInnerMargin",
    value: function _getContainerInnerMargin(arg0) {
      let activeSlideAlignment;
      let itemHeight;
      let itemWidth;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      ({ sliderWidth, sliderHeight, itemWidth, itemHeight, vertical, activeSlideAlignment } = this.props);
      if ("start" !== activeSlideAlignment) {
        if ("end" === activeSlideAlignment) {
          let num = 0;
        }
        if ("end" !== activeSlideAlignment) {
          if (!tmp) {
            if (vertical) {
              let result = (sliderHeight - itemHeight) / 2;
            } else {
              result = (sliderWidth - itemWidth) / 2;
            }
          }
        }
      } else {
        num = 0;
      }
      return num;
    }
  },
  {
    key: "_getViewportOffset",
    value: function _getViewportOffset() {
      let activeSlideAlignment;
      let itemHeight;
      let itemWidth;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      ({ sliderWidth, sliderHeight, itemWidth, itemHeight, vertical, activeSlideAlignment } = this.props);
      if ("start" !== activeSlideAlignment) {
        if ("end" === activeSlideAlignment) {
          let num2 = 2;
          if (vertical) {
            num2 = itemHeight / num2;
            let diff = sliderHeight - num2;
          } else {
            diff = sliderWidth - itemWidth / num2;
          }
        } else {
          return vertical ? sliderHeight / 2 : sliderWidth / 2;
        }
      }
    }
  },
  {
    key: "_getCenter",
    value: function _getCenter(_currentContentOffset) {
      const sum = _currentContentOffset + this._getViewportOffset();
      return sum - this._getContainerInnerMargin();
    }
  },
  {
    key: "_getActiveItem",
    value: function _getActiveItem(_currentContentOffset) {
      const self = this;
      const props = this.props;
      let swipeThreshold = props.activeSlideOffset;
      const _getCenterResult = this._getCenter(_currentContentOffset);
      if (!swipeThreshold) {
        swipeThreshold = props.swipeThreshold;
      }
      let num = 0;
      if (0 < self._positions.length) {
        while (true) {
          let tmp3 = num;
          if (_getCenterResult + swipeThreshold >= self._positions[num].start) {
            if (_getCenterResult - swipeThreshold <= tmp2) {
              break;
            }
          }
          num = num + 1;
        }
        return num;
      }
      const diff = self._positions.length - 1;
      let num2 = 0;
      if (self._positions[diff]) {
        num2 = 0;
        if (_getCenterResult - swipeThreshold > self._positions[diff].end) {
          num2 = diff;
        }
      }
      return num2;
    }
  },
  {
    key: "_initPositionsAndInterpolators",
    value: function _initPositionsAndInterpolators(props) {
      let c2;
      let data;
      let itemWidth;
      let self = this;
      self = this;
      if (props === undefined) {
        props = self.props;
      }
      c2 = undefined;
      itemWidth = undefined;
      let items;
      ({ data, itemWidth, scrollInterpolator: c2 } = props);
      if (props.vertical) {
        itemWidth = props.itemHeight;
      }
      if (data) {
        if (data.length) {
          items = [];
          self._positions = [];
          const item = self._getCustomData(props).forEach((arg0, _activeItem) => {
            let obj = self;
            const _getCustomIndexResult = self._getCustomIndex(_activeItem, props);
            obj = { start: _activeItem * itemWidth, end: _activeItem * itemWidth + itemWidth };
            self._positions[_activeItem] = obj;
            if (self._shouldAnimateSlides(props)) {
              if (obj._shouldUseCustomAnimation()) {
                let num2 = 0;
                if (_getCustomIndexResult === obj._activeItem) {
                  num2 = 1;
                }
                let interpolateResult = new outer1_7.Value(num2);
              } else {
                if (_undefined) {
                  let result = tmp7(_getCustomIndexResult, tmp);
                } else if (obj._shouldUseStackLayout()) {
                  result = items(_undefined[11]).stackScrollInterpolator(_getCustomIndexResult, tmp);
                  const obj4 = items(_undefined[11]);
                } else if (obj._shouldUseTinderLayout()) {
                  result = items(_undefined[11]).tinderScrollInterpolator(_getCustomIndexResult, tmp);
                  const obj3 = items(_undefined[11]);
                }
                let outputRange = result;
                if (result) {
                  outputRange = result.inputRange;
                }
                if (outputRange) {
                  outputRange = result.outputRange;
                }
                if (!outputRange) {
                  result = items(_undefined[11]).defaultScrollInterpolator(_getCustomIndexResult, tmp);
                  const obj5 = items(_undefined[11]);
                }
                const _scrollPos = obj._scrollPos;
                obj = {};
                const merged = Object.assign(result);
                obj.extrapolate = "clamp";
                interpolateResult = _scrollPos.interpolate(obj);
              }
            } else {
              interpolateResult = new outer1_7.Value(1);
            }
            items.push(interpolateResult);
          });
          let obj = { interpolators: null };
          obj[0] = items;
          self.setState(obj);
          const _getCustomDataResult = self._getCustomData(props);
        }
      }
    }
  },
  {
    key: "_getSlideAnimation",
    value: function _getSlideAnimation(_activeItem, toValue) {
      let parallel;
      let timing;
      const interpolators = this.state.interpolators;
      const props = this.props;
      let tmp = interpolators;
      if (interpolators) {
        tmp = interpolators[_activeItem];
      }
      if (!tmp) {
        if (0 !== tmp) {
          return null;
        }
      }
      let obj = { isInteraction: false, useNativeDriver: true };
      const merged = Object.assign(props.activeAnimationOptions);
      obj.toValue = toValue;
      obj = {};
      ({ parallel, timing } = Animated);
      const merged1 = Object.assign(obj);
      obj.easing = linear.linear;
      const items = [timing(tmp, obj), ];
      obj = {};
      const merged2 = Object.assign(obj);
      items[1] = Animated[props.activeAnimationType](tmp, obj);
      return parallel(items);
    }
  },
  {
    key: "_playCustomSlideAnimation",
    value: function _playCustomSlideAnimation(_activeItem, _getActiveItemResult) {
      const self = this;
      const interpolators = this.state.interpolators;
      const _getCustomDataLengthResult = this._getCustomDataLength();
      const items = [];
      const _getDataIndexResult = this._getDataIndex(this._getCustomIndex(_activeItem));
      if (this._enableLoop()) {
        let num5 = 0;
        if (0 < _getCustomDataLengthResult) {
          while (true) {
            let tmp6 = num5;
            if (self._getDataIndex(num5) === _getDataIndexResult) {
              if (interpolators[num5]) {
                let arr = items.push(self._getSlideAnimation(num5, 0));
                num5 = num5 + 1;
                if (num5 >= _getCustomDataLengthResult) {
                  break;
                }
              }
            }
            let tmp7 = self._getDataIndex(num5) === _getDataIndexResult1 && interpolators[num5];
            if (tmp7) {
              arr = items.push(self._getSlideAnimation(num5, 1));
            }
          }
        }
      } else {
        if (interpolators[_activeItem]) {
          items.push(self._getSlideAnimation(_activeItem, 0));
        }
        if (interpolators[_getActiveItemResult]) {
          items.push(self._getSlideAnimation(_getActiveItemResult, 1));
        }
      }
      _getDataIndexResult1 = this._getDataIndex(this._getCustomIndex(_getActiveItemResult));
      Animated.parallel(items, { stopTogether: false }).start();
    }
  },
  {
    key: "_hackActiveSlideAnimation",
    value: function _hackActiveSlideAnimation(_activeItem, start, arg2) {
      let self = this;
      self = this;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let c0;
      const data = self.props.data;
      if (self._mounted) {
        if (self._carouselRef) {
          if (self._positions[_activeItem]) {
            if (flag) {
              c0 = tmp2;
              if (self._positions[_activeItem] && self._positions[_activeItem].start) {
                let length = data;
                if (data) {
                  length = data.length;
                }
                if (start) {
                  let str = "start";
                } else {
                  str = "end";
                }
                let num3 = 1;
                if ("start" === str) {
                  num3 = -1;
                }
                self._scrollTo(tmp2 + num3, false);
                const _clearTimeout = clearTimeout;
                clearTimeout(self._hackSlideAnimationTimeout);
                const _setTimeout = setTimeout;
                self._hackSlideAnimationTimeout = setTimeout(() => {
                  self._scrollTo(c0, false);
                }, 50);
              }
            }
          }
        }
      }
    }
  },
  {
    key: "_lockScroll",
    value: function _lockScroll() {
      const self = this;
      clearTimeout(this._lockScrollTimeout);
      this._lockScrollTimeout = setTimeout(() => {
        self._releaseScroll();
      }, this.props.lockScrollTimeoutDuration);
      this._setScrollEnabled(false);
    }
  },
  {
    key: "_releaseScroll",
    value: function _releaseScroll() {
      clearTimeout(this._lockScrollTimeout);
      this._setScrollEnabled(true);
    }
  },
  {
    key: "_repositionScroll",
    value: function _repositionScroll(_getActiveItemResult) {
      let data;
      let loopClonesPerSide;
      const self = this;
      ({ data, loopClonesPerSide } = this.props);
      let length = data;
      if (data) {
        length = data.length;
      }
      if (self._enableLoop()) {
        if (length) {
          let _snapToItemResult = _getActiveItemResult;
          if (_snapToItemResult >= length + loopClonesPerSide) {
            let diff = _snapToItemResult - length;
          } else {
            diff = _snapToItemResult;
            if (_snapToItemResult < loopClonesPerSide) {
              diff = _snapToItemResult + length;
            }
          }
          _snapToItemResult = self._snapToItem(diff, false, false, false, false);
        }
      }
    }
  },
  {
    key: "_scrollTo",
    value: function _scrollTo(_scrollOffsetRef, flag) {
      if (flag === undefined) {
        flag = true;
      }
      const self = this;
      const vertical = this.props.vertical;
      const _getWrappedRefResult = this._getWrappedRef();
      if (this._mounted) {
        if (_getWrappedRefResult) {
          if (self._needsScrollView()) {
            let num = 0;
            if (!vertical) {
              num = _scrollOffsetRef;
            }
            let obj = { x: null, y: null };
            obj[0] = num;
            let num2 = 0;
            if (vertical) {
              num2 = _scrollOffsetRef;
            }
            obj[1] = num2;
          } else {
            obj = { offset: null };
            obj[0] = _scrollOffsetRef;
          }
          const obj1 = {};
          const merged = Object.assign(obj);
          obj1.animated = flag;
          if (self._needsScrollView()) {
            _getWrappedRefResult.scrollTo(obj1);
          } else {
            _getWrappedRefResult.scrollToOffset(obj1);
          }
        }
      }
    }
  },
  {
    key: "_onScroll",
    value: function _onScroll(closure_0) {
      let callbackOffsetMargin;
      let enableMomentum;
      let onScroll;
      const self = this;
      ({ callbackOffsetMargin, onScroll, enableMomentum } = this.props);
      if (closure_0) {
        let _currentContentOffset = self._getScrollOffset(closure_0);
      } else {
        _currentContentOffset = self._currentContentOffset;
      }
      const _getActiveItemResult = self._getActiveItem(_currentContentOffset);
      let _canFireCallback = _currentContentOffset >= self._scrollOffsetRef - callbackOffsetMargin;
      if (_canFireCallback) {
        _canFireCallback = _currentContentOffset <= self._scrollOffsetRef + callbackOffsetMargin;
      }
      self._currentContentOffset = _currentContentOffset;
      self._onScrollTriggered = true;
      self._lastScrollDate = Date.now();
      if (tmp2) {
        const result = self._playCustomSlideAnimation(self._activeItem, _getActiveItemResult);
      }
      if (enableMomentum) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._snapNoMomentumTimeout);
        if (self._activeItem !== _getActiveItemResult) {
          self._activeItem = _getActiveItemResult;
        }
        if (tmp4) {
          if (self._canFireBeforeCallback) {
            self._onBeforeSnap(self._getDataIndex(_getActiveItemResult));
          }
          if (_canFireCallback) {
            _canFireCallback = self._canFireCallback;
          }
          if (_canFireCallback) {
            self._onSnap(self._getDataIndex(_getActiveItemResult));
          }
        }
      } else {
        if (tmp5) {
          if (self._canFireBeforeCallback) {
            self._onBeforeSnap(self._getDataIndex(_getActiveItemResult));
          }
          if (_canFireCallback) {
            self._activeItem = _getActiveItemResult;
            if (self._canLockScroll()) {
              self._releaseScroll();
            }
            if (self._canFireCallback) {
              self._onSnap(self._getDataIndex(_getActiveItemResult));
            }
          }
        }
        tmp5 = self._activeItem !== _getActiveItemResult && tmp4;
      }
      if (tmp12) {
        self._repositionScroll(_getActiveItemResult);
      }
      let tmp14 = typeof onScroll === "function";
      if (typeof onScroll === "function") {
        tmp14 = closure_0;
      }
      if (tmp14) {
        onScroll(closure_0);
      }
    }
  },
  {
    key: "_onStartShouldSetResponderCapture",
    value: function _onStartShouldSetResponderCapture(arg0) {
      const self = this;
      const onStartShouldSetResponderCapture = this.props.onStartShouldSetResponderCapture;
      if (onStartShouldSetResponderCapture) {
        const result = onStartShouldSetResponderCapture(arg0);
      }
      return self._getScrollEnabled();
    }
  },
  {
    key: "_onTouchStart",
    value: function _onTouchStart() {
      const self = this;
      const onTouchStart = this.props.onTouchStart;
      if (tmp) {
        self.pauseAutoPlay();
      }
      if (onTouchStart) {
        onTouchStart();
      }
    }
  },
  {
    key: "_onTouchEnd",
    value: function _onTouchEnd() {
      const self = this;
      const onTouchEnd = this.props.onTouchEnd;
      if (tmp) {
        self.startAutoplay();
      }
      if (onTouchEnd) {
        onTouchEnd();
      }
    }
  },
  {
    key: "_onScrollBeginDrag",
    value: function _onScrollBeginDrag(closure_0) {
      const self = this;
      const onScrollBeginDrag = this.props.onScrollBeginDrag;
      if (this._getScrollEnabled()) {
        self._scrollStartOffset = self._getScrollOffset(closure_0);
        self._scrollStartActive = self._getActiveItem(self._scrollStartOffset);
        self._ignoreNextMomentum = false;
        if (onScrollBeginDrag) {
          onScrollBeginDrag(closure_0);
        }
      }
    }
  },
  {
    key: "_onScrollEndDrag",
    value: function _onScrollEndDrag(closure_0) {
      const self = this;
      const onScrollEndDrag = this.props.onScrollEndDrag;
      if (tmp) {
        self._onScrollEnd();
      }
      if (onScrollEndDrag) {
        onScrollEndDrag(closure_0);
      }
    }
  },
  {
    key: "_onMomentumScrollEnd",
    value: function _onMomentumScrollEnd(closure_0) {
      const self = this;
      const onMomentumScrollEnd = this.props.onMomentumScrollEnd;
      if (tmp) {
        self._onScrollEnd();
      }
      if (onMomentumScrollEnd) {
        onMomentumScrollEnd(closure_0);
      }
    }
  },
  {
    key: "_onScrollEnd",
    value: function _onScrollEnd(arg0) {
      let self = this;
      self = this;
      if (this._ignoreNextMomentum) {
        self._ignoreNextMomentum = false;
      } else if (self._currentContentOffset !== self._scrollEndOffset) {
        self._scrollEndOffset = self._currentContentOffset;
        self._scrollEndActive = self._getActiveItem(self._scrollEndOffset);
        if (tmp2) {
          self._snapScroll(self._scrollEndOffset - self._scrollStartOffset);
        }
        if (tmp4) {
          const _clearTimeout = clearTimeout;
          clearTimeout(self._enableAutoplayTimeout);
          const _setTimeout = setTimeout;
          self._enableAutoplayTimeout = setTimeout(() => {
            self.startAutoplay();
          }, tmp + 50);
        }
        tmp4 = self._autoplay && !self._autoplaying;
      }
    }
  },
  {
    key: "_onTouchRelease",
    value: function _onTouchRelease(arg0) {

    }
  },
  {
    key: "_onLayout",
    value: function _onLayout(arg0) {
      const self = this;
      const onLayout = this.props.onLayout;
      if (this._onLayoutInitDone) {
        const result = self._initPositionsAndInterpolators();
        self._snapToItem(self._activeItem, false, false, false, false);
      } else {
        self._onLayoutInitDone = true;
      }
      if (onLayout) {
        onLayout(arg0);
      }
    }
  },
  {
    key: "_snapScroll",
    value: function _snapScroll(arg0) {
      const self = this;
      const swipeThreshold = this.props.swipeThreshold;
      if (!this._scrollEndActive) {
        const _scrollEndActive = self._scrollEndActive;
      }
      if (self._scrollStartActive !== self._scrollEndActive) {
        self._snapToItem(self._scrollEndActive);
      } else if (arg0 > 0) {
        if (arg0 > swipeThreshold) {
          self._snapToItem(self._scrollStartActive + 1);
        } else {
          self._snapToItem(self._scrollEndActive);
        }
      } else {
        if (arg0 < 0) {
          if (arg0 < -swipeThreshold) {
            self._snapToItem(self._scrollStartActive - 1);
          }
        }
        self._snapToItem(self._scrollEndActive);
      }
    }
  },
  {
    key: "_snapToItem",
    value: function _snapToItem(_scrollEndActive, flag, flag2, arg3, arg4) {
      let enableMomentum;
      let onBeforeSnapToItem;
      let onSnapToItem;
      let self = this;
      self = this;
      let num = _scrollEndActive;
      let c1 = _scrollEndActive;
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = true;
      }
      let flag3 = arg3;
      if (arg3 === undefined) {
        flag3 = false;
      }
      let flag4 = arg4;
      if (arg4 === undefined) {
        flag4 = true;
      }
      ({ enableMomentum, onSnapToItem, onBeforeSnapToItem } = self.props);
      const _getCustomDataLengthResult = self._getCustomDataLength();
      let _getWrappedRefResult = _getCustomDataLengthResult;
      if (_getCustomDataLengthResult) {
        _getWrappedRefResult = self._getWrappedRef();
      }
      if (_getWrappedRefResult) {
        if (num) {
          if (num >= 0) {
            if (tmp3) {
              const diff = _getCustomDataLengthResult - 1;
              c1 = diff;
              num = diff;
            }
            tmp3 = _getCustomDataLengthResult > 0 && num >= _getCustomDataLengthResult;
          }
          if (num !== self._previousActiveItem) {
            self._previousActiveItem = num;
            if (flag4) {
              flag4 = self._canLockScroll();
            }
            if (flag4) {
              self._lockScroll();
            }
            if (flag2) {
              if (onBeforeSnapToItem) {
                self._canFireBeforeCallback = true;
              }
              if (onSnapToItem) {
                self._canFireCallback = true;
              }
            }
          }
          self._itemToSnapTo = num;
          self._scrollOffsetRef = self._positions[num] && self._positions[num].start;
          self._onScrollTriggered = false;
          let _scrollOffsetRef = self._scrollOffsetRef;
          if (!_scrollOffsetRef) {
            _scrollOffsetRef = 0 === self._scrollOffsetRef;
          }
          if (_scrollOffsetRef) {
            self._scrollTo(self._scrollOffsetRef, flag);
            self._scrollEndOffset = self._currentContentOffset;
            if (enableMomentum) {
              if (!flag3) {
                self._ignoreNextMomentum = true;
              }
              let tmp7 = 0 !== num;
              if (tmp7) {
                tmp7 = num !== _getCustomDataLengthResult - 1;
              }
              if (!tmp7) {
                const _clearTimeout = clearTimeout;
                clearTimeout(self._edgeItemTimeout);
                const _setTimeout = setTimeout;
                self._edgeItemTimeout = setTimeout(() => {
                  let _onScrollTriggered = flag3;
                  if (!flag3) {
                    _onScrollTriggered = c1 !== self._activeItem;
                  }
                  if (!_onScrollTriggered) {
                    _onScrollTriggered = self._onScrollTriggered;
                  }
                  if (!_onScrollTriggered) {
                    self._onScroll();
                  }
                }, 250);
              }
            }
          }
        }
        c1 = 0;
        num = 0;
      }
    }
  },
  {
    key: "_onBeforeSnap",
    value: function _onBeforeSnap(self) {
      const onBeforeSnapToItem = this.props.onBeforeSnapToItem;
      if (this._carouselRef) {
        tmp._canFireBeforeCallback = false;
        if (onBeforeSnapToItem) {
          onBeforeSnapToItem(self);
        }
      }
    }
  },
  {
    key: "_onSnap",
    value: function _onSnap(self) {
      const onSnapToItem = this.props.onSnapToItem;
      if (this._carouselRef) {
        tmp._canFireCallback = false;
        if (onSnapToItem) {
          onSnapToItem(self);
        }
      }
    }
  },
  {
    key: "startAutoplay",
    value: function startAutoplay() {
      let self = this;
      self = this;
      const autoplayInterval = this.props.autoplayInterval;
      this._autoplay = true;
      if (!this._autoplaying) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._autoplayTimeout);
        const _setTimeout = setTimeout;
        self._autoplayTimeout = setTimeout(() => {
          self._autoplaying = true;
          self._autoplayInterval = setInterval(() => {
            if (_autoplaying._autoplaying) {
              _autoplaying.snapToNext();
            }
          }, autoplayInterval);
        }, tmp);
      }
    }
  },
  {
    key: "pauseAutoPlay",
    value: function pauseAutoPlay() {
      this._autoplaying = false;
      clearTimeout(this._autoplayTimeout);
      clearTimeout(this._enableAutoplayTimeout);
      clearInterval(this._autoplayInterval);
    }
  },
  {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      this._autoplay = false;
      this.pauseAutoPlay();
    }
  },
  {
    key: "snapToItem",
    value: function snapToItem(rounded, flag, flag2) {
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = true;
      }
      let num = rounded;
      let tmp = !rounded;
      if (rounded) {
        tmp = num < 0;
      }
      if (tmp) {
        num = 0;
      }
      const self = this;
      const _getPositionIndexResult = this._getPositionIndex(num);
      if (_getPositionIndexResult !== this._activeItem) {
        self._snapToItem(_getPositionIndexResult, flag, flag2);
      }
    }
  },
  {
    key: "snapToNext",
    value: function snapToNext(flag, flag2) {
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = true;
      }
      const self = this;
      let num = this._activeItem + 1;
      if (num > this._getCustomDataLength() - 1) {
        num = 0;
      }
      self._snapToItem(num, flag, flag2);
    }
  },
  {
    key: "snapToPrev",
    value: function snapToPrev(flag, flag2) {
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = true;
      }
      const self = this;
      let diff = this._activeItem - 1;
      if (diff < 0) {
        if (self._enableLoop()) {
          diff = tmp - 1;
        }
      }
      self._snapToItem(diff, flag, flag2);
    }
  },
  {
    key: "triggerRenderingHack",
    value: function triggerRenderingHack(arg0) {
      const self = this;
      if (Date.now() - this._lastScrollDate >= 500) {
        const _currentContentOffset = self._currentContentOffset;
        if (_currentContentOffset) {
          let tmp = arg0;
          if (!arg0) {
            let num2 = -1;
            if (0 === _currentContentOffset) {
              num2 = 1;
            }
            tmp = num2;
          }
          self._scrollTo(_currentContentOffset + tmp, false);
        }
      }
    }
  },
  {
    key: "_getSlideInterpolatedStyle",
    value: function _getSlideInterpolatedStyle(index, interpolate) {
      let layoutCardOffset;
      let slideInterpolatedStyle;
      const self = this;
      ({ layoutCardOffset, slideInterpolatedStyle } = this.props);
      if (slideInterpolatedStyle) {
        let result = slideInterpolatedStyle(index, interpolate, self.props);
      } else if (self._shouldUseTinderLayout()) {
        const obj3 = Carousel(13446);
        result = obj3.tinderAnimatedStyles(index, interpolate, self.props, layoutCardOffset);
      } else if (self._shouldUseStackLayout()) {
        const obj2 = Carousel(13446);
        result = obj2.stackAnimatedStyles(index, interpolate, self.props, layoutCardOffset);
      } else {
        const result1 = self._shouldUseShiftLayout();
        const obj = Carousel(13446);
        if (result1) {
          result = obj.shiftAnimatedStyles(index, interpolate, self.props);
        } else {
          result = obj.defaultAnimatedStyles(index, interpolate, self.props);
        }
      }
      return result;
    }
  },
  {
    key: "_renderItem",
    value: function _renderItem(arg0) {
      let hasParallaxImages;
      let index;
      let item;
      let itemHeight;
      let itemWidth;
      let keyExtractor;
      let renderItem;
      let slideStyle;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      const self = this;
      ({ item, index } = arg0);
      const interpolators = this.state.interpolators;
      const props = this.props;
      ({ itemWidth, itemHeight, keyExtractor, vertical } = props);
      let tmp = interpolators;
      ({ hasParallaxImages, renderItem, sliderHeight, sliderWidth, slideStyle } = props);
      if (interpolators) {
        tmp = interpolators[index];
      }
      if (!tmp) {
        if (0 !== tmp) {
          return null;
        }
      }
      const _shouldAnimateSlidesResult = self._shouldAnimateSlides();
      if (_shouldAnimateSlidesResult) {
        let View = Animated.View;
      } else {
        View = closure_9;
      }
      if (_shouldAnimateSlidesResult) {
        let result = self._getSlideInterpolatedStyle(index, tmp);
      } else {
        result = {};
      }
      if (hasParallaxImages) {
        let obj = { scrollPosition: null, carouselRef: null, vertical: null, sliderWidth: null, sliderHeight: null, itemWidth: null, itemHeight: null };
        ({ _scrollPos: obj2[0], _carouselRef: obj2[1] } = self);
        obj[2] = vertical;
        obj[3] = sliderWidth;
        obj[4] = sliderHeight;
        obj[5] = itemWidth;
        obj[6] = itemHeight;
        const tmp5 = obj;
      }
      if (vertical) {
        obj = { height: null };
        obj[0] = itemHeight;
        let obj1 = obj;
      } else {
        obj1 = { width: null };
        obj1[0] = itemWidth;
      }
      if (self._needsScrollView()) {
        if (keyExtractor) {
          let keyExtractorResult = keyExtractor(item, index);
        } else {
          keyExtractorResult = self._getKeyExtractor(item, index);
        }
        keyExtractor = { key: null };
        keyExtractor[0] = keyExtractorResult;
      } else {
        const obj2 = {};
        const obj3 = { style: null, pointerEvents: "box-none" };
        const items = [obj1, slideStyle, result];
        obj3[0] = items;
        const merged = Object.assign(obj2);
        const obj4 = { item: null, index: null };
        obj4[0] = item;
        obj4[1] = index;
        obj3.children = renderItem(obj4, tmp5);
        return <View style={null} pointerEvents="box-none" />;
      }
    }
  },
  {
    key: "_getComponentOverridableProps",
    value: function _getComponentOverridableProps() {
      let enableMomentum;
      let loopClonesPerSide;
      const self = this;
      const props = this.props;
      ({ enableMomentum, loopClonesPerSide } = props);
      const sum = Math.ceil(props.vertical ? props.sliderHeight / props.itemHeight : props.sliderWidth / props.itemWidth) + 1;
      let num = 2;
      if (self._enableLoop()) {
        num = loopClonesPerSide;
      }
      const result = 2 * num;
      if (self._needsScrollView()) {
        let obj = {};
      } else {
        const sum1 = sum + result;
        const sum2 = 1 + 2 * sum1;
        obj = { initialNumToRender: null, maxToRenderPerBatch: null, windowSize: null };
        obj[0] = sum1;
        obj[1] = sum2;
        obj[2] = sum2;
      }
      let num2 = "fast";
      if (enableMomentum) {
        num2 = 0.9;
      }
      obj = { decelerationRate: num2, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, overScrollMode: "never", automaticallyAdjustContentInsets: false, directionalLockEnabled: true, pinchGestureEnabled: false, scrollsToTop: false, removeClippedSubviews: !self._needsScrollView(), inverted: self._needsRTLAdaptations() };
      const merged = Object.assign(obj);
      return obj;
    }
  },
  {
    key: "_getComponentStaticProps",
    value: function _getComponentStaticProps() {
      let containerCustomStyle;
      let contentContainerCustomStyle;
      let keyExtractor;
      let sliderHeight;
      let sliderWidth;
      let vertical;
      let self = this;
      self = this;
      const props = this.props;
      ({ containerCustomStyle, contentContainerCustomStyle, keyExtractor, vertical } = props);
      ({ sliderWidth, sliderHeight } = props);
      if (!containerCustomStyle) {
        containerCustomStyle = props.style;
      }
      if (!containerCustomStyle) {
        containerCustomStyle = {};
      }
      const items = [containerCustomStyle, this.state.hideCarousel ? { opacity: 0 } : {}, ];
      if (vertical) {
        let obj = { height: null, flexDirection: "column" };
        obj[0] = sliderHeight;
      } else {
        obj = { width: null, flexDirection: null };
        obj[0] = sliderWidth;
        let str = "row";
        if (self._needsRTLAdaptations()) {
          str = "row-reverse";
        }
        obj[1] = str;
      }
      items[2] = obj;
      if (vertical) {
        obj = { paddingTop: null, paddingBottom: null };
        obj[0] = self._getContainerInnerMargin();
        obj[1] = self._getContainerInnerMargin(true);
        let obj1 = obj;
      } else {
        obj1 = { paddingLeft: null, paddingRight: null };
        obj1[0] = self._getContainerInnerMargin();
        obj1[1] = self._getContainerInnerMargin(true);
      }
      const items1 = [obj1, ];
      if (!contentContainerCustomStyle) {
        contentContainerCustomStyle = {};
      }
      items1[1] = contentContainerCustomStyle;
      if (self._needsScrollView()) {
        let obj2 = {};
      } else {
        obj2 = { renderItem: null, numColumns: 1, keyExtractor: null };
        obj2[0] = self._renderItem;
        if (!keyExtractor) {
          keyExtractor = self._getKeyExtractor;
        }
        obj2[2] = keyExtractor;
      }
      const merged = Object.assign(obj2);
      return {
        ref(_carouselRef) {
          self._carouselRef = _carouselRef;
          return _carouselRef;
        },
        data: self._getCustomData(),
        style: items,
        contentContainerStyle: items1,
        horizontal: !vertical,
        scrollEventThrottle: 1,
        onScroll: self._onScrollHandler,
        onScrollBeginDrag: self._onScrollBeginDrag,
        onScrollEndDrag: self._onScrollEndDrag,
        onMomentumScrollEnd: self._onMomentumScrollEnd,
        onResponderRelease: self._onTouchRelease,
        onStartShouldSetResponderCapture: self._onStartShouldSetResponderCapture,
        onTouchStart: self._onTouchStart,
        onTouchEnd: self._onScrollEnd,
        onLayout: self._onLayout
      };
    }
  },
  {
    key: "render",
    value: function render() {
      let self = this;
      self = this;
      const props = this.props;
      let useScrollView = props.useScrollView;
      if (props.data) {
        if (props.renderItem) {
          let obj = {};
          const merged = Object.assign(self._getComponentOverridableProps());
          const merged1 = Object.assign(self.props);
          const merged2 = Object.assign(self._getComponentStaticProps());
          if (typeof useScrollView !== "function") {
            useScrollView = closure_13;
          }
          obj = {};
          if (self._needsScrollView()) {
            const merged3 = Object.assign(obj);
            obj.children = self._getCustomData().map((item, index) => self._renderItem({ item, index }));
            let tmp7Result = tmp7(useScrollView, obj);
            const _getCustomDataResult = self._getCustomData();
          } else {
            const merged4 = Object.assign(obj);
            tmp7Result = tmp7(animatedComponent, obj);
          }
          return tmp7Result;
        }
      }
      return null;
    }
  }
];
const importDefaultResultResult = importDefaultResult(Carousel, items);
obj = { data: require("emptyFunction").array.isRequired, renderItem: require("emptyFunction").func.isRequired, itemWidth: require("emptyFunction").number, itemHeight: require("emptyFunction").number, sliderWidth: require("emptyFunction").number, sliderHeight: require("emptyFunction").number, activeAnimationType: require("emptyFunction").string, activeAnimationOptions: require("emptyFunction").object, activeSlideAlignment: null, activeSlideOffset: null, apparitionDelay: null, autoplay: null, autoplayDelay: null, autoplayInterval: null, callbackOffsetMargin: null, containerCustomStyle: null, contentContainerCustomStyle: null, enableMomentum: null, enableSnap: null, firstItem: null, hasParallaxImages: null, inactiveSlideOpacity: null, inactiveSlideScale: null, inactiveSlideShift: null, layout: null, layoutCardOffset: null, lockScrollTimeoutDuration: null, lockScrollWhileSnapping: null, loop: null, loopClonesPerSide: null, scrollEnabled: null, scrollInterpolator: null, slideInterpolatedStyle: null, slideStyle: null, shouldOptimizeUpdates: null, swipeThreshold: null, useScrollView: null, vertical: null, onBeforeSnapToItem: null, onSnapToItem: null };
obj[8] = require("emptyFunction").oneOf(["center", "end", "start"]);
obj[9] = require("emptyFunction").number;
obj[10] = require("emptyFunction").number;
obj[11] = require("emptyFunction").bool;
obj[12] = require("emptyFunction").number;
obj[13] = require("emptyFunction").number;
obj[14] = require("emptyFunction").number;
obj[15] = require("get ColorPropType").ViewPropTypes.style;
obj[16] = require("get ColorPropType").ViewPropTypes.style;
obj[17] = require("emptyFunction").bool;
obj[18] = require("emptyFunction").bool;
obj[19] = require("emptyFunction").number;
obj[20] = require("emptyFunction").bool;
obj[21] = require("emptyFunction").number;
obj[22] = require("emptyFunction").number;
obj[23] = require("emptyFunction").number;
obj[24] = require("emptyFunction").oneOf(["default", "stack", "tinder"]);
obj[25] = require("emptyFunction").number;
obj[26] = require("emptyFunction").number;
obj[27] = require("emptyFunction").bool;
obj[28] = require("emptyFunction").bool;
obj[29] = require("emptyFunction").number;
obj[30] = require("emptyFunction").bool;
obj[31] = require("emptyFunction").func;
obj[32] = require("emptyFunction").func;
obj[33] = require("get ColorPropType").ViewPropTypes.style;
obj[34] = require("emptyFunction").bool;
obj[35] = require("emptyFunction").number;
let items1 = [require("emptyFunction").bool, require("emptyFunction").func];
obj[36] = require("emptyFunction").oneOfType(items1);
obj[37] = require("emptyFunction").bool;
obj[38] = require("emptyFunction").func;
obj[39] = require("emptyFunction").func;
importDefaultResultResult.propTypes = obj;
importDefaultResultResult.defaultProps = { activeAnimationType: "timing", activeAnimationOptions: null, activeSlideAlignment: "center", activeSlideOffset: 20, apparitionDelay: 0, autoplay: false, autoplayDelay: 1000, autoplayInterval: 3000, callbackOffsetMargin: 5, containerCustomStyle: {}, contentContainerCustomStyle: {}, enableMomentum: false, enableSnap: true, firstItem: 0, hasParallaxImages: false, inactiveSlideOpacity: 0.7, inactiveSlideScale: 0.9, inactiveSlideShift: 0, layout: "default", lockScrollTimeoutDuration: 1000, lockScrollWhileSnapping: false, loop: false, loopClonesPerSide: 3, scrollEnabled: true, slideStyle: {}, shouldOptimizeUpdates: true, swipeThreshold: 20, useScrollView: !animatedComponent, vertical: false };

export default importDefaultResultResult;