// _runtime/metro/06709__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const Wrap = fn;
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
class Wrap {
  constructor() {
    self = this;
    tmp = c2(this, Wrap);
    tmp2 = closure_4;
    obj = closure_4(Wrap);
    tmp3 = closure_3;
    if (metroRequire()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(Wrap, noop.Component);
const entry = {
  key: "render",
  value: function render() {
    try {
      const self = this;
      const Children = noop.Children;
      const onlyResult = Children.only(this.props.children);
      return noop.cloneElement(onlyResult, { collapsable: false }, onlyResult.props.children);
    } catch (err) {
      const _Error = Error;
      const error = new Error(
        Wrap(6660).tagMessage(
          "GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.",
        ),
      );
      throw error;
    }
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Wrap, items);
const Reanimated = fn(6698).Reanimated;
let animatedComponent;
if (Reanimated != null) {
  if (Reanimated.default != null) {
    animatedComponent = _default.createAnimatedComponent(importDefaultResultResult);
  }
}
if (animatedComponent == null) {
  animatedComponent = importDefaultResultResult;
}

export const Wrap = importDefaultResultResult;
export const AnimatedWrap = animatedComponent;
