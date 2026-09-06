// === Module 10579: ? ===

// Module 10579
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _mod10450 from "module_10450" /* 10450 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
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
class ESMergeDateRangeRefiner {
  constructor() {
    self = this;
    tmp = closure_0(this, ESMergeDateRangeRefiner);
    tmp2 = c2;
    obj = c2(ESMergeDateRangeRefiner);
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
_classCallCheck = ESMergeDateRangeRefiner;
_inherits(ESMergeDateRangeRefiner, fn(_mod10450).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*(?:-)\s*$/i;
  }
};
const items = [entry];

export default _createClass(ESMergeDateRangeRefiner, items);