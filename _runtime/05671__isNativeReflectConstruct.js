// === Module 5671: _isNativeReflectConstruct ===

// Module 5671 (_isNativeReflectConstruct)
import _inheritsDefault from "_inherits" /* 98 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult2 from "noop" /* 19 */;
import { Reanimated } from "module_5660" /* 5660 */;

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
        error = new Error(Wrap(5622).tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
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