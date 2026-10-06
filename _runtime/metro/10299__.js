// === Module 10299: ? ===

// Module 10299
import _mod10192 from "module_10192" /* 10192 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  };
}
class ZHHansMergeDateRangeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHansMergeDateRangeRefiner);
    const obj = _getPrototypeOf(ZHHansMergeDateRangeRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(ZHHansMergeDateRangeRefiner, fn(_mod10192).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*(至|到|-|~|～|－|ー)\s*$/i;
  }
};
const items = [entry];

export default _createClass(ZHHansMergeDateRangeRefiner, items);