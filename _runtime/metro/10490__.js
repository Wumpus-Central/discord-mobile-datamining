// === Module 10490: ? ===

// Module 10490
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10446 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
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
class FRTimeExpressionParser {
  constructor() {
    self = this;
    tmp = closure_0(this, FRTimeExpressionParser);
    tmp2 = c2;
    obj = c2(FRTimeExpressionParser);
    tmp3 = closure_1;
    if (closure_4()) {
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
_classCallCheck = FRTimeExpressionParser;
_inherits(FRTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const entry = {
  key: "primaryPrefix",
  value: function primaryPrefix() {
    return "(?:(?:[\u00E0a])\\s*)?";
  }
};
let items = [
  entry,
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|[\u00E0a]|\\?)\\s*";
    }
  },
  {
    key: "extractPrimaryTimeComponents",
    value: function extractPrimaryTimeComponents(arg0, arg1) {
      let fnResult = null;
      if (!str.match(/^\s*\d{4}\s*$/)) {
        const self = this;
        let fn = _get(_getPrototypeOf(_classCallCheck.prototype), "extractPrimaryTimeComponents", this);
        if (typeof fn === "function") {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0, arg1];
        fnResult = fn(items);
      }
      return fnResult;
    }
  }
];

export default _createClass(FRTimeExpressionParser, items);