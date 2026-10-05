// _runtime/08168_Defs.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import _modDef8169 from "metro/08169__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
const Component = react2.Component;
const jsx = Fragment.jsx;
class Defs {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, Defs);
    const obj = _getPrototypeOf(Defs);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(Defs, Component);
const entry = {
  key: "render",
  value: function render() {
    return jsx(_modDef8169, { children: this.props.children });
  },
};
const items = [entry];
const importDefaultResultResult = _createClass(Defs, items);
importDefaultResultResult.displayName = "Defs";

export default importDefaultResultResult;
