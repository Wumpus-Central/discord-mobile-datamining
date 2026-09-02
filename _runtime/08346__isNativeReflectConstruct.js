// _runtime/08346__isNativeReflectConstruct.js
import noopAll from "00019_noop.js";
import _inheritsDefault from "00098__inherits.js";
import _isNativeReflectConstructDefault from "08274__isNativeReflectConstruct.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import { jsx } from "react/00021_jsxProd.js";

const Symbol = importDefault;
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
noopAll;
class Symbol {
  constructor() {
    self = this;
    tmp = closure_2(this, Symbol);
    tmp2 = closure_4;
    obj = closure_4(Symbol);
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
_inheritsDefault(Symbol, _isNativeReflectConstructDefault);
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = { name: props.id };
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        },
      };
      const merged = Object.assign(obj);
      const merged1 = Object.assign(self(8263)(props));
      obj.children = props.children;
      return jsx(self(8347), {
        ref(arg0) {
          return self.refMethod(arg0);
        },
      });
    },
  },
];
const importDefaultResultResult = importDefaultResult(Symbol, items);
importDefaultResultResult.displayName = "Symbol";

export default importDefaultResultResult;
