// === Module 8265: Symbol ===

// Module 8265 (Symbol)
import Fragment from "Fragment" /* 21 */;
import extractViewBoxDefault from "extractViewBox" /* 8182 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 8193 */;
import _modDef8266 from "module_8266" /* 8266 */;
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
const jsx = Fragment.jsx;
class Symbol {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Symbol);
    const obj = _getPrototypeOf(Symbol);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(Symbol, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const children = props.children;
    const obj = { name: props.id };
    _modDef8266;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractViewBoxDefault(props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }}>{children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Symbol, items);
importDefaultResultResult.displayName = "Symbol";

export default importDefaultResultResult;