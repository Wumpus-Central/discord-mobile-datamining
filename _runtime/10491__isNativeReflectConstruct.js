// _runtime/10491__isNativeReflectConstruct.js
import _isNativeReflectConstruct2 from "10453__isNativeReflectConstruct.js";
import FRMergeDateTimeRefiner from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
      const obj = { default: null };
      obj[0] = __esModule;
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
    tmp = FRMergeDateTimeRefiner(this, FRMergeDateTimeRefiner);
    tmp2 = closure_2;
    obj = closure_2(FRMergeDateTimeRefiner);
    tmp3 = closure_1;
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
_inherits(FRMergeDateTimeRefiner, fn(_isNativeReflectConstruct2).default);
const items = [
  {
    key: "patternBetween",
    value: function patternBetween() {
      const regExp = new RegExp("^\\s*(T|\u00E0|a|au|vers|de|,|-)?\\s*$");
      return regExp;
    },
  },
];

export default _createClass(FRMergeDateTimeRefiner, items);
