// === Module 8168: Defs ===

// Module 8168 (Defs)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _modDef8169 from "module_8169" /* 8169 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(Defs, items);
importDefaultResultResult.displayName = "Defs";

export default importDefaultResultResult;