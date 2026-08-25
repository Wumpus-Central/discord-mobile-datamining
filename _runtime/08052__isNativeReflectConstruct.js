// === Module 8052: _isNativeReflectConstruct ===

// Module 8052 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import _inheritsDefault from "_inherits" /* 98 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 8009 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import { jsx } from "jsxProd" /* 21 */;

const Filter = importDefault;
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
noopDefault;
class Filter {
  constructor() {
    self = this;
    tmp = closure_2(this, Filter);
    tmp2 = closure_4;
    obj = closure_4(Filter);
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
_inheritsDefault(Filter, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = { name: props.id, x: props.x, y: props.y, width: props.width, height: props.height, filterUnits: props.filterUnits, primitiveUnits: props.primitiveUnits };
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const merged = Object.assign(obj);
      obj.children = this.props.children;
      return jsx(self(8053), {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Filter, items);
importDefaultResultResult.displayName = "Filter";
importDefaultResultResult.defaultProps = { x: "-10%", y: "-10%", width: "120%", height: "120%", filterUnits: "objectBoundingBox", primitiveUnits: "userSpaceOnUse" };

export default importDefaultResultResult;