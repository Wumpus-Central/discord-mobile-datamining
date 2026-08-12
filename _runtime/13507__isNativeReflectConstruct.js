// _runtime/13507__isNativeReflectConstruct.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importDefaultResult1 from "_inherits";
import importDefaultResult3 from "emptyFunction";

let Animated;
let c10;
let c9;
let closure_12;
let error;
let map1;
let unpackModuleId;
const ParallaxImage = importDefault;
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
let closure_2 = ["scrollPosition", "dimensions", "vertical", "sliderWidth", "sliderHeight", "parallaxFactor", "style", "AnimatedImageComponent"];
({ View: error, Animated } = get_ActivityIndicator);
({ Easing: c9, ActivityIndicator: c10, findNodeHandle: unpackModuleId } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
class ParallaxImage {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, ParallaxImage);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(ParallaxImage);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { offset: 0, width: 0, height: 0, status: 1, animOpacity: null };
    value = new Animated.Value(0);
    obj[4] = value;
    tmp3Result.state = obj;
    _onLoad = tmp3Result._onLoad;
    tmp3Result._onLoad = _onLoad.bind(tmp3Result);
    _onError = tmp3Result._onError;
    tmp3Result._onError = _onError.bind(tmp3Result);
    _measureLayout = tmp3Result._measureLayout;
    tmp3Result._measureLayout = _measureLayout.bind(tmp3Result);
    return tmp3Result;
  }
}
require("_inherits")(ParallaxImage, require("noop").Component);
let obj = {
  key: "setNativeProps",
  value: function setNativeProps(arg0) {
    const _container = this._container;
    _container.setNativeProps(arg0);
  }
};
let items = [
  obj,
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._mounted = true;
      const timerId = setTimeout(() => {
        self._measureLayout();
      }, 0);
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  },
  {
    key: "_measureLayout",
    value: function _measureLayout() {
      let ParallaxImage;
      let carouselRef;
      let closure_2;
      let _objectWithoutProperties;
      let _classCallCheck;
      let _possibleConstructorReturn;
      let dependencyMap;
      let self = this;
      self = this;
      if (this._container) {
        ({ dimensions: dependencyMap, vertical: closure_2, carouselRef, sliderWidth: _objectWithoutProperties, sliderHeight: _classCallCheck, itemWidth: _possibleConstructorReturn, itemHeight: ParallaxImage } = self.props);
        if (carouselRef) {
          const _container = self._container;
          _container.measureLayout(callback4(carouselRef), (arg0, arg1, result, result) => {
            if (closure_2) {
              let diff = arg1 - (_classCallCheck - closure_0) / 2;
            } else {
              diff = arg0 - (_objectWithoutProperties - _possibleConstructorReturn) / 2;
            }
            const obj = { offset: diff, width: null, height: null };
            const size = closure_1;
            if (closure_1) {
              if (size.width) {
                let width = size.width;
              }
              obj[1] = width;
              if (size) {
                if (size.height) {
                  let height = size.height;
                }
                obj[2] = height;
                tmp9(obj);
              }
              const _Math = Math;
              height = Math.ceil(result);
            }
            width = Math.ceil(result);
          });
        }
      }
    }
  },
  {
    key: "_onLoad",
    value: function _onLoad(arg0) {
      let self = this;
      self = this;
      const onLoad = this.props.onLoad;
      if (this._mounted) {
        self.setState({ status: 2 });
        if (onLoad) {
          onLoad(arg0);
        }
        const obj = { toValue: 1, duration: null, easing: null, isInteraction: false, useNativeDriver: true };
        obj[1] = tmp2;
        obj[2] = closure_9.out(closure_9.quad);
        Animated.timing(tmp, obj).start(() => {
          self.setState({ status: 3 });
        });
        const timingResult = Animated.timing(tmp, obj);
      }
    }
  },
  {
    key: "_onError",
    value: function _onError(arg0) {
      const onError = this.props.onError;
      this.setState({ status: 4 });
      if (onError) {
        onError(arg0);
      }
    }
  },
  {
    key: "image",
    get() {
      let AnimatedImageComponent;
      let animOpacity;
      let dimensions;
      let height;
      let offset;
      let parallaxFactor;
      let scrollPosition;
      let sliderHeight;
      let sliderWidth;
      let status;
      let style;
      let vertical;
      let width;
      const self = this;
      const state = this.state;
      ({ offset, width, height } = state);
      const props = this.props;
      ({ scrollPosition, dimensions, vertical, sliderWidth, sliderHeight } = props);
      ({ status, animOpacity } = state);
      ({ parallaxFactor, style, AnimatedImageComponent } = props);
      let tmp2 = width;
      if (vertical) {
        tmp2 = height;
      }
      const result = tmp2 * parallaxFactor;
      let sum = width;
      if (!vertical) {
        sum = width + 2 * result;
      }
      let obj = { width: sum, height: null, opacity: null, transform: null };
      let sum1 = height;
      if (vertical) {
        sum1 = height + 2 * result;
      }
      obj[1] = sum1;
      obj[2] = animOpacity;
      if (scrollPosition) {
        let num3 = 0;
        if (!vertical) {
          obj = { inputRange: null, outputRange: null, extrapolate: "clamp" };
          const items = [offset - sliderWidth, offset + sliderWidth];
          obj[0] = items;
          const items1 = [-result, result];
          obj[1] = items1;
          num3 = scrollPosition.interpolate(obj);
        }
        obj = { translateX: null };
        obj[0] = num3;
        const items2 = [obj, ];
        let num4 = 0;
        if (vertical) {
          const obj1 = { inputRange: null, outputRange: null, extrapolate: "clamp" };
          const items3 = [offset - sliderHeight, offset + sliderHeight];
          obj1[0] = items3;
          const items4 = [-result, result];
          obj1[1] = items4;
          num4 = scrollPosition.interpolate(obj1);
        }
        const obj2 = { translateY: null };
        obj2[0] = num4;
        items2[1] = obj2;
        let items5 = items2;
      } else {
        items5 = [];
      }
      obj[3] = items5;
      const obj3 = {};
      const merged = Object.assign(callback(props, closure_2));
      const items6 = [ParallaxImage(13508).image, style, { position: "relative" }, obj];
      obj3.style = items6;
      obj3.onLoad = self._onLoad;
      let _onError;
      if (3 !== status) {
        _onError = self._onError;
      }
      obj3.onError = _onError;
      return closure_12(AnimatedImageComponent, obj3);
    }
  },
  {
    key: "spinner",
    get() {
      const props = this.props;
      let tmp = 1 !== this.state.status;
      if (!tmp) {
        tmp = !props.showSpinner;
      }
      let tmp2 = !tmp;
      if (!tmp) {
        let obj = { style: null, children: null };
        obj[0] = ParallaxImage(13508).loaderContainer;
        obj = { size: "small", color: null, animating: true };
        obj[1] = props.spinnerColor;
        obj[1] = callback5(closure_10, obj);
        tmp2 = callback5(closure_7, obj);
      }
      return tmp2;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const obj = {
        ref(_container) {
          self._container = _container;
        },
        pointerEvents: "none",
        style: null,
        onLayout: null,
        children: null
      };
      const items = [this.props.containerStyle, self(13508).container];
      obj[2] = items;
      obj[3] = this._measureLayout;
      const items1 = [, ];
      ({ image: arr2[0], spinner: arr2[1] } = this);
      obj[4] = items1;
      return callback6(closure_7, obj);
    }
  }
];
const importDefaultResultResult = importDefaultResult(ParallaxImage, items);
obj = {};
let merged = Object.assign(require("get ColorPropType").ImagePropTypes);
obj.carouselRef = require("emptyFunction").object;
obj.itemHeight = require("emptyFunction").number;
obj.itemWidth = require("emptyFunction").number;
obj.scrollPosition = require("emptyFunction").object;
obj.sliderHeight = require("emptyFunction").number;
obj.sliderWidth = require("emptyFunction").number;
obj.vertical = require("emptyFunction").bool;
obj.containerStyle = require("get ColorPropType").ViewPropTypes.style;
obj = { width: require("emptyFunction").number, height: require("emptyFunction").number };
obj.dimensions = require("emptyFunction").shape(obj);
obj.fadeDuration = require("emptyFunction").number;
obj.parallaxFactor = require("emptyFunction").number;
obj.showSpinner = require("emptyFunction").bool;
obj.spinnerColor = require("emptyFunction").string;
let items1 = [require("emptyFunction").func, require("emptyFunction").object];
obj.AnimatedImageComponent = require("emptyFunction").oneOfType(items1);
importDefaultResultResult.propTypes = obj;
importDefaultResultResult.defaultProps = { containerStyle: {}, fadeDuration: 500, parallaxFactor: 0.3, showSpinner: true, spinnerColor: "rgba(0, 0, 0, 0.4)", AnimatedImageComponent: Animated.Image };

export default importDefaultResultResult;