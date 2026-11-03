// === Module 1822: ? ===

// Module 1822
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;

export function createAnimatedComponent(displayName, arg1) {
  const AnimatedComponent = displayName;
  dependencyMap = arg1;
  class AnimatedComponent {
    constructor(arg0) {
      self = this;
      tmp = AnimatedComponent;
      tmp2 = closure_3(this, AnimatedComponent);
      tmp3 = closure_1;
      jsProps = undefined;
      if (closure_1 != null) {
        jsProps = tmp3.jsProps;
      }
      if (jsProps == null) {
        tmp5 = closure_0;
        jsProps = closure_0.jsProps;
      }
      length = undefined;
      if (jsProps != null) {
        length = jsProps.length;
      }
      if (length) {
        obj = {};
        tmp8 = obj;
        tmp9 = tmp3;
        merged = Object.assign(tmp3);
        obj.jsProps = jsProps;
        tmp7 = obj;
      } else {
        tmp7 = tmp3;
      }
      items = [, , , ];
      items[0] = closure_0;
      items[1] = displayName;
      items[2] = tmp.displayName;
      items[3] = tmp7;
      tmp11 = hasOwnProperty;
      obj2 = hasOwnProperty(tmp);
      tmp12 = closure_4;
      if (closure_8()) {
        tmp14 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj2, items, tmp11(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      return tmp12(self, constructResult);
    }
  }
  _inherits(AnimatedComponent, AnimatedComponent(1823));
  const tmp2 = _createClass(AnimatedComponent);
  _createClass = tmp2;
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
    return <closure_2 />;
  }
  animatedComponent.displayName = displayName.displayName || displayName.name || "Component";
  return animatedComponent;
}