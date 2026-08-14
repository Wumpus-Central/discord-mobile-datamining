// _runtime/05542__isNativeReflectConstruct.js
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult2 from "noop";
import { Reanimated } from "module_5531";

const Wrap = arg1;
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
class Wrap {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Wrap);
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(Wrap);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
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
require("_inherits")(Wrap, importDefaultResult2.Component);
const items = [
  {
    key: "render",
    value: function render() {
      try {
        const self = this;
        const Children = importDefaultResult2.Children;
        const onlyResult = Children.only(this.props.children);
        return importDefaultResult2.cloneElement(onlyResult, { collapsable: false }, onlyResult.props.children);
      } catch (err) {
        const _Error = Error;
        const error = new Error(Wrap(5493).tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
        throw error;
      }
    }
  }
];
const importDefaultResultResult = importDefaultResult(Wrap, items);
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