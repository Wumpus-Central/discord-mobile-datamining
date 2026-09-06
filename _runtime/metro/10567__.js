// _runtime/metro/10567__.js
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _mod10450 from "10450__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
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
_possibleConstructorReturn;
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
class RUMergeDateRangeRefiner {
  constructor() {
    self = this;
    tmp = closure_0(this, RUMergeDateRangeRefiner);
    tmp2 = c2;
    obj = c2(RUMergeDateRangeRefiner);
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
_classCallCheck = RUMergeDateRangeRefiner;
_inherits(RUMergeDateRangeRefiner, fn(_mod10450).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*(и до|и по|до|по|-)\s*$/i;
  },
};
const items = [entry];

export default _createClass(RUMergeDateRangeRefiner, items);
