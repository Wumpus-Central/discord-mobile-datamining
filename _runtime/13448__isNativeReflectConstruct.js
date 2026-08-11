// _runtime/13448__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c5;
let closure_6;
let error;
const PaginationDot = importDefault;
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
({ Animated: c5, Easing: closure_6, TouchableOpacity: error } = get_ActivityIndicator);
class PaginationDot {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, PaginationDot);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(PaginationDot);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { animColor: null, animOpacity: null, animTransform: null };
    value = new Animated.Value(0);
    obj[0] = value;
    value1 = new Animated.Value(0);
    obj[1] = value1;
    value2 = new Animated.Value(0);
    obj[2] = value2;
    tmp3Result.state = obj;
    return tmp3Result;
  }
}
require("_inherits")(PaginationDot, require("noop").PureComponent);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    if (this.props.active) {
      self._animate(1);
    }
  }
};
let items = [
  obj,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(active) {
      const self = this;
      if (active.active !== this.props.active) {
        let num = 0;
        if (self.props.active) {
          num = 1;
        }
        self._animate(num);
      }
    }
  },
  {
    key: "_animate",
    value: function _animate(arg0) {
      let animColor;
      let animOpacity;
      let animTransform;
      let animatedFriction;
      let animatedTension;
      let props;
      let state;
      let num = arg0;
      if (arg0 === undefined) {
        num = 0;
      }
      ({ state, props } = this);
      let obj = { toValue: num, duration: props.animatedDuration, isInteraction: false, useNativeDriver: !this._shouldAnimateColor };
      let obj1 = RN;
      obj = { easing: linear.linear };
      ({ animColor, animOpacity, animTransform } = state);
      ({ animatedFriction, animatedTension } = props);
      const merged = Object.assign(obj);
      const items = [RN.timing(animOpacity, obj), ];
      obj = { friction: animatedFriction, tension: animatedTension };
      const merged1 = Object.assign(obj);
      items[1] = RN.spring(animTransform, obj);
      if (this._shouldAnimateColor) {
        obj1 = { easing: null };
        obj1[0] = linear.linear;
        const merged2 = Object.assign(obj);
        items.push(obj1.timing(animColor, obj1));
      }
      obj1.parallel(items).start();
    }
  },
  {
    key: "_shouldAnimateColor",
    get() {
      const props = this.props;
      return props.color && props.inactiveColor;
    }
  },
  {
    key: "render",
    value: function render() {
      let PaginationDot;
      let active;
      let activeOpacity;
      let animColor;
      let animOpacity;
      let animTransform;
      let color;
      let containerStyle;
      let delayPressInDot;
      let dependencyMap;
      let inactiveColor;
      let inactiveScale;
      let inactiveStyle;
      let style;
      let tappable;
      ({ animColor, animOpacity, animTransform } = this.state);
      const props = this.props;
      ({ active, carouselRef: PaginationDot, containerStyle, index: dependencyMap, style, tappable } = props);
      let obj = { opacity: animOpacity.interpolate({ inputRange: [0, 1], outputRange: items }), transform: null };
      items = [props.inactiveOpacity, ];
      let num = 1;
      items[1] = 1;
      ({ activeOpacity, color, inactiveColor, inactiveStyle, inactiveScale, delayPressInDot } = props);
      obj = { scale: animTransform.interpolate({ inputRange: [0, 1], outputRange: items1 }) };
      items1 = [inactiveScale, 1];
      const items2 = [obj];
      obj[1] = items2;
      if (this._shouldAnimateColor) {
        obj = { backgroundColor: null };
        const obj1 = { inputRange: null, outputRange: null };
        obj1[0] = [0, 1];
        const items3 = [inactiveColor, color];
        obj1[1] = items3;
        obj[0] = animColor.interpolate(obj1);
        let obj2 = obj;
      } else {
        obj2 = {};
      }
      const items4 = [PaginationDot(13449).sliderPaginationDotContainer, ];
      if (!containerStyle) {
        containerStyle = {};
      }
      items4[1] = containerStyle;
      const items5 = [PaginationDot(13449).sliderPaginationDot, , , , ];
      if (!style) {
        style = {};
      }
      items5[1] = style;
      let obj3 = !active;
      if (!active) {
        obj3 = inactiveStyle;
      }
      if (!obj3) {
        obj3 = {};
      }
      items5[2] = obj3;
      items5[3] = obj;
      items5[4] = obj2;
      const obj4 = { accessible: false, style: items4, activeOpacity: null, onPress: null, delayPressIn: null, children: null };
      if (tappable) {
        num = activeOpacity;
      }
      obj4[2] = num;
      let fn;
      if (tappable) {
        fn = () => {
          try {
            let current = ref.current;
            if (!current) {
              current = ref;
            }
            current._snapToItem(current._getPositionIndex(closure_1));
          } catch (tmp3) {
            const _console = console;
            console.warn("react-native-snap-carousel | Pagination: `carouselRef` has to be a Carousel ref.\n" + tmp3);
          }
        };
      }
      obj4[3] = fn;
      obj4[4] = delayPressInDot;
      obj4[5] = <RN.View style={items5} />;
      return <closure_7 accessible={false} style={items4} activeOpacity={null} onPress={null} delayPressIn={null}>{null}</closure_7>;
    }
  }
];
const importDefaultResultResult = importDefaultResult(PaginationDot, items);
obj = { inactiveOpacity: require("emptyFunction").number.isRequired, inactiveScale: require("emptyFunction").number.isRequired, active: require("emptyFunction").bool, activeOpacity: require("emptyFunction").number, carouselRef: require("emptyFunction").object, color: require("emptyFunction").string, containerStyle: require("get ColorPropType").ViewPropTypes.style, inactiveColor: require("emptyFunction").string, inactiveStyle: require("get ColorPropType").ViewPropTypes.style, index: require("emptyFunction").number, style: require("get ColorPropType").ViewPropTypes.style, tappable: require("emptyFunction").bool };
importDefaultResultResult.propTypes = obj;

export default importDefaultResultResult;