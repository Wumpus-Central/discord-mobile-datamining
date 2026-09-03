// === Module 14903: _isNativeReflectConstruct ===

// Module 14903 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import emptyFunctionDefault from "emptyFunction" /* 9992 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 14902 */;
import closure_1 from "_objectWithoutProperties" /* 109 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

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
  } catch (err) {
  }
}
const AnimatedCircularProgress = ["fill", "prefill"];
const Animated = get_ActivityIndicator.Animated;
const Easing = get_ActivityIndicator.Easing;
let closure_8 = Animated.createAnimatedComponent(_isNativeReflectConstructDefault);
class AnimatedCircularProgress {
  constructor(arg0) {
    self = this;
    closure_0 = global;
    tmp = closure_2(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(closure_0);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    obj = { fillAnimation: null };
    value = new Animated.Value(global.prefill);
    obj[0] = value;
    tmp3Result.state = obj;
    if (global.onFillChange) {
      fillAnimation = tmp3Result.state.fillAnimation;
      addListenerResult = fillAnimation.addListener((value) => prefill.onFillChange(value.value));
    }
    return tmp3Result;
  }
}
importDefaultResult1(AnimatedCircularProgress, noopDefault.PureComponent);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this.animate();
  }
};
let items = [
  obj,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0) {
      const self = this;
      if (arg0.fill !== this.props.fill) {
        self.animate();
      }
    }
  },
  {
    key: "reAnimate",
    value: function reAnimate(arg0, arg1, arg2, arg3) {
      const self = this;
      closure_1 = arg1;
      closure_2 = arg2;
      closure_0 = arg3;
      const obj = { fillAnimation: null };
      const value = new Animated.Value(arg0);
      obj[0] = value;
      this.setState(obj, () => self.animate(closure_1, closure_2, closure_0));
    }
  },
  {
    key: "animate",
    value: function animate(arg0, arg1, arg2) {
      const self = this;
      let fill = arg0;
      if (arg0 < 0) {
        fill = self.props.fill;
      }
      let duration = arg1;
      if (!arg1) {
        duration = self.props.duration;
      }
      let easing = arg2;
      if (!arg2) {
        easing = self.props.easing;
      }
      const timingResult = Animated.timing(self.state.fillAnimation, { useNativeDriver: self.props.useNativeDriver, toValue: fill, easing, duration, delay: self.props.delay });
      timingResult.start(self.props.onAnimationComplete);
      return timingResult;
    }
  },
  {
    key: "animateColor",
    value: function animateColor() {
      const self = this;
      if (this.props.tintColorSecondary) {
        const fillAnimation = self.state.fillAnimation;
        const obj = { inputRange: null, outputRange: null };
        obj[0] = [0, 100];
        const items = [self.props.tintColor, self.props.tintColorSecondary];
        obj[1] = items;
        let tintColor = fillAnimation.interpolate(obj);
      } else {
        tintColor = self.props.tintColor;
      }
      return tintColor;
    }
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      ({ fill, prefill } = props);
      const obj = {};
      const merged = Object.assign(callback(props, AnimatedCircularProgress));
      obj.fill = this.state.fillAnimation;
      obj.tintColor = this.animateColor();
      return <closure_8 />;
    }
  }
];
const importDefaultResultResult = importDefaultResult(AnimatedCircularProgress, items);
obj = {};
let merged = Object.assign(_isNativeReflectConstructDefault.propTypes);
obj.prefill = emptyFunctionDefault.number;
obj.duration = emptyFunctionDefault.number;
obj.easing = emptyFunctionDefault.func;
obj.onAnimationComplete = emptyFunctionDefault.func;
obj.useNativeDriver = emptyFunctionDefault.bool;
obj.delay = emptyFunctionDefault.number;
importDefaultResultResult.propTypes = obj;
obj = { duration: 500, easing: Easing.out(Easing.ease), prefill: 0, useNativeDriver: false, delay: 0 };
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;