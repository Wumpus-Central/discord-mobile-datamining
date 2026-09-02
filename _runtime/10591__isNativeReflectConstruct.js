// === Module 10591: _isNativeReflectConstruct ===

// Module 10591 (_isNativeReflectConstruct)
import AbstractTimeExpressionParser from "AbstractTimeExpressionParser" /* 10460 */;
import ESTimeExpressionParser from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
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
class ESTimeExpressionParser {
  constructor() {
    self = this;
    tmp = ESTimeExpressionParser(this, ESTimeExpressionParser);
    tmp2 = closure_2;
    obj = closure_2(ESTimeExpressionParser);
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
_inherits(ESTimeExpressionParser, AbstractTimeExpressionParser.AbstractTimeExpressionParser);
const items = [
  {
    key: "primaryPrefix",
    value: function primaryPrefix() {
      return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
    }
  },
  {
    key: "followingPhase",
    value: function followingPhase() {
      return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:l)?|\\?)\\s*";
    }
  }
];

export default _createClass(ESTimeExpressionParser, items);