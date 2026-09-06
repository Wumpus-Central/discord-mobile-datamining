// _runtime/metro/10491__.js
import _mod10453 from "10453__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
class FRMergeDateTimeRefiner {
  constructor() {
    self = this;
    tmp = closure_0(this, FRMergeDateTimeRefiner);
    tmp2 = c2;
    obj = c2(FRMergeDateTimeRefiner);
    tmp3 = closure_1;
    if (closure_3()) {
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
_classCallCheck = FRMergeDateTimeRefiner;
_inherits(FRMergeDateTimeRefiner, fn(_mod10453).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    const regExp = new RegExp("^\\s*(T|\u00E0|a|au|vers|de|,|-)?\\s*$");
    return regExp;
  },
};
const items = [entry];

export default _createClass(FRMergeDateTimeRefiner, items);
