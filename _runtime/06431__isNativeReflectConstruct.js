// _runtime/06431__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult2 from "00019_noop.js";
import { Reanimated } from "metro/06420__.js";

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Wrap {
  constructor() {
    self = this;
    tmp = closure_2(this, Wrap);
    tmp2 = closure_4;
    obj = closure_4(Wrap);
    tmp3 = closure_3;
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
_inheritsDefault(Wrap, importDefaultResult2.Component);
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
        error = new Error(Wrap(6382).tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
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