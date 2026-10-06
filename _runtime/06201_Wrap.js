// _runtime/06201_Wrap.js
import tagMessage from "06152_tagMessage.js";
import Reanimated2 from "06190_Reanimated.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import react from "00019_react.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
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
      const error = new Error(
        obj.tagMessage(
          "GestureDetector got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.",
        ),
      );
      throw error;
    }
  },
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
