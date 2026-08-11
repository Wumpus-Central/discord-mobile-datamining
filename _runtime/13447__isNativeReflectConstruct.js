// _runtime/13447__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let I18nManager;
let Platform;
let closure_6;
let Pagination = importDefault;
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
({ Platform, View: closure_6, I18nManager } = get_ActivityIndicator);
const isRTL = I18nManager.isRTL;
class Pagination {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, Pagination);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(Pagination);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    dotColor = global.dotColor;
    tmp3Result = tmp3(self, constructResult);
    if (dotColor) {
      dotColor = !global.inactiveDotColor;
    }
    if (!dotColor) {
      dotColor2 = global.dotColor;
      inactiveDotColor = !dotColor2;
      if (!dotColor2) {
        inactiveDotColor = global.inactiveDotColor;
      }
      dotColor = inactiveDotColor;
    }
    if (dotColor) {
      tmp7 = globalThis;
      _console = console;
      str = "react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`";
      warnResult = console.warn("react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`");
    }
    tmp9 = global.dotElement && !global.inactiveDotElement;
    if (!tmp9) {
      dotElement = global.dotElement;
      inactiveDotElement = !dotElement;
      if (!dotElement) {
        inactiveDotElement = global.inactiveDotElement;
      }
      tmp9 = inactiveDotElement;
    }
    if (tmp9) {
      tmp10 = globalThis;
      _console2 = console;
      str2 = "react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`";
      warnResult1 = console.warn("react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`");
    }
    tmp12 = global.tappableDots && undefined === global.carouselRef;
    if (tmp12) {
      tmp13 = globalThis;
      _console3 = console;
      str3 = "react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`";
      warnResult2 = console.warn("react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`");
    }
    return tmp3Result;
  }
}
require("_inherits")(Pagination, require("noop").PureComponent);
let obj = {
  key: "_needsRTLAdaptations",
  value: function _needsRTLAdaptations() {
    let tmp = isRTL;
    if (isRTL) {
      tmp = !this.props.vertical;
    }
    return tmp;
  }
};
let items = [
  obj,
  {
    key: "_activeDotIndex",
    get() {
      let activeDotIndex;
      let dotsLength;
      ({ activeDotIndex, dotsLength } = this.props);
      let diff = activeDotIndex;
      if (this._needsRTLAdaptations()) {
        diff = dotsLength - activeDotIndex - 1;
      }
      return diff;
    }
  },
  {
    key: "dots",
    get() {
      let carouselRef;
      let _classCallCheck;
      let dependencyMap;
      let dotsLength;
      let renderDots;
      let tappableDots;
      let self = this;
      self = this;
      ({ carouselRef, dotsLength, dotElement: dependencyMap, inactiveDotElement: _classCallCheck, renderDots, tappableDots } = this.props);
      if (renderDots) {
        return renderDots(self._activeDotIndex, dotsLength, self);
      } else {
        const obj = { carouselRef: null, tappable: null, activeOpacity: null, color: null, containerStyle: null, style: null, inactiveColor: null, inactiveOpacity: null, inactiveScale: null, inactiveStyle: null, animatedDuration: null, animatedFriction: null, animatedTension: null, delayPressInDot: null };
        obj[0] = carouselRef;
        if (tappableDots) {
          tappableDots = undefined !== carouselRef;
        }
        obj[1] = tappableDots;
        obj[2] = tmp;
        obj[3] = tmp2;
        obj[4] = tmp3;
        obj[5] = tmp4;
        obj[6] = tmp5;
        obj[7] = tmp6;
        obj[8] = tmp7;
        obj[9] = tmp8;
        obj[10] = tmp9;
        obj[11] = tmp10;
        obj[12] = tmp11;
        obj[13] = tmp12;
        Pagination = jsx(Pagination(13448), { carouselRef: null, tappable: null, activeOpacity: null, color: null, containerStyle: null, style: null, inactiveColor: null, inactiveOpacity: null, inactiveScale: null, inactiveStyle: null, animatedDuration: null, animatedFriction: null, animatedTension: null, delayPressInDot: null });
        const _Array = Array;
        const tmp13 = jsx;
        const tmp16 = Pagination(13448);
        const items = [];
        HermesBuiltin.arraySpread(Array(dotsLength).keys(), 0);
        return items.map((index) => {
          let tmp3 = tmp ? closure_1 : _classCallCheck;
          if (!tmp3) {
            tmp3 = closure_0;
          }
          return outer1_5.cloneElement(tmp3, { key: "pagination-dot-" + index, active: index === self._activeDotIndex, index });
        });
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let accessibilityLabel;
      let containerStyle;
      let dotsLength;
      const self = this;
      ({ dotsLength, containerStyle, accessibilityLabel } = this.props);
      if (dotsLength) {
        if (dotsLength >= 2) {
          const items = [Pagination(13449).sliderPagination, , ];
          let str2 = "column";
          if (!tmp) {
            let str = "row";
            if (self._needsRTLAdaptations()) {
              str = "row-reverse";
            }
            str2 = str;
          }
          let obj = { flexDirection: null };
          obj[0] = str2;
          items[1] = obj;
          if (!containerStyle) {
            containerStyle = {};
          }
          items[2] = containerStyle;
          obj = { pointerEvents: "box-none", style: null, accessible: null, accessibilityLabel: null, children: null };
          obj[1] = items;
          obj[2] = accessibilityLabel;
          obj[3] = accessibilityLabel;
          obj[4] = self.dots;
          return <closure_6 pointerEvents="box-none" style={null} accessible={null} accessibilityLabel={null}>{null}</closure_6>;
        }
      }
      return false;
    }
  }
];
const importDefaultResultResult = importDefaultResult(Pagination, items);
obj = { activeDotIndex: require("emptyFunction").number.isRequired, dotsLength: require("emptyFunction").number.isRequired, activeOpacity: require("emptyFunction").number, carouselRef: require("emptyFunction").object, containerStyle: require("get ColorPropType").ViewPropTypes.style, dotColor: require("emptyFunction").string, dotContainerStyle: require("get ColorPropType").ViewPropTypes.style, dotElement: require("emptyFunction").element, dotStyle: require("get ColorPropType").ViewPropTypes.style, inactiveDotColor: require("emptyFunction").string, inactiveDotElement: require("emptyFunction").element, inactiveDotOpacity: require("emptyFunction").number, inactiveDotScale: require("emptyFunction").number, inactiveDotStyle: require("get ColorPropType").ViewPropTypes.style, renderDots: require("emptyFunction").func, tappableDots: require("emptyFunction").bool, vertical: require("emptyFunction").bool, accessibilityLabel: require("emptyFunction").string, animatedDuration: require("emptyFunction").number, animatedFriction: require("emptyFunction").number, animatedTension: require("emptyFunction").number, delayPressInDot: require("emptyFunction").number };
importDefaultResultResult.propTypes = obj;
importDefaultResultResult.defaultProps = { inactiveDotOpacity: 0.5, inactiveDotScale: 0.5, tappableDots: false, vertical: false, animatedDuration: 250, animatedFriction: 4, animatedTension: 50, delayPressInDot: 0 };

export default importDefaultResultResult;