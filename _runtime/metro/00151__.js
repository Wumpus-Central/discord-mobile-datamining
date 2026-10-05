// _runtime/metro/00151__.js
import _modDef150 from "00150__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const require = globalThis.__r;

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
  },
};
const items = [
  obj,
  {
    key: "nodeType",
    get() {
      return require("00131__.js").TEXT_NODE;
    },
  },
];

export default _createClass(ReadOnlyText, items);
