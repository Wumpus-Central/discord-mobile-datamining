// === Module 8816: ? ===

// Module 8816
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8756 from "module_8756" /* 8756 */;
import _modDef8817 from "module_8817" /* 8817 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const Path = fn;
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
class Path {
  constructor() {
    self = this;
    tmp = closure_3(this, Path);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(Path);
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
_inherits(Path, _modDef8756);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const obj = {};
    const merged = Object.assign(Path(8747).extract(this, props));
    obj.d = props.d;
    const obj2 = Path(8747);
    const obj3 = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged1 = Object.assign(obj);
    return jsx(_modDef8817, {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    });
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Path, items);
importDefaultResultResult.displayName = "Path";

export default importDefaultResultResult;