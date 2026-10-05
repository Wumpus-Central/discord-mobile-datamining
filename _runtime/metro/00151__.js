// === Module 151: ? ===

// Module 151
import _modDef150 from "module_150" /* 150 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const require = globalThis.__r;

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
class ReadOnlyText {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ReadOnlyText);
    const obj = _getPrototypeOf(ReadOnlyText);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c3(self, constructResult);
  }
}
_inherits(ReadOnlyText, _modDef150);
let obj = {
  key: "nodeName",
  get() {
    return "#text";
  }
};
const items = [
  obj,
  {
    key: "nodeType",
    get() {
      return require("module_131").TEXT_NODE;
    }
  }
];

export default _createClass(ReadOnlyText, items);