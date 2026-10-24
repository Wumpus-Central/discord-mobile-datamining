// === Module 8002: ? ===

// Module 8002
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8001 from "module_8001" /* 8001 */;
import _modDef8003 from "module_8003" /* 8003 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeColorMatrix = fn;
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
class FeColorMatrix {
  constructor() {
    self = this;
    tmp = closure_3(this, FeColorMatrix);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeColorMatrix);
    tmp3 = closure_4;
    if (closure_7()) {
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
_inherits(FeColorMatrix, _modDef8001);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(FeColorMatrix(8000).extractFilter(this.props));
    const obj2 = FeColorMatrix(8000);
    const merged1 = Object.assign(FeColorMatrix(8000).extractIn(this.props));
    const obj3 = FeColorMatrix(8000);
    const merged2 = Object.assign(FeColorMatrix(8000).extractFeColorMatrix(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeColorMatrix, items);
importDefaultResultResult.displayName = "FeColorMatrix";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.type = "matrix";
obj.values = "";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;