// === Module 10194: ? ===

// Module 10194
import _mod10195 from "module_10195" /* 10195 */;
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
class ENMergeDateTimeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMergeDateTimeRefiner);
    const obj = _getPrototypeOf(ENMergeDateTimeRefiner);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return map(self, constructResult);
  }
}
_inherits(ENMergeDateTimeRefiner, fn(_mod10195).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    const regExp = new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|\u2219|:)?\\s*$");
    return regExp;
  }
};
const items = [entry];

export default _createClass(ENMergeDateTimeRefiner, items);