// _runtime/metro/00151__.js
import _modDef150 from "00150__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const ReadOnlyText = importDefault;
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
class ReadOnlyText {
  constructor() {
    self = this;
    tmp = c2(this, ReadOnlyText);
    tmp2 = closure_4;
    obj = closure_4(ReadOnlyText);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
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
_inherits(ReadOnlyText, _modDef150);
const items = [
  {
    key: "nodeName",
    get() {
      return "#text";
    },
  },
  {
    key: "nodeType",
    get() {
      return ReadOnlyText(131).TEXT_NODE;
    },
  },
];

export default _createClass(ReadOnlyText, items);
