// === Module 8520: ? ===

// Module 8520
import _modDef8477 from "module_8477" /* 8477 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

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
const jsx = fn(21).jsx;
class Filter {
  constructor() {
    self = this;
    tmp = c2(this, Filter);
    tmp2 = closure_4;
    obj = closure_4(Filter);
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
_inherits(Filter, _modDef8477);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const size = { name: props.id, x: props.x, y: props.y, width: props.width, height: props.height, filterUnits: props.filterUnits, primitiveUnits: props.primitiveUnits };
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(size);
    obj.children = this.props.children;
    return jsx(Filter(8521), {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Filter, items);
importDefaultResultResult.displayName = "Filter";
importDefaultResultResult.defaultProps = { x: "-10%", y: "-10%", width: "120%", height: "120%", filterUnits: "objectBoundingBox", primitiveUnits: "userSpaceOnUse" };

export default importDefaultResultResult;