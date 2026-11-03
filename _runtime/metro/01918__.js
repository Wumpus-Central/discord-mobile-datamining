// _runtime/metro/01918__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _createClass from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;

export function createAnimatedComponent(displayName) {
  const AnimatedComponent = displayName;
  class AnimatedComponent {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, AnimatedComponent);
      items = [,];
      items[0] = closure_0;
      items[1] = displayName;
      tmp2 = hasOwnProperty;
      obj = hasOwnProperty(AnimatedComponent);
      tmp3 = closure_4;
      if (closure_8()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp3(self, constructResult);
    }
  }
  _inherits(AnimatedComponent, AnimatedComponent(1876));
  const tmp2 = _createClass(AnimatedComponent);
  dependencyMap = tmp2;
  tmp2.displayName = "AnimatedComponent(" + displayName.displayName || displayName.name || "Component" + ")";
  function animatedComponent(ref) {
    const obj = {};
    const merged = Object.assign(ref);
    let tmp4 = null;
    obj.ref = null;
    if (null !== ref.ref) {
      const obj2 = { forwardedRef: ref.ref };
      tmp4 = obj2;
    }
    const merged1 = Object.assign(tmp4);
    return <closure_1 />;
  }
  animatedComponent.displayName = displayName.displayName || displayName.name || "Component";
  return animatedComponent;
}
