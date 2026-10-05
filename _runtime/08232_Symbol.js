// _runtime/08232_Symbol.js
import Fragment from "react/00021_Fragment.js";
import extractViewBoxDefault from "08149_extractViewBox.js";
import multiplyMatricesDefault from "08160_multiplyMatrices.js";
import _modDef8233 from "metro/08233__.js";
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
    _modDef8233;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractViewBoxDefault(props));
    return (
      <tmp
        ref={function ref(arg0) {
          return self.refMethod(arg0);
        }}
      >
        {children}
      </tmp>
    );
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Symbol, items);
importDefaultResultResult.displayName = "Symbol";

export default importDefaultResultResult;
