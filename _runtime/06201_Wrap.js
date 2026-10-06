// === Module 6201: Wrap ===

// Module 6201 (Wrap)
import tagMessage from "tagMessage" /* 6152 */;
import Reanimated2 from "Reanimated" /* 6190 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Wrap {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Wrap);
    const obj = _getPrototypeOf(Wrap);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(Wrap, react.Component);
const entry = {
  key: "render",
  value: function render() {
    try {
      const self = this;
      const Children = react.Children;
      const onlyResult = Children.only(this.props.children);
      return react.cloneElement(onlyResult, { collapsable: false }, onlyResult.props.children);
    } catch (err) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const obj = tagMessage;
      const error = new Error(obj.tagMessage("GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
      throw error;
    }
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Wrap, items);
const Reanimated = Reanimated2.Reanimated;
let animatedComponent;
if (Reanimated != null) {
  if (Reanimated.default != null) {
    animatedComponent = _default.createAnimatedComponent(importDefaultResultResult);
  }
}
if (animatedComponent == null) {
  animatedComponent = importDefaultResultResult;
}
const Wrap_export = importDefaultResultResult;

export { Wrap_export as Wrap };
export const AnimatedWrap = animatedComponent;